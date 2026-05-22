// ============================================
// SoulMentor — Main Application Controller
// Orchestrates all frontend layers & state
// ============================================

// Performance Utilities
const isMobile = () => window.innerWidth < 768;
const isSmallMobile = () => window.innerWidth < 480;
const isTouchDevice = () => {
  return (('ontouchstart' in window) ||
          (navigator.maxTouchPoints > 0) ||
          (navigator.msMaxTouchPoints > 0));
};

// Debounce utility for performance
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle utility for animations
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

document.addEventListener('DOMContentLoaded', () => {
  // Disable animations on low-end mobile devices
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasLowPerformance = navigator.deviceMemory && navigator.deviceMemory < 4;
  const shouldReduceAnimations = prefersReducedMotion || (isSmallMobile() && hasLowPerformance);

  if (shouldReduceAnimations) {
    document.documentElement.style.setProperty('--transition-fast', '0s');
    document.documentElement.style.setProperty('--transition-smooth', '0s');
  }

  // 1. Core State & Subsystems
  const storage = new StorageManager();
  const i18n = new I18n();
  const quotesDB = new QuotesDB();
  const wisdomEngine = new WisdomEngine(quotesDB, i18n);
  const voice = new VoiceSystem(i18n);
  const particles = new ParticleSystem('bg-particles');
  const tasks = new TasksManager(storage);
  const reminders = new RemindersManager(storage);
  const journal = new JournalManager(storage);

  // Settings/Preferences
  let ttsEnabled = storage.get('pref_tts_enabled', true);
  
  // Only initialize audio context on user interaction for better mobile performance
  let audioCtx = null;
  
  function getAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
  }
  
  function playSynthSound(type) {
    // Skip sound on very small devices to save resources
    if (isSmallMobile() && hasLowPerformance) return;
    
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;

    if (type === 'success') {
      // Sweet major third chime
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.12); // E5
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'click') {
      // Gentle tick
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'mic_start') {
      // Ascending sweep
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.15);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === 'mic_stop') {
      // Descending sweep
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.15);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);
    } else if (type === 'notification') {
      // Multi-tonal pleasant alert
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now); // A4
      osc.frequency.setValueAtTime(554.37, now + 0.08); // C#5
      osc.frequency.setValueAtTime(659.25, now + 0.16); // E5
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
    }
  }

  // 2. Navigation & Tabs Setup
  const tabButtons = document.querySelectorAll('.nav-btn');
  const viewSections = document.querySelectorAll('.app-view');
  const viewTitle = document.getElementById('view-title');

  function switchTab(targetTab) {
    playSynthSound('click');
    tabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === targetTab);
    });
    viewSections.forEach(view => {
      view.classList.toggle('active', view.id === `view-${targetTab}`);
    });
    
    // Update top header title
    const translationKey = `nav.${targetTab}`;
    viewTitle.textContent = i18n.t(translationKey);

    // Initialize/Refresh tab contents
    if (targetTab === 'wisdom') {
      renderWisdomFilters();
      renderQuotesGrid();
    } else if (targetTab === 'tasks') {
      renderTasksDashboard();
      renderActiveTasks();
      renderSuggestedTasks();
    } else if (targetTab === 'reminders') {
      renderActiveReminders();
      renderReminderTemplates();
      updateNotificationBtnState();
    } else if (targetTab === 'journal') {
      renderJournalDashboard();
      renderJournalEntries();
    }
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.getAttribute('data-tab'));
    });
  });

  // Mobile navigation drawer toggle
  const menuToggleBtn = document.getElementById('menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  menuToggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuToggleBtn.contains(e.target) && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
    }
  });

  // 3. i18n Language Switching
  const langSelect = document.getElementById('lang-select');
  
  // Set initial dropdown value
  const savedLang = storage.get('pref_lang', 'en');
  i18n.setLanguage(savedLang);
  langSelect.value = savedLang;

  function updateUiTranslations() {
    // 1. Text elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = i18n.t(key);
    });

    // 2. Form placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', i18n.t(key));
    });

    // 3. Dynamic header title update
    const activeBtn = document.querySelector('.nav-btn.active');
    if (activeBtn) {
      const targetTab = activeBtn.getAttribute('data-tab');
      viewTitle.textContent = i18n.t(`nav.${targetTab}`);
    }

    // Refresh dynamic parts
    const activeTab = activeBtn ? activeBtn.getAttribute('data-tab') : 'chat';
    if (activeTab === 'wisdom') {
      renderWisdomFilters();
      renderQuotesGrid();
    } else if (activeTab === 'tasks') {
      renderTasksDashboard();
      renderActiveTasks();
      renderSuggestedTasks();
    } else if (activeTab === 'reminders') {
      renderActiveReminders();
      renderReminderTemplates();
    } else if (activeTab === 'journal') {
      renderJournalDashboard();
      renderJournalEntries();
    }
  }

  langSelect.addEventListener('change', (e) => {
    const selected = e.target.value;
    i18n.setLanguage(selected);
    storage.set('pref_lang', selected);
    updateUiTranslations();
    playSynthSound('success');
  });

  // 4. Particle Background & Theme Interaction
  // Mobile optimization: Disable particles on small/low-performance devices
  const useParticles = !(isSmallMobile() && hasLowPerformance);
  
  if (useParticles) {
    particles.start();
  } else {
    // Keep particles object but don't animate - just render static background
    particles.draw(); // Draw initial state only
  }

  function updateAmbientMoodGlow(mood) {
    particles.setMood(mood);
    const moodDot = document.getElementById('mood-dot');
    moodDot.className = `mood-glow-indicator ${mood}`;
    
    // Dynamically adjust custom CSS variables based on mood
    const root = document.documentElement;
    const moodGlowColors = {
      neutral: 'rgba(155, 89, 182, 0.4)',
      sad: 'rgba(52, 152, 219, 0.4)',
      happy: 'rgba(241, 196, 15, 0.4)',
      inspired: 'rgba(26, 188, 156, 0.4)',
      angry: 'rgba(231, 76, 60, 0.4)',
      heartbreak: 'rgba(231, 76, 60, 0.4)'
    };
    root.style.setProperty('--ambient-glow-color', moodGlowColors[mood] || moodGlowColors.neutral);
  }

  // 5. Toast Notifications
  const toastContainer = document.getElementById('toast-container');
  
  function showToast(message, type = 'info') {
    playSynthSound('notification');
    const toast = document.createElement('div');
    toast.className = `toast glass-panel ${type}`;
    
    const iconSvg = type === 'success' 
      ? '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>'
      : '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>';
    
    toast.innerHTML = `
      <div class="toast-icon">${iconSvg}</div>
      <div class="toast-content">${message}</div>
    `;

    toastContainer.appendChild(toast);
    
    // Smooth transition entry
    setTimeout(() => toast.classList.add('visible'), 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 400);
    }, 5000);
  }

  // Bind reminder check triggers
  reminders.startChecking((triggeredReminder) => {
    showToast(triggeredReminder.text, 'reminder');
  });

  const enableNotificationsBtn = document.getElementById('enable-notifications-btn');
  
  function updateNotificationBtnState() {
    if (reminders.hasPermission()) {
      enableNotificationsBtn.textContent = 'System Notifications Enabled ✓';
      enableNotificationsBtn.classList.add('success-btn');
      enableNotificationsBtn.disabled = true;
    } else {
      enableNotificationsBtn.textContent = 'Enable System Notifications';
      enableNotificationsBtn.classList.remove('success-btn');
      enableNotificationsBtn.disabled = false;
    }
  }

  enableNotificationsBtn.addEventListener('click', async () => {
    playSynthSound('click');
    const granted = await reminders.requestPermission();
    if (granted) {
      showToast('Notifications enabled successfully!', 'success');
    } else {
      showToast('Notifications permission denied.', 'info');
    }
    updateNotificationBtnState();
  });

  // 6. CHAT MODULE
  const chatMessages = document.getElementById('chat-messages-container');
  const chatInput = document.getElementById('chat-input-field');
  const sendBtn = document.getElementById('send-btn');
  const voiceBtn = document.getElementById('voice-btn');
  const voiceOverlay = document.getElementById('voice-overlay');
  const ttsToggleBtn = document.getElementById('tts-toggle');
  const ttsIcon = document.getElementById('tts-icon');

  // Load chat history from storage or append initial welcome message
  let activeChats = storage.get('chat_history', []);
  
  function renderChatHistory() {
    chatMessages.innerHTML = '';
    if (activeChats.length === 0) {
      appendSystemMessage(i18n.t('chat.welcomeMessage'));
    } else {
      activeChats.forEach(chat => {
        if (chat.role === 'user') {
          appendUserMessageUi(chat.text);
        } else if (chat.role === 'ai') {
          appendAiMessageUi(chat.response);
        }
      });
    }
    scrollToBottom();
  }

  function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function appendSystemMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'message system-msg glass-panel';
    msg.innerHTML = `<div class="msg-body">${text.replace(/\n/g, '<br>')}</div>`;
    chatMessages.appendChild(msg);
  }

  function appendUserMessageUi(text) {
    const msg = document.createElement('div');
    msg.className = 'message user-msg';
    msg.innerHTML = `
      <div class="msg-bubble glass-panel">
        <div class="msg-body">${escapeHtml(text)}</div>
      </div>
    `;
    chatMessages.appendChild(msg);
    scrollToBottom();
  }

  function appendAiMessageUi(res) {
    const msg = document.createElement('div');
    msg.className = 'message ai-msg';

    let quoteHtml = '';
    if (res.quote) {
      quoteHtml = `
        <div class="wisdom-card quote-block glass-panel">
          <svg class="quote-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h3c0 3-1.5 5.5-4 6.5"></path>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h3c0 3-1.5 5.5-4 6.5"></path>
          </svg>
          <div class="quote-text">"${escapeHtml(res.quote.text)}"</div>
          <div class="quote-meta">— ${escapeHtml(res.quote.author)}, <span class="book-title">${escapeHtml(res.quote.book)}</span></div>
        </div>
      `;
    }

    let exampleHtml = '';
    if (res.realExample) {
      exampleHtml = `
        <div class="wisdom-card example-block glass-panel">
          <div class="card-label" data-i18n="chat.realExample">${i18n.t('chat.realExample')}</div>
          <p>${escapeHtml(res.realExample)}</p>
        </div>
      `;
    }

    let adviceHtml = '';
    if (res.advice) {
      adviceHtml = `
        <div class="wisdom-card stop-block glass-panel">
          <div class="card-label" data-i18n="chat.hereIsAdvice">${i18n.t('chat.hereIsAdvice')}</div>
          <p>${escapeHtml(res.advice)}</p>
        </div>
      `;
    }

    let challengeHtml = '';
    if (res.growthChallenge) {
      challengeHtml = `
        <div class="wisdom-card challenge-block glass-panel">
          <div class="card-label" data-i18n="chat.tryThis">${i18n.t('chat.tryThis')}</div>
          <p>${escapeHtml(res.growthChallenge)}</p>
        </div>
      `;
    }

    let jokeHtml = '';
    if (res.shouldTellJoke && res.joke) {
      jokeHtml = `
        <div class="wisdom-card joke-block glass-panel">
          <div class="joke-head">😄 Spark of Joy</div>
          <p>${escapeHtml(res.joke)}</p>
        </div>
      `;
    }

    msg.innerHTML = `
      <div class="msg-bubble glass-panel">
        <div class="msg-body">${res.text.replace(/\n/g, '<br>')}</div>
        <div class="wisdom-response-blocks">
          ${quoteHtml}
          ${exampleHtml}
          ${adviceHtml}
          ${challengeHtml}
          ${jokeHtml}
        </div>
      </div>
    `;

    chatMessages.appendChild(msg);
    scrollToBottom();
  }

  // Auto-speaking voice
  function speakResponseIfEnabled(res) {
    if (!ttsEnabled) return;
    
    // Construct response to read aloud: main text + advice
    let textToSpeak = res.text;
    if (res.advice) {
      textToSpeak += `. Here is where you should stop: ${res.advice}`;
    }
    voice.speak(textToSpeak);
  }

  // Handling submission
  function submitUserMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    chatInput.value = '';
    chatInput.style.height = 'auto'; // Reset textarea height

    // Add User Message UI
    appendUserMessageUi(text);
    playSynthSound('click');

    // Add temporary reflecting/thinking bubble
    const thinkingMsg = document.createElement('div');
    thinkingMsg.className = 'message ai-msg thinking';
    thinkingMsg.innerHTML = `<div class="msg-bubble glass-panel"><div class="typing-indicator"><span></span><span></span><span></span></div></div>`;
    chatMessages.appendChild(thinkingMsg);
    scrollToBottom();

    // Process Message asynchronously for natural flow
    setTimeout(() => {
      // Remove typing indicator
      thinkingMsg.remove();

      // Process
      const response = wisdomEngine.processMessage(text);
      
      // Save Chat history
      activeChats = wisdomEngine.conversationHistory;
      storage.set('chat_history', activeChats);

      // Add to Journal persistently
      journal.addEntry(text, response);

      // Render UI
      appendAiMessageUi(response);
      
      // Update ambient background colors
      updateAmbientMoodGlow(response.detectedMood);
      
      // Voice Speak
      speakResponseIfEnabled(response);
    }, 1000);
  }

  sendBtn.addEventListener('click', submitUserMessage);
  
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitUserMessage();
    }
  });

  // Dynamic textarea sizing
  chatInput.addEventListener('input', () => {
    chatInput.style.height = 'auto';
    chatInput.style.height = (chatInput.scrollHeight - 16) + 'px';
  });

  // Speech Recognition hookups
  voice.onResult = (transcript) => {
    chatInput.value = transcript;
    chatInput.dispatchEvent(new Event('input')); // resize
    submitUserMessage();
  };

  voice.onStart = () => {
    playSynthSound('mic_start');
    voiceOverlay.style.display = 'flex';
    voiceBtn.classList.add('recording');
  };

  voice.onEnd = () => {
    playSynthSound('mic_stop');
    voiceOverlay.style.display = 'none';
    voiceBtn.classList.remove('recording');
  };

  voice.onError = (err) => {
    console.error('Speech recognition error:', err);
    showToast(i18n.t('chat.voiceNotSupported'), 'info');
  };

  voiceBtn.addEventListener('click', () => {
    if (!voice.isSupported) {
      showToast(i18n.t('chat.voiceNotSupported'), 'info');
      return;
    }
    voice.toggleRecording();
  });

  // TTS Toggle
  function updateTtsIcon() {
    if (ttsEnabled) {
      ttsIcon.innerHTML = `
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
      `;
      ttsToggleBtn.setAttribute('title', 'Text-to-Speech Enabled');
      ttsToggleBtn.classList.remove('disabled');
    } else {
      ttsIcon.innerHTML = `
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <line x1="23" y1="9" x2="17" y2="15"></line>
        <line x1="17" y1="9" x2="23" y2="15"></line>
      `;
      ttsToggleBtn.setAttribute('title', 'Text-to-Speech Disabled');
      ttsToggleBtn.classList.add('disabled');
      voice.stopSpeaking();
    }
  }

  ttsToggleBtn.addEventListener('click', () => {
    ttsEnabled = !ttsEnabled;
    storage.set('pref_tts_enabled', ttsEnabled);
    updateTtsIcon();
    playSynthSound('click');
  });

  updateTtsIcon();

  // 7. WISDOM VIEW MODULE
  const quotesGrid = document.getElementById('quotes-grid-container');
  const wisdomFilters = document.getElementById('wisdom-filters');
  let selectedCategory = 'all';

  function renderWisdomFilters() {
    const categories = [
      'all',
      'selfRespect', 'lettingGo', 'boundaries', 'overthinking', 
      'heartbreak', 'selfLove', 'growth', 'strength', 'forgiveness'
    ];

    wisdomFilters.innerHTML = '';
    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `filter-chip ${selectedCategory === cat ? 'active' : ''}`;
      
      const i18nKey = cat === 'all' ? 'wisdom.filterAll' : `category.${cat}`;
      btn.textContent = i18n.t(i18nKey);
      
      btn.addEventListener('click', () => {
        playSynthSound('click');
        selectedCategory = cat;
        renderWisdomFilters();
        renderQuotesGrid();
      });
      wisdomFilters.appendChild(btn);
    });
  }

  function renderQuotesGrid() {
    const lang = i18n.getLanguage();
    quotesGrid.innerHTML = '';

    // Convert camelCase filter selection to quotes-database format (hyphenated)
    const dbCategoryMap = {
      selfRespect: 'self-respect',
      lettingGo: 'letting-go',
      boundaries: 'boundaries',
      overthinking: 'overthinking',
      heartbreak: 'heartbreak',
      selfLove: 'self-love',
      growth: 'growth',
      strength: 'strength',
      forgiveness: 'forgiveness'
    };

    const targetDbCat = dbCategoryMap[selectedCategory] || 'all';
    let filteredQuotes = quotesDB.quotes;
    
    if (targetDbCat !== 'all') {
      filteredQuotes = quotesDB.getQuotesByCategory(targetDbCat);
    }

    if (filteredQuotes.length === 0) {
      quotesGrid.innerHTML = `<div class="empty-state-text" data-i18n="wisdom.noResults">${i18n.t('wisdom.noResults')}</div>`;
      return;
    }

    filteredQuotes.forEach(q => {
      const text = q.text[lang] || q.text.en;
      const card = document.createElement('div');
      card.className = 'quote-card glass-panel';
      card.innerHTML = `
        <p class="quote-card-text">"${escapeHtml(text)}"</p>
        <div class="quote-card-meta">
          <div class="author-name">— ${escapeHtml(q.author)}</div>
          <div class="book-name">${escapeHtml(q.book)}</div>
        </div>
        <div class="card-chips">
          ${q.category.map(c => `<span class="card-chip">${c}</span>`).join('')}
        </div>
      `;
      quotesGrid.appendChild(card);
    });
  }

  // 8. TASKS MODULE
  const taskAddForm = document.getElementById('task-add-form');
  const taskInput = document.getElementById('task-input');
  const taskCategorySelect = document.getElementById('task-category-select');
  const activeTasksList = document.getElementById('active-tasks-list');
  const suggestedTasksList = document.getElementById('suggested-tasks-list');
  const streakCount = document.getElementById('streak-count');
  const taskBadge = document.getElementById('task-badge');
  const tasksPercent = document.getElementById('tasks-percent');
  const tasksProgressCircle = document.getElementById('tasks-progress-circle');

  // SVG Progress Ring calculations
  const progressRadius = 34;
  const progressCircumference = 2 * Math.PI * progressRadius;
  if (tasksProgressCircle) {
    tasksProgressCircle.style.strokeDasharray = `${progressCircumference} ${progressCircumference}`;
    tasksProgressCircle.style.strokeDashoffset = progressCircumference;
  }

  function setProgress(percent) {
    if (!tasksProgressCircle) return;
    const offset = progressCircumference - (percent / 100) * progressCircumference;
    tasksProgressCircle.style.strokeDashoffset = offset;
    tasksPercent.textContent = `${Math.round(percent)}%`;
  }

  function updateTaskBadgeCount() {
    const list = tasks.getTasks();
    const incompleteCount = list.filter(t => !t.completed).length;
    if (incompleteCount > 0) {
      taskBadge.textContent = incompleteCount;
      taskBadge.style.display = 'inline-flex';
    } else {
      taskBadge.style.display = 'none';
    }
  }

  function renderTasksDashboard() {
    streakCount.textContent = tasks.getStreak();
    
    const list = tasks.getTasks();
    if (list.length === 0) {
      setProgress(0);
      return;
    }
    const completedCount = list.filter(t => t.completed).length;
    const percentage = (completedCount / list.length) * 100;
    setProgress(percentage);
    updateTaskBadgeCount();
  }

  function renderActiveTasks() {
    activeTasksList.innerHTML = '';
    const list = tasks.getTasks();

    if (list.length === 0) {
      activeTasksList.innerHTML = `<div class="empty-state-text" data-i18n="tasks.empty">${i18n.t('tasks.empty')}</div>`;
      return;
    }

    list.forEach(task => {
      const item = document.createElement('div');
      item.className = `task-item glass-panel ${task.completed ? 'completed' : ''}`;
      
      const categoryEmoji = {
        growth: '💡',
        selfCare: '🧘',
        social: '🤝',
        health: '💧'
      }[task.category] || '💡';

      item.innerHTML = `
        <label class="task-checkbox-container">
          <input type="checkbox" ${task.completed ? 'checked' : ''}>
          <span class="custom-checkbox"></span>
        </label>
        <span class="task-item-text">${escapeHtml(task.text)}</span>
        <span class="task-item-cat-tag">${categoryEmoji}</span>
        <button class="delete-task-btn" title="Delete Task">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      `;

      // Checkbox event listener
      item.querySelector('input[type="checkbox"]').addEventListener('change', () => {
        tasks.toggleTask(task.id);
        if (!task.completed) {
          playSynthSound('success');
          showToast('Task completed! Keep growing!', 'success');
        } else {
          playSynthSound('click');
        }
        renderTasksDashboard();
        renderActiveTasks();
      });

      // Delete event listener
      item.querySelector('.delete-task-btn').addEventListener('click', () => {
        playSynthSound('click');
        tasks.deleteTask(task.id);
        renderTasksDashboard();
        renderActiveTasks();
      });

      activeTasksList.appendChild(item);
    });
  }

  function renderSuggestedTasks() {
    suggestedTasksList.innerHTML = '';
    const lang = i18n.getLanguage();
    
    // Retrieve suggestions array based on selected language
    const listSuggestions = i18n.translations[lang]?.['tasks.suggestions'] || i18n.translations.en['tasks.suggestions'];
    
    // Pick 4 suggestions randomly
    const shuffled = [...listSuggestions].sort(() => 0.5 - Math.random()).slice(0, 4);

    shuffled.forEach(text => {
      const item = document.createElement('div');
      item.className = 'suggested-task-card glass-panel';
      item.innerHTML = `
        <span class="suggest-text">${escapeHtml(text)}</span>
        <button class="add-suggest-btn" title="Add to my tasks">+</button>
      `;

      item.querySelector('.add-suggest-btn').addEventListener('click', () => {
        playSynthSound('success');
        tasks.addTask(text, 'growth');
        showToast('Suggested task added!', 'success');
        renderTasksDashboard();
        renderActiveTasks();
      });

      suggestedTasksList.appendChild(item);
    });
  }

  taskAddForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = taskInput.value.trim();
    const cat = taskCategorySelect.value;
    if (!text) return;

    playSynthSound('success');
    tasks.addTask(text, cat);
    taskInput.value = '';

    renderTasksDashboard();
    renderActiveTasks();
  });


  // 9. REMINDERS MODULE
  const reminderAddForm = document.getElementById('reminder-add-form');
  const reminderTime = document.getElementById('reminder-time');
  const reminderText = document.getElementById('reminder-text');
  const activeRemindersList = document.getElementById('active-reminders-list');
  const reminderTemplatesList = document.getElementById('reminder-templates-list');

  function renderActiveReminders() {
    activeRemindersList.innerHTML = '';
    const list = reminders.getReminders();

    if (list.length === 0) {
      activeRemindersList.innerHTML = `<div class="empty-state-text" data-i18n="reminders.empty">${i18n.t('reminders.empty')}</div>`;
      return;
    }

    list.forEach(rem => {
      const item = document.createElement('div');
      item.className = `reminder-item glass-panel ${rem.enabled ? '' : 'disabled'}`;
      item.innerHTML = `
        <div class="reminder-time-badge">${escapeHtml(rem.time)}</div>
        <div class="reminder-body-text">${escapeHtml(rem.text)}</div>
        <div class="reminder-actions">
          <label class="switch-container">
            <input type="checkbox" ${rem.enabled ? 'checked' : ''}>
            <span class="switch-slider"></span>
          </label>
          <button class="delete-reminder-btn" title="Delete Reminder">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      `;

      // Toggle switch listener
      item.querySelector('input[type="checkbox"]').addEventListener('change', () => {
        playSynthSound('click');
        reminders.toggleReminder(rem.id);
        renderActiveReminders();
      });

      // Delete listener
      item.querySelector('.delete-reminder-btn').addEventListener('click', () => {
        playSynthSound('click');
        reminders.deleteReminder(rem.id);
        renderActiveReminders();
      });

      activeRemindersList.appendChild(item);
    });
  }

  function renderReminderTemplates() {
    reminderTemplatesList.innerHTML = '';
    const lang = i18n.getLanguage();
    const templates = i18n.translations[lang]?.['reminders.templates'] || i18n.translations.en['reminders.templates'];

    templates.forEach(text => {
      const card = document.createElement('div');
      card.className = 'template-card glass-panel';
      card.textContent = text;
      
      card.addEventListener('click', () => {
        playSynthSound('click');
        reminderText.value = text;
        
        // Auto focus time
        reminderTime.focus();
      });
      reminderTemplatesList.appendChild(card);
    });
  }

  reminderAddForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const time = reminderTime.value;
    const text = reminderText.value.trim();
    if (!time || !text) return;

    playSynthSound('success');
    reminders.addReminder(time, text);
    reminderText.value = '';
    reminderTime.value = '';

    renderActiveReminders();
  });


  // 10. JOURNAL MODULE
  const journalEntriesList = document.getElementById('journal-entries-list');
  const journalSearchInput = document.getElementById('journal-search-input');
  const journalMoodFilter = document.getElementById('journal-mood-filter');
  const journalTopicFilter = document.getElementById('journal-topic-filter');
  const moodStatsBars = document.getElementById('mood-stats-bars');
  const growthMomentsList = document.getElementById('journal-growth-moments-list');

  // Build filter dropdowns dynamically based on language keys
  function initJournalFilterDropdowns() {
    const lang = i18n.getLanguage();
    
    // Moods dropdown values
    const moods = ['happy', 'sad', 'angry', 'anxious', 'hopeful', 'neutral', 'heartbreak', 'lonely', 'disrespected'];
    journalMoodFilter.innerHTML = '<option value="all">All Moods</option>';
    moods.forEach(m => {
      const option = document.createElement('option');
      option.value = m;
      option.textContent = i18n.t(`mood.${m}`);
      journalMoodFilter.appendChild(option);
    });

    // Topics dropdown values
    const topics = [
      'self-respect', 'letting-go', 'boundaries', 'overthinking', 'heartbreak', 
      'self-love', 'growth', 'strength', 'forgiveness', 'courage', 'healing'
    ];
    journalTopicFilter.innerHTML = '<option value="all">All Topics</option>';
    topics.forEach(t => {
      const option = document.createElement('option');
      option.value = t;
      // Map topic to translation category key
      const camelTopic = t.replace(/-([a-z])/g, g => g[1].toUpperCase());
      option.textContent = i18n.t(`category.${camelTopic}`);
      journalTopicFilter.appendChild(option);
    });
  }

  function renderJournalDashboard() {
    const stats = journal.getMoodTrends();
    moodStatsBars.innerHTML = '';

    const moods = ['happy', 'sad', 'angry', 'anxious', 'hopeful', 'neutral', 'heartbreak', 'lonely', 'disrespected'];
    const moodClassColorMap = {
      happy: 'mood-bar-happy',
      sad: 'mood-bar-sad',
      angry: 'mood-bar-angry',
      anxious: 'mood-bar-anxious',
      hopeful: 'mood-bar-hopeful',
      neutral: 'mood-bar-neutral',
      heartbreak: 'mood-bar-angry',
      lonely: 'mood-bar-sad',
      disrespected: 'mood-bar-neutral'
    };

    moods.forEach(m => {
      const count = stats[m] || 0;
      const pct = stats.total > 0 ? (count / stats.total) * 100 : 0;
      
      const barWrapper = document.createElement('div');
      barWrapper.className = 'mood-bar-row';
      barWrapper.innerHTML = `
        <div class="mood-bar-label">${i18n.t(`mood.${m}`)}</div>
        <div class="mood-bar-bg">
          <div class="mood-bar-fill ${moodClassColorMap[m] || 'neutral'}" style="width: ${pct}%"></div>
        </div>
        <div class="mood-bar-pct">${Math.round(pct)}% (${count})</div>
      `;
      moodStatsBars.appendChild(barWrapper);
    });

    // Render Growth Moments list
    growthMomentsList.innerHTML = '';
    const growths = journal.getGrowthMoments().slice(0, 3); // top 3 recent
    
    if (growths.length === 0) {
      growthMomentsList.innerHTML = '<div class="empty-state-text">No growth moments recorded yet. Keep writing and learning!</div>';
      return;
    }

    growths.forEach(e => {
      const card = document.createElement('div');
      card.className = 'growth-moment-card glass-panel';
      card.innerHTML = `
        <div class="growth-card-header">
          <span class="growth-emoji">✨</span>
          <span class="growth-date">${new Date(e.createdAt).toLocaleDateString()}</span>
        </div>
        <p class="growth-card-text">"${escapeHtml(e.problemText)}"</p>
      `;
      growthMomentsList.appendChild(card);
    });
  }

  function renderJournalEntries() {
    const q = journalSearchInput.value;
    const mood = journalMoodFilter.value;
    const topic = journalTopicFilter.value;
    
    const entries = journal.searchEntries(q, mood, topic);
    journalEntriesList.innerHTML = '';

    if (entries.length === 0) {
      journalEntriesList.innerHTML = `<div class="empty-state-text" data-i18n="journal.empty">${i18n.t('journal.empty')}</div>`;
      return;
    }

    entries.forEach(e => {
      const card = document.createElement('div');
      card.className = 'journal-entry-card glass-panel';
      
      let quoteHtml = '';
      if (e.responseQuote) {
        quoteHtml = `
          <div class="journal-entry-quote">
            <span class="quote-text">"${escapeHtml(e.responseQuote.text)}"</span>
            <span class="quote-author">— ${escapeHtml(e.responseQuote.author)}</span>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="entry-meta">
          <span class="entry-date">${new Date(e.createdAt).toLocaleString()}</span>
          <span class="entry-mood-badge ${e.detectedMood}">${i18n.t(`mood.${e.detectedMood}`)}</span>
        </div>
        <div class="entry-problem">
          <p>${escapeHtml(e.problemText)}</p>
        </div>
        <div class="entry-response">
          ${quoteHtml}
          ${e.responseAdvice ? `<p class="entry-advice"><strong>Advice:</strong> ${escapeHtml(e.responseAdvice)}</p>` : ''}
        </div>
        <button class="delete-entry-btn" title="Delete Entry">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      `;

      card.querySelector('.delete-entry-btn').addEventListener('click', () => {
        playSynthSound('click');
        journal.deleteEntry(e.id);
        renderJournalDashboard();
        renderJournalEntries();
      });

      journalEntriesList.appendChild(card);
    });
  }

  // Filter change bindings
  journalSearchInput.addEventListener('input', renderJournalEntries);
  journalMoodFilter.addEventListener('change', renderJournalEntries);
  journalTopicFilter.addEventListener('change', renderJournalEntries);

  // Helper Escape HTML
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // 11. INITIALIZATION WRAP-UP
  updateUiTranslations();
  initJournalFilterDropdowns();
  renderChatHistory();
  renderTasksDashboard();
  
  // Set neutral ambient glow indicator
  updateAmbientMoodGlow('neutral');

  // ============================================
  // 12. MOBILE PERFORMANCE OPTIMIZATIONS
  // ============================================
  
  // Fix viewport height on mobile (address bar issue)
  if (isMobile()) {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setViewportHeight();
    window.addEventListener('resize', debounce(setViewportHeight, 250));
    window.addEventListener('orientationchange', setViewportHeight);
  }

  // Optimize scroll performance on mobile
  if (isTouchDevice()) {
    const scrollableElements = document.querySelectorAll('.chat-messages, .views-wrapper, .journal-entries-list');
    scrollableElements.forEach(el => {
      el.style.webkitOverflowScrolling = 'touch';
    });
  }

  // Debounce window resize for particles
  const handleResize = debounce(() => {
    if (particles && typeof particles.resize === 'function') {
      particles.resize();
    }
  }, 300);

  window.addEventListener('resize', handleResize);

  // Optimize touch event handling - disable hover effects on touch devices
  if (isTouchDevice()) {
    document.documentElement.classList.add('touch-device');
    
    // Add touchstart listener to buttons to show active state
    document.querySelectorAll('button, .nav-btn, .primary-btn').forEach(btn => {
      btn.addEventListener('touchstart', function() {
        this.classList.add('touch-active');
      });
      btn.addEventListener('touchend', function() {
        this.classList.remove('touch-active');
      });
    });
  }

  // Reduce animation frame rate on low-end devices
  if (hasLowPerformance && isMobile()) {
    // This is a hint to reduce animation complexity
    console.log('Low-performance device detected: Animations reduced');
  }

  // Lazy load non-critical resources after initial render
  if (window.requestIdleCallback) {
    requestIdleCallback(() => {
      // Non-critical operations here
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      // Non-critical operations here
    }, 2000);
  }

  // Prevent double-tap zoom on mobile (improves responsiveness)
  document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  }, { passive: false });

  // Handle orientation change for better mobile experience
  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      // Recalculate layouts after orientation change
      if (particles && typeof particles.resize === 'function') {
        particles.resize();
      }
    }, 100);
  });

  console.log('SoulMentor loaded successfully! Mobile optimized:', isMobile());
});
