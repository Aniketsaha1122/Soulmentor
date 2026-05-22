// ============================================
// SoulMentor — Internationalization (i18n)
// Supports: English, Hindi, Bengali
// ============================================

class I18n {
  constructor() {
    this.currentLang = 'en';
    this.translations = {
      en: {
        // App
        'app.title': 'SoulMentor',
        'app.subtitle': 'Your Personal Growth Companion',
        'app.welcome': "Hello! I'm SoulMentor — your personal guide for emotional growth, self-respect, and inner peace. Share what's weighing on your heart, and I'll respond with wisdom from the world's greatest writers.",

        // Navigation
        'nav.chat': 'Chat',
        'nav.wisdom': 'Wisdom',
        'nav.tasks': 'Tasks',
        'nav.reminders': 'Reminders',
        'nav.journal': 'Journal',

        // Chat
        'chat.placeholder': "Share what's on your mind...",
        'chat.send': 'Send',
        'chat.recording': 'Recording... tap to stop',
        'chat.thinking': 'Reflecting...',
        'chat.voiceNotSupported': 'Voice recording is not supported in your browser. Please try Chrome or Edge.',
        'chat.welcomeMessage': "Welcome to SoulMentor 💫\n\nI'm here to listen — without judgment. Share whatever is weighing on your heart. Whether it's heartbreak, self-doubt, anger, or just feeling lost — I'll respond with wisdom from the world's greatest writers and thinkers.\n\nYou are not alone in this. Let's grow together.",
        'chat.emptyState': 'Start a conversation by typing or recording your voice below.',
        'chat.quoteFrom': 'From',
        'chat.tryThis': '✨ Growth Challenge',
        'chat.realExample': '📖 Real Example',
        'chat.hereIsAdvice': '💡 Where You Should Stop',

        // Wisdom
        'wisdom.title': 'Wisdom Library',
        'wisdom.subtitle': 'Curated quotes from the greatest minds',
        'wisdom.filterAll': 'All',
        'wisdom.monthlyPicks': "This Month's Picks",
        'wisdom.noResults': 'No quotes match your filter. Try another category.',

        // Tasks
        'tasks.title': 'Daily Growth Tasks',
        'tasks.subtitle': 'Small steps lead to big transformations',
        'tasks.add': 'Add Task',
        'tasks.placeholder': 'What do you want to work on today?',
        'tasks.empty': "No tasks yet. Add your first growth task or pick from suggestions below!",
        'tasks.streak': 'Day Streak',
        'tasks.completed': 'Completed',
        'tasks.delete': 'Delete',
        'tasks.suggestions': [
          'Write 3 things you are grateful for',
          'Set one healthy boundary today',
          'Compliment yourself in the mirror',
          'Take a 15-minute walk without your phone',
          'Write a letter to your future self',
          'Forgive someone (including yourself)',
          'Say "no" to something that drains you',
          'Read 10 pages of a good book',
          'Meditate for 5 minutes',
          'Do one thing that scares you (in a good way)'
        ],
        'tasks.categories.selfCare': 'Self-Care',
        'tasks.categories.growth': 'Growth',
        'tasks.categories.social': 'Social',
        'tasks.categories.health': 'Health',

        // Reminders
        'reminders.title': 'Daily Reminders',
        'reminders.subtitle': 'Gentle nudges for your well-being',
        'reminders.add': 'Add Reminder',
        'reminders.timePlaceholder': 'Time',
        'reminders.textPlaceholder': 'Reminder text...',
        'reminders.empty': 'No reminders set. Create one or pick a template below!',
        'reminders.templates': [
          'Drink water 💧',
          'Take a deep breath 🌬️',
          'You are enough ❤️',
          'Stand up and stretch 🧘',
          'Call someone you love 📞',
          'Write in your journal 📓'
        ],
        'reminders.notificationPermission': 'Enable notifications to get reminded!',

        // Journal
        'journal.title': 'Your Journey',
        'journal.subtitle': 'A record of your growth and healing',
        'journal.search': 'Search your entries...',
        'journal.empty': 'Your journal is empty. As you chat with SoulMentor, your conversations will appear here.',
        'journal.totalEntries': 'Total Entries',
        'journal.moodTrend': 'Mood Trend',
        'journal.growthMoments': 'Growth Moments',
        'journal.showMore': 'Show more',
        'journal.showLess': 'Show less',

        // Common
        'common.save': 'Save',
        'common.cancel': 'Cancel',
        'common.delete': 'Delete',
        'common.edit': 'Edit',
        'common.close': 'Close',
        'common.today': 'Today',
        'common.yesterday': 'Yesterday',
        'common.daysAgo': 'days ago',

        // Moods
        'mood.happy': 'Happy',
        'mood.sad': 'Sad',
        'mood.angry': 'Angry',
        'mood.anxious': 'Anxious',
        'mood.hopeful': 'Hopeful',
        'mood.neutral': 'Neutral',
        'mood.heartbreak': 'Heartbreak',
        'mood.lonely': 'Lonely',
        'mood.disrespected': 'Disrespected',

        // Categories
        'category.selfRespect': 'Self-Respect',
        'category.lettingGo': 'Letting Go',
        'category.boundaries': 'Boundaries',
        'category.overthinking': 'Overthinking',
        'category.heartbreak': 'Heartbreak',
        'category.selfLove': 'Self-Love',
        'category.growth': 'Growth',
        'category.strength': 'Strength',
        'category.movingOn': 'Moving On',
        'category.forgiveness': 'Forgiveness',
        'category.courage': 'Courage',
        'category.healing': 'Healing',
        'category.discipline': 'Discipline',
        'category.purpose': 'Purpose',
        'category.vulnerability': 'Vulnerability'
      },

      hi: {
        // App
        'app.title': 'SoulMentor',
        'app.subtitle': 'आपका व्यक्तिगत विकास साथी',
        'app.welcome': 'नमस्ते! मैं SoulMentor हूँ — भावनात्मक विकास, आत्म-सम्मान और आंतरिक शांति के लिए आपका निजी मार्गदर्शक। अपने दिल की बात साझा करें, और मैं दुनिया के महान लेखकों की बुद्धिमत्ता से जवाब दूँगा।',

        // Navigation
        'nav.chat': 'बातचीत',
        'nav.wisdom': 'ज्ञान',
        'nav.tasks': 'कार्य',
        'nav.reminders': 'रिमाइंडर',
        'nav.journal': 'डायरी',

        // Chat
        'chat.placeholder': 'अपने मन की बात लिखें...',
        'chat.send': 'भेजें',
        'chat.recording': 'रिकॉर्डिंग... रोकने के लिए टैप करें',
        'chat.thinking': 'सोच रहा हूँ...',
        'chat.voiceNotSupported': 'आपके ब्राउज़र में वॉइस रिकॉर्डिंग उपलब्ध नहीं है। कृपया Chrome या Edge का उपयोग करें।',
        'chat.welcomeMessage': 'SoulMentor में आपका स्वागत है 💫\n\nमैं यहाँ सुनने के लिए हूँ — बिना किसी निर्णय के। जो भी आपके दिल पर बोझ है, वो बाँटें। चाहे दिल टूटा हो, आत्मविश्वास कम हो, गुस्सा हो, या बस खोया हुआ महसूस कर रहे हों — मैं दुनिया के महान लेखकों की बुद्धिमत्ता से जवाब दूँगा।\n\nआप अकेले नहीं हैं। चलिए साथ मिलकर आगे बढ़ते हैं।',
        'chat.emptyState': 'नीचे टाइप करके या अपनी आवाज़ रिकॉर्ड करके बातचीत शुरू करें।',
        'chat.quoteFrom': 'से',
        'chat.tryThis': '✨ विकास चुनौती',
        'chat.realExample': '📖 वास्तविक उदाहरण',
        'chat.hereIsAdvice': '💡 यहाँ रुकना ज़रूरी है',

        // Wisdom
        'wisdom.title': 'ज्ञान पुस्तकालय',
        'wisdom.subtitle': 'महान विचारकों के अनमोल विचार',
        'wisdom.filterAll': 'सभी',
        'wisdom.monthlyPicks': 'इस महीने के चयन',
        'wisdom.noResults': 'इस फ़िल्टर से कोई उद्धरण मेल नहीं खाता। दूसरी श्रेणी आज़माएं।',

        // Tasks
        'tasks.title': 'दैनिक विकास कार्य',
        'tasks.subtitle': 'छोटे कदम बड़े बदलाव लाते हैं',
        'tasks.add': 'कार्य जोड़ें',
        'tasks.placeholder': 'आज आप किस पर काम करना चाहते हैं?',
        'tasks.empty': 'अभी कोई कार्य नहीं है। अपना पहला कार्य जोड़ें या नीचे के सुझावों में से चुनें!',
        'tasks.streak': 'दिन की लगातार प्रगति',
        'tasks.completed': 'पूर्ण',
        'tasks.delete': 'हटाएं',
        'tasks.suggestions': [
          '3 चीज़ें लिखें जिनके लिए आप आभारी हैं',
          'आज एक स्वस्थ सीमा निर्धारित करें',
          'आईने में खुद की तारीफ करें',
          'बिना फ़ोन के 15 मिनट टहलें',
          'अपने भविष्य के लिए एक पत्र लिखें',
          'किसी को माफ करें (खुद को भी)',
          'जो आपकी ऊर्जा खींचता है उसे "ना" कहें',
          'एक अच्छी किताब के 10 पेज पढ़ें',
          '5 मिनट ध्यान करें',
          'एक ऐसा काम करें जिसमें डर लगता है (अच्छे तरीके से)'
        ],
        'tasks.categories.selfCare': 'आत्म-देखभाल',
        'tasks.categories.growth': 'विकास',
        'tasks.categories.social': 'सामाजिक',
        'tasks.categories.health': 'स्वास्थ्य',

        // Reminders
        'reminders.title': 'दैनिक रिमाइंडर',
        'reminders.subtitle': 'आपकी भलाई के लिए कोमल याद',
        'reminders.add': 'रिमाइंडर जोड़ें',
        'reminders.timePlaceholder': 'समय',
        'reminders.textPlaceholder': 'रिमाइंडर संदेश...',
        'reminders.empty': 'कोई रिमाइंडर सेट नहीं है। एक बनाएं या नीचे टेम्प्लेट चुनें!',
        'reminders.templates': [
          'पानी पिएं 💧',
          'गहरी साँस लें 🌬️',
          'आप काफ़ी हैं ❤️',
          'खड़े होकर स्ट्रेच करें 🧘',
          'किसी प्रियजन को कॉल करें 📞',
          'अपनी डायरी में लिखें 📓'
        ],
        'reminders.notificationPermission': 'रिमाइंडर पाने के लिए नोटिफ़िकेशन चालू करें!',

        // Journal
        'journal.title': 'आपकी यात्रा',
        'journal.subtitle': 'आपके विकास और उपचार का रिकॉर्ड',
        'journal.search': 'अपनी प्रविष्टियाँ खोजें...',
        'journal.empty': 'आपकी डायरी खाली है। जैसे-जैसे आप SoulMentor से बात करेंगे, आपकी बातचीत यहाँ दिखेगी।',
        'journal.totalEntries': 'कुल प्रविष्टियाँ',
        'journal.moodTrend': 'मनोदशा प्रवृत्ति',
        'journal.growthMoments': 'विकास के पल',
        'journal.showMore': 'और दिखाएं',
        'journal.showLess': 'कम दिखाएं',

        // Common
        'common.save': 'सहेजें',
        'common.cancel': 'रद्द करें',
        'common.delete': 'हटाएं',
        'common.edit': 'संपादित करें',
        'common.close': 'बंद करें',
        'common.today': 'आज',
        'common.yesterday': 'कल',
        'common.daysAgo': 'दिन पहले',

        // Moods
        'mood.happy': 'खुश',
        'mood.sad': 'उदास',
        'mood.angry': 'गुस्सा',
        'mood.anxious': 'चिंतित',
        'mood.hopeful': 'आशावादी',
        'mood.neutral': 'सामान्य',
        'mood.heartbreak': 'दिल टूटा',
        'mood.lonely': 'अकेला',
        'mood.disrespected': 'अपमानित',

        // Categories
        'category.selfRespect': 'आत्म-सम्मान',
        'category.lettingGo': 'छोड़ देना',
        'category.boundaries': 'सीमाएं',
        'category.overthinking': 'ज़्यादा सोचना',
        'category.heartbreak': 'दिल टूटना',
        'category.selfLove': 'आत्म-प्रेम',
        'category.growth': 'विकास',
        'category.strength': 'ताकत',
        'category.movingOn': 'आगे बढ़ना',
        'category.forgiveness': 'क्षमा',
        'category.courage': 'साहस',
        'category.healing': 'उपचार',
        'category.discipline': 'अनुशासन',
        'category.purpose': 'उद्देश्य',
        'category.vulnerability': 'संवेदनशीलता'
      },

      bn: {
        // App
        'app.title': 'SoulMentor',
        'app.subtitle': 'আপনার ব্যক্তিগত বিকাশের সঙ্গী',
        'app.welcome': 'হ্যালো! আমি SoulMentor — আবেগীয় বৃদ্ধি, আত্ম-সম্মান এবং অন্তরের শান্তির জন্য আপনার ব্যক্তিগত গাইড। আপনার মনের কথা শেয়ার করুন, আমি বিশ্বের সেরা লেখকদের জ্ঞান দিয়ে উত্তর দেব।',

        // Navigation
        'nav.chat': 'কথোপকথন',
        'nav.wisdom': 'জ্ঞান',
        'nav.tasks': 'কাজ',
        'nav.reminders': 'রিমাইন্ডার',
        'nav.journal': 'দিনলিপি',

        // Chat
        'chat.placeholder': 'আপনার মনের কথা লিখুন...',
        'chat.send': 'পাঠান',
        'chat.recording': 'রেকর্ডিং... থামাতে ট্যাপ করুন',
        'chat.thinking': 'ভাবছি...',
        'chat.voiceNotSupported': 'আপনার ব্রাউজারে ভয়েস রেকর্ডিং সমর্থিত নয়। Chrome বা Edge ব্যবহার করুন।',
        'chat.welcomeMessage': 'SoulMentor-এ স্বাগতম 💫\n\nআমি এখানে শোনার জন্য — কোনো বিচার ছাড়া। যা কিছু আপনার হৃদয়ে ভার হয়ে আছে, তা ভাগ করে নিন। হৃদয় ভেঙে গেলে, আত্মবিশ্বাস কমে গেলে, রাগ হলে, বা শুধু হারিয়ে যাওয়া অনুভব করলে — আমি বিশ্বের সেরা লেখকদের জ্ঞান দিয়ে সাড়া দেব।\n\nআপনি একা নন। চলুন একসাথে এগিয়ে যাই।',
        'chat.emptyState': 'নীচে টাইপ করে বা আপনার কণ্ঠ রেকর্ড করে কথোপকথন শুরু করুন।',
        'chat.quoteFrom': 'থেকে',
        'chat.tryThis': '✨ বৃদ্ধির চ্যালেঞ্জ',
        'chat.realExample': '📖 বাস্তব উদাহরণ',
        'chat.hereIsAdvice': '💡 এখানে থামা দরকার',

        // Wisdom
        'wisdom.title': 'জ্ঞান ভাণ্ডার',
        'wisdom.subtitle': 'মহান মনীষীদের অমূল্য বাণী',
        'wisdom.filterAll': 'সব',
        'wisdom.monthlyPicks': 'এই মাসের বাছাই',
        'wisdom.noResults': 'এই ফিল্টারে কোনো উদ্ধৃতি মেলেনি। অন্য বিভাগ চেষ্টা করুন।',

        // Tasks
        'tasks.title': 'দৈনিক বৃদ্ধির কাজ',
        'tasks.subtitle': 'ছোট পদক্ষেপ বড় পরিবর্তন আনে',
        'tasks.add': 'কাজ যোগ করুন',
        'tasks.placeholder': 'আজ আপনি কীসের উপর কাজ করতে চান?',
        'tasks.empty': 'এখনো কোনো কাজ নেই। আপনার প্রথম কাজ যোগ করুন বা নীচের পরামর্শ থেকে বেছে নিন!',
        'tasks.streak': 'দিনের ধারা',
        'tasks.completed': 'সম্পন্ন',
        'tasks.delete': 'মুছুন',
        'tasks.suggestions': [
          '৩টি জিনিস লিখুন যার জন্য আপনি কৃতজ্ঞ',
          'আজ একটি সুস্থ সীমানা নির্ধারণ করুন',
          'আয়নায় নিজের প্রশংসা করুন',
          'ফোন ছাড়া ১৫ মিনিট হাঁটুন',
          'আপনার ভবিষ্যৎ নিজেকে একটি চিঠি লিখুন',
          'কাউকে ক্ষমা করুন (নিজেকেও)',
          'যা আপনার শক্তি শোষণ করে তাকে "না" বলুন',
          'একটি ভালো বইয়ের ১০ পাতা পড়ুন',
          '৫ মিনিট ধ্যান করুন',
          'একটি কাজ করুন যা আপনাকে ভয় দেয় (ভালো উপায়ে)'
        ],
        'tasks.categories.selfCare': 'আত্ম-যত্ন',
        'tasks.categories.growth': 'বৃদ্ধি',
        'tasks.categories.social': 'সামাজিক',
        'tasks.categories.health': 'স্বাস্থ্য',

        // Reminders
        'reminders.title': 'দৈনিক রিমাইন্ডার',
        'reminders.subtitle': 'আপনার মঙ্গলের জন্য কোমল মনে করিয়ে দেওয়া',
        'reminders.add': 'রিমাইন্ডার যোগ করুন',
        'reminders.timePlaceholder': 'সময়',
        'reminders.textPlaceholder': 'রিমাইন্ডার বার্তা...',
        'reminders.empty': 'কোনো রিমাইন্ডার সেট নেই। একটি তৈরি করুন বা নীচে টেমপ্লেট বেছে নিন!',
        'reminders.templates': [
          'জল পান করুন 💧',
          'গভীর শ্বাস নিন 🌬️',
          'আপনি যথেষ্ট ❤️',
          'উঠে দাঁড়ান এবং স্ট্রেচ করুন 🧘',
          'প্রিয় কাউকে ফোন করুন 📞',
          'আপনার দিনলিপিতে লিখুন 📓'
        ],
        'reminders.notificationPermission': 'রিমাইন্ডার পেতে নোটিফিকেশন চালু করুন!',

        // Journal
        'journal.title': 'আপনার যাত্রা',
        'journal.subtitle': 'আপনার বৃদ্ধি ও নিরাময়ের নথি',
        'journal.search': 'আপনার এন্ট্রি খুঁজুন...',
        'journal.empty': 'আপনার দিনলিপি খালি। SoulMentor-এর সাথে কথা বললে আপনার কথোপকথন এখানে দেখা যাবে।',
        'journal.totalEntries': 'মোট এন্ট্রি',
        'journal.moodTrend': 'মেজাজের প্রবণতা',
        'journal.growthMoments': 'বৃদ্ধির মুহূর্ত',
        'journal.showMore': 'আরো দেখুন',
        'journal.showLess': 'কম দেখুন',

        // Common
        'common.save': 'সংরক্ষণ',
        'common.cancel': 'বাতিল',
        'common.delete': 'মুছুন',
        'common.edit': 'সম্পাদনা',
        'common.close': 'বন্ধ',
        'common.today': 'আজ',
        'common.yesterday': 'গতকাল',
        'common.daysAgo': 'দিন আগে',

        // Moods
        'mood.happy': 'খুশি',
        'mood.sad': 'দুঃখিত',
        'mood.angry': 'রাগান্বিত',
        'mood.anxious': 'উদ্বিগ্ন',
        'mood.hopeful': 'আশাবাদী',
        'mood.neutral': 'স্বাভাবিক',
        'mood.heartbreak': 'হৃদয় ভাঙা',
        'mood.lonely': 'একাকী',
        'mood.disrespected': 'অপমানিত',

        // Categories
        'category.selfRespect': 'আত্ম-সম্মান',
        'category.lettingGo': 'ছেড়ে দেওয়া',
        'category.boundaries': 'সীমানা',
        'category.overthinking': 'অতিরিক্ত চিন্তা',
        'category.heartbreak': 'হৃদয়ভঙ্গ',
        'category.selfLove': 'আত্ম-ভালোবাসা',
        'category.growth': 'বৃদ্ধি',
        'category.strength': 'শক্তি',
        'category.movingOn': 'এগিয়ে যাওয়া',
        'category.forgiveness': 'ক্ষমা',
        'category.courage': 'সাহস',
        'category.healing': 'নিরাময়',
        'category.discipline': 'শৃঙ্খলা',
        'category.purpose': 'উদ্দেশ্য',
        'category.vulnerability': 'দুর্বলতা প্রকাশ'
      }
    };
  }

  setLanguage(lang) {
    if (this.translations[lang]) {
      this.currentLang = lang;
      return true;
    }
    return false;
  }

  t(key) {
    const val = this.translations[this.currentLang]?.[key]
      ?? this.translations['en']?.[key]
      ?? key;
    return val;
  }

  getLanguage() {
    return this.currentLang;
  }

  getAvailableLanguages() {
    return [
      { code: 'en', name: 'English', flag: '🇬🇧' },
      { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
      { code: 'bn', name: 'বাংলা', flag: '🇧🇩' }
    ];
  }
}

window.I18n = I18n;
