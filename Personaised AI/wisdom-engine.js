// ============================================
// SoulMentor — Wisdom Engine
// Intelligent response system with mood detection
// ============================================

class WisdomEngine {
  constructor(quotesDB, i18n) {
    this.quotesDB = quotesDB;
    this.i18n = i18n;
    this.conversationHistory = [];
    this.userMoodHistory = [];
  }

  // Keyword maps for mood detection (multilingual)
  static MOOD_KEYWORDS = {
    heartbreak: {
      en: ['heartbreak', 'breakup', 'broke up', 'ex ', 'ex-', 'miss him', 'miss her', 'miss you', 'love lost', 'left me', 'dumped', 'cheated', 'moved on', 'still love'],
      hi: ['दिल टूट', 'breakup', 'अलग हो', 'छोड़ दिया', 'याद आ', 'प्यार', 'धोखा', 'चला गया', 'चली गई'],
      bn: ['হৃদয় ভেঙে', 'ব্রেকআপ', 'আলাদা হয়ে', 'ছেড়ে দিয়ে', 'মনে পড়', 'ভালোবাসা', 'প্রতারণা']
    },
    sad: {
      en: ['sad', 'cry', 'crying', 'tears', 'hurt', 'pain', 'suffering', 'depressed', 'miserable', 'hopeless', 'broken', 'empty', 'numb', 'down', 'unhappy', 'grief', 'lost'],
      hi: ['दुखी', 'रो', 'आँसू', 'दर्द', 'तकलीफ', 'उदास', 'टूटा', 'खाली', 'निराशा', 'दुख'],
      bn: ['দুঃখিত', 'কাঁদ', 'চোখের জল', 'কষ্ট', 'যন্ত্রণা', 'বিষণ্ণ', 'ভাঙা', 'খালি', 'নিরাশ']
    },
    angry: {
      en: ['angry', 'furious', 'hate', 'unfair', 'frustrated', 'mad', 'rage', 'pissed', 'annoyed', 'irritated', 'sick of', 'tired of', 'fed up'],
      hi: ['गुस्सा', 'नफरत', 'अन्याय', 'चिढ़', 'परेशान', 'थक गया', 'बर्दाश्त', 'क्रोध'],
      bn: ['রাগ', 'ঘৃণা', 'অন্যায়', 'বিরক্ত', 'ক্লান্ত', 'সহ্য', 'ক্রোধ']
    },
    anxious: {
      en: ['anxious', 'anxiety', 'worried', 'scared', 'nervous', 'overthink', 'over think', 'panic', 'stress', 'restless', 'cant sleep', "can't sleep", 'fear', 'what if', 'worried about', 'tension'],
      hi: ['चिंता', 'डर', 'घबरा', 'overthink', 'तनाव', 'बेचैन', 'नींद नहीं', 'परेशान', 'tension'],
      bn: ['চিন্তা', 'ভয়', 'ঘাবড়া', 'উদ্বিগ্ন', 'টেনশন', 'ঘুম আসে না', 'অস্থির']
    },
    lonely: {
      en: ['alone', 'lonely', 'nobody', 'no one', 'no friends', 'isolated', 'abandoned', 'left out', 'forgotten', 'invisible', 'dont belong', "don't belong"],
      hi: ['अकेला', 'कोई नहीं', 'अकेलापन', 'छोड़ दिया', 'भूल गए', 'अदृश्य'],
      bn: ['একা', 'কেউ নেই', 'একাকীত্ব', 'ছেড়ে দিয়েছে', 'ভুলে গেছে', 'অদৃশ্য']
    },
    disrespected: {
      en: ['disrespect', 'insult', 'humiliate', 'ignore', 'belittle', 'mocked', 'ridiculed', 'taken for granted', 'used me', 'treat me bad', 'looked down', 'worthless', 'not good enough'],
      hi: ['अपमान', 'बेइज्जती', 'नज़रअंदाज़', 'इस्तेमाल', 'मज़ाक', 'तुच्छ', 'काबिल नहीं'],
      bn: ['অপমান', 'অবহেলা', 'ব্যবহার করেছে', 'ঠাট্টা', 'তুচ্ছ', 'যোগ্য নই']
    },
    hopeful: {
      en: ['hopeful', 'better', 'improving', 'grateful', 'thankful', 'happy', 'excited', 'positive', 'good day', 'proud', 'accomplished', 'progress', 'growing'],
      hi: ['आशा', 'बेहतर', 'सुधार', 'आभार', 'खुश', 'उत्साह', 'सकारात्मक', 'गर्व', 'प्रगति'],
      bn: ['আশা', 'ভালো', 'উন্নতি', 'কৃতজ্ঞ', 'খুশি', 'উত্সাহ', 'ইতিবাচক', 'গর্ব', 'অগ্রগতি']
    }
  };

  // Topic keyword mapping to categories
  static TOPIC_KEYWORDS = {
    'self-respect': ['respect', 'dignity', 'worth', 'value', 'deserve', 'সম্মান', 'মর্যাদা', 'इज़्ज़त', 'सम्मान'],
    'letting-go': ['let go', 'move on', 'forget', 'past', 'ছেড়ে দেওয়া', 'ভুলে যাওয়া', 'छोड़', 'भूल', 'बीता'],
    'boundaries': ['boundary', 'boundaries', 'limit', 'saying no', 'সীমানা', 'সীমা', 'सीमा', 'ना कहना'],
    'overthinking': ['overthink', 'think too much', 'cant stop thinking', 'mind racing', 'অতিরিক্ত চিন্তা', 'ज़्यादा सोच'],
    'heartbreak': ['heart', 'breakup', 'love', 'relationship', 'partner', 'হৃদয়', 'সম্পর্ক', 'दिल', 'रिश्ता', 'প্রেম'],
    'self-love': ['self love', 'myself', 'self care', 'আত্ম-ভালোবাসা', 'আত্ম-যত্ন', 'खुद से प्यार', 'आत्म-प्रेम'],
    'growth': ['grow', 'change', 'improve', 'better', 'learn', 'বৃদ্ধি', 'পরিবর্তন', 'विकास', 'बदलाव', 'सीख'],
    'strength': ['strong', 'strength', 'tough', 'resilient', 'শক্তি', 'শক্তিশালী', 'ताकत', 'मज़बूत'],
    'forgiveness': ['forgive', 'forgiveness', 'sorry', 'ক্ষমা', 'माफ़', 'क्षमा'],
    'courage': ['courage', 'brave', 'fear', 'সাহস', 'সাহসী', 'ভয়', 'साहस', 'बहादुर', 'डर'],
    'healing': ['heal', 'recover', 'therapy', 'সুস্থ', 'নিরাময়', 'ठीक', 'इलाज'],
    'discipline': ['discipline', 'habit', 'routine', 'consistent', 'শৃঙ্খলা', 'অভ্যাস', 'अनुशासन', 'आदत'],
    'purpose': ['purpose', 'meaning', 'direction', 'goal', 'dream', 'উদ্দেশ্য', 'লক্ষ্য', 'स्বপ্ন', 'उद्देश्य', 'लक्ष्य', 'सपना'],
    'vulnerability': ['vulnerable', 'open up', 'share', 'দুর্বলতা', 'খোলামেলা', 'कमज़ोर', 'खुल']
  };

  detectMood(text) {
    const lower = text.toLowerCase();
    const scores = {};

    for (const [mood, keywords] of Object.entries(WisdomEngine.MOOD_KEYWORDS)) {
      scores[mood] = 0;
      for (const lang of ['en', 'hi', 'bn']) {
        for (const keyword of keywords[lang]) {
          if (lower.includes(keyword.toLowerCase())) {
            scores[mood]++;
          }
        }
      }
    }

    let maxMood = 'neutral';
    let maxScore = 0;
    for (const [mood, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxScore = score;
        maxMood = mood;
      }
    }

    return maxMood;
  }

  detectTopics(text) {
    const lower = text.toLowerCase();
    const topics = [];

    for (const [topic, keywords] of Object.entries(WisdomEngine.TOPIC_KEYWORDS)) {
      for (const keyword of keywords) {
        if (lower.includes(keyword.toLowerCase())) {
          topics.push(topic);
          break;
        }
      }
    }

    return topics.length > 0 ? topics : ['growth', 'self-love'];
  }

  shouldTellJoke() {
    const recent = this.userMoodHistory.slice(-3);
    if (recent.length < 3) return false;
    const sadMoods = ['sad', 'lonely', 'heartbreak'];
    return recent.every(m => sadMoods.includes(m));
  }

  processMessage(userMessage) {
    const lang = this.i18n.getLanguage();
    const mood = this.detectMood(userMessage);
    const topics = this.detectTopics(userMessage);

    this.conversationHistory.push({ role: 'user', text: userMessage, mood, topics, timestamp: new Date().toISOString() });
    this.userMoodHistory.push(mood);

    // Find matching quote
    let quote = null;
    const moodQuotes = this.quotesDB.getQuotesByMood(mood === 'neutral' ? 'hopeful' : mood);
    if (moodQuotes.length > 0) {
      // Prefer quotes matching both mood and topic
      const topicMatches = moodQuotes.filter(q => q.category.some(c => topics.includes(c)));
      quote = topicMatches.length > 0
        ? topicMatches[Math.floor(Math.random() * topicMatches.length)]
        : moodQuotes[Math.floor(Math.random() * moodQuotes.length)];
    } else {
      quote = this.quotesDB.getRandomQuote();
    }

    // Generate empathetic response
    const responseText = this.generateResponse(mood, topics, userMessage, lang);
    const advice = this.generateAdvice(mood, topics, lang);
    const growthChallenge = this.generateGrowthChallenge(mood, topics, lang);

    // Check for joke
    const tellJoke = this.shouldTellJoke();
    const joke = tellJoke ? this.quotesDB.getJoke(lang) : null;

    const response = {
      text: responseText,
      quote: quote ? {
        text: quote.text[lang] || quote.text.en,
        author: quote.author,
        book: quote.book
      } : null,
      realExample: quote ? (quote.realExample[lang] || quote.realExample.en) : null,
      advice: advice,
      growthChallenge: growthChallenge,
      detectedMood: mood,
      shouldTellJoke: tellJoke,
      joke: joke ? (joke.displayText || joke.text[lang] || joke.text.en) : null
    };

    this.conversationHistory.push({ role: 'ai', response, timestamp: new Date().toISOString() });
    return response;
  }

  generateResponse(mood, topics, userMessage, lang) {
    const responses = {
      en: {
        heartbreak: [
          "I hear you, and I want you to know — it takes real courage to share this. Heartbreak doesn't mean you loved wrong; it means you loved deeply. And that's beautiful, even when it hurts.",
          "What you're feeling right now is the echo of something real. And it will fade — not because you'll forget, but because you'll grow bigger than the pain.",
          "I know it feels like this pain will never end. But you've survived every hard day before this one. You'll survive this too. Let me share something that might help...",
          "Your heart is bruised, not broken. It's still beating, still hoping, still capable of incredible love. The right person won't make you question your worth."
        ],
        sad: [
          "Thank you for being honest with me. Sadness isn't weakness — it's your heart telling you something matters. Let's sit with this feeling together.",
          "I see you. I hear you. And I want you to know — it's okay to not be okay. You don't have to pretend for anyone. Not even for me.",
          "The heaviness you feel right now is temporary. I know it doesn't feel that way, but storms always pass. Let me share some wisdom that might bring a little light...",
          "Your sadness is valid. Don't let anyone — including yourself — tell you that you're 'too sensitive' or 'overthinking.' What you feel is real."
        ],
        angry: [
          "Your anger is telling you something important — that a boundary was crossed, that something isn't fair, that you deserve better. Let's understand this together.",
          "I feel the fire in your words. Anger isn't wrong — it's information. It's telling you what you won't accept anymore. Let's channel this into something powerful.",
          "You have every right to be upset. But here's the thing — anger that stays inside becomes poison. Let's find a healthy way to process this."
        ],
        anxious: [
          "I can feel the weight of your thoughts. Anxiety is just your brain's way of trying to protect you — but sometimes it overprotects. Let's bring you back to the present moment.",
          "Your mind is racing, I know. But right now, in this moment, you are safe. Take a breath with me. The 'what ifs' are not reality — they're stories your fear is writing.",
          "Overthinking is exhausting, isn't it? Your brain is working overtime trying to solve problems that haven't happened yet. Let's pause and focus on what's real."
        ],
        lonely: [
          "Loneliness isn't about being alone — it's about feeling unseen. And I see you. Right here, right now. You matter more than you know.",
          "The ache of loneliness can feel endless, but remember — you're never truly alone. There are people who care, even when they don't show it perfectly. And I'm here.",
          "Feeling lonely doesn't mean you're unlovable. Sometimes it just means you're surrounded by the wrong crowd. The right people are still on their way to you."
        ],
        disrespected: [
          "Being disrespected is one of the most painful experiences — because it attacks your sense of self. But here's the truth: their behavior is about them, not about you.",
          "You deserve respect — not because you earned it, not because you proved something, but because you are a human being with inherent worth. Never let anyone make you forget that.",
          "The way they treated you says everything about their character and nothing about your value. Let me share something important about setting boundaries..."
        ],
        hopeful: [
          "I love the energy in your words! That spark of hope? Hold onto it. It's the beginning of something beautiful. Let me share something that matches your spirit...",
          "This is the kind of growth that makes everything worth it. You're not just surviving — you're blooming. I'm so proud of where you're heading.",
          "The fact that you can feel hope after everything you've been through? That's not just strength — that's extraordinary resilience."
        ],
        neutral: [
          "Thank you for sharing that with me. Let me offer some wisdom that might resonate with where you are right now...",
          "I appreciate you opening up. Every conversation is a step toward understanding yourself better. Here's something I'd love for you to reflect on..."
        ]
      },
      hi: {
        heartbreak: [
          "मैं समझ रहा हूँ, और जानना चाहता हूँ — यह बात बताने के लिए असली हिम्मत चाहिए। दिल टूटने का मतलब यह नहीं कि आपने गलत प्यार किया; इसका मतलब है कि आपने गहराई से प्यार किया।",
          "आप अभी जो महसूस कर रहे हैं वो किसी सच्ची चीज़ की गूंज है। और यह धीरे-धीरे कम होगा — इसलिए नहीं कि भूल जाएंगे, बल्कि इसलिए कि आप दर्द से बड़े हो जाएंगे।",
          "मुझे पता है ऐसा लगता है कि यह दर्द कभी खत्म नहीं होगा। लेकिन आपने इससे पहले हर कठिन दिन पार किया है। यह भी पार करेंगे।"
        ],
        sad: [
          "ईमानदार होने के लिए शुक्रिया। उदासी कमज़ोरी नहीं है — यह आपका दिल बता रहा है कि कुछ मायने रखता है।",
          "मैं आपको देख रहा हूँ। सुन रहा हूँ। और जानना चाहता हूँ — ठीक न होना ठीक है। किसी के लिए नाटक करने की ज़रूरत नहीं।",
          "आप जो भारीपन महसूस कर रहे हैं वो अस्थायी है। मैं जानता हूँ ऐसा नहीं लगता, लेकिन तूफान हमेशा गुज़रते हैं।"
        ],
        angry: [
          "आपका गुस्सा कुछ ज़रूरी बता रहा है — कि एक सीमा पार हुई, कि कुछ अन्यायपूर्ण है, कि आप बेहतर के हक़दार हैं।",
          "मुझे आपके शब्दों में आग महसूस हो रही है। गुस्सा गलत नहीं — यह जानकारी है। चलिए इसे कुछ शक्तिशाली में बदलें।"
        ],
        anxious: [
          "मुझे आपके विचारों का बोझ महसूस हो रहा है। चिंता बस आपके दिमाग का तरीका है आपकी रक्षा करने का — लेकिन कभी-कभी ज़्यादा रक्षा कर देता है।",
          "आपका दिमाग तेज़ दौड़ रहा है, मैं जानता हूँ। लेकिन अभी, इस पल में, आप सुरक्षित हैं। मेरे साथ एक साँस लें।"
        ],
        lonely: [
          "अकेलापन अकेले होने के बारे में नहीं — यह अनदेखा महसूस करने के बारे में है। और मैं आपको देख रहा हूँ। यहीं, अभी।",
          "अकेला महसूस करने का मतलब यह नहीं कि आप प्यार के लायक नहीं। सही लोग अभी आपकी ओर आ रहे हैं।"
        ],
        disrespected: [
          "अपमानित होना सबसे दर्दनाक अनुभवों में से है — क्योंकि यह आत्म-सम्मान पर हमला करता है। लेकिन सच यह है: उनका व्यवहार उनके बारे में है, आपके नहीं।",
          "आप सम्मान के हक़दार हैं — इसलिए नहीं कि आपने कमाया, बल्कि इसलिए कि आप इंसान हैं।"
        ],
        hopeful: [
          "आपके शब्दों में ऊर्जा अद्भुत है! उम्मीद की यह चिंगारी? इसे पकड़े रखें। कुछ सुंदर की शुरुआत है।",
          "यह वो विकास है जो सब कुछ सार्थक बनाता है। आप सिर्फ जी नहीं रहे — खिल रहे हैं।"
        ],
        neutral: [
          "यह बात मुझसे बाँटने के लिए शुक्रिया। चलिए कुछ ज्ञान की बात करें जो शायद आपके दिल को छुए...",
        ]
      },
      bn: {
        heartbreak: [
          "আমি বুঝতে পারছি, এবং জানাতে চাই — এটা শেয়ার করতে সত্যিকারের সাহস লাগে। হৃদয় ভাঙার মানে এই নয় যে আপনি ভুল ভালোবেসেছেন; মানে হলো আপনি গভীরভাবে ভালোবেসেছেন।",
          "আপনি এখন যা অনুভব করছেন তা কিছু সত্যিকারের প্রতিধ্বনি। এটা কমবে — কারণ আপনি ভুলবেন না, বরং কষ্টের চেয়ে বড় হয়ে যাবেন।"
        ],
        sad: [
          "সৎ হওয়ার জন্য ধন্যবাদ। দুঃখ দুর্বলতা নয় — এটি আপনার হৃদয় বলছে যে কিছু গুরুত্বপূর্ণ।",
          "আমি আপনাকে দেখছি। শুনছি। এবং জানাতে চাই — ঠিক না থাকা ঠিক আছে। কারো জন্য ভান করার দরকার নেই।"
        ],
        angry: [
          "আপনার রাগ কিছু গুরুত্বপূর্ণ বলছে — যে একটি সীমানা অতিক্রম হয়েছে, যে কিছু অন্যায়, যে আপনি ভালোর যোগ্য।",
          "আপনার কথায় আগুন অনুভব করছি। রাগ ভুল নয় — এটি তথ্য। চলুন এটিকে শক্তিশালী কিছুতে রূপান্তর করি।"
        ],
        anxious: [
          "আপনার চিন্তার ভার অনুভব করতে পারছি। উদ্বেগ আপনার মস্তিষ্কের রক্ষা করার উপায় — কিন্তু কখনো কখনো অতিরিক্ত রক্ষা করে।",
          "আপনার মন দৌড়াচ্ছে, আমি জানি। কিন্তু এই মুহূর্তে আপনি নিরাপদ। আমার সাথে একটু শ্বাস নিন।"
        ],
        lonely: [
          "একাকীত্ব একা থাকা নয় — অদৃশ্য অনুভব করা। আমি আপনাকে দেখছি। এখানে, এখনই।",
          "একা অনুভব করার মানে এই নয় যে আপনি ভালোবাসার অযোগ্য। সঠিক মানুষেরা এখনো আপনার পথে আসছে।"
        ],
        disrespected: [
          "অপমানিত হওয়া সবচেয়ে কষ্টদায়ক অভিজ্ঞতাগুলোর মধ্যে একটি — কারণ এটি আত্ম-সম্মানে আঘাত করে। কিন্তু সত্য হলো: তাদের আচরণ তাদের সম্পর্কে, আপনার নয়।",
          "আপনি সম্মানের যোগ্য — কারণ আপনি একজন মানুষ যার সহজাত মূল্য আছে।"
        ],
        hopeful: [
          "আপনার কথায় শক্তি অনুভব করছি! আশার এই স্ফুলিঙ্গ? ধরে রাখুন। কিছু সুন্দরের শুরু।",
          "এটাই সেই বৃদ্ধি যা সবকিছু সার্থক করে। আপনি শুধু বেঁচে নেই — ফুটে উঠছেন।"
        ],
        neutral: [
          "এটা শেয়ার করার জন্য ধন্যবাদ। চলুন কিছু জ্ঞানের কথা বলি যা হয়তো আপনার হৃদয়ে স্পর্শ করবে...",
        ]
      }
    };

    const langResponses = responses[lang] || responses.en;
    const moodResponses = langResponses[mood] || langResponses.neutral;
    return moodResponses[Math.floor(Math.random() * moodResponses.length)];
  }

  generateAdvice(mood, topics, lang) {
    const advice = {
      en: {
        heartbreak: [
          "Here's where you should stop: Stop texting them at midnight. Stop checking their social media. Stop hoping they'll change. You deserve someone who chooses you without hesitation — not someone who keeps you as a backup plan.",
          "Stop waiting for their apology. Stop replaying the good times to justify the bad ones. The person who truly loves you will never make you question if you're enough.",
          "Stop giving second chances to people who didn't value the first one. Your heart is not a revolving door."
        ],
        sad: [
          "Stop telling yourself you need to 'be strong' all the time. It's okay to cry. It's okay to fall apart. Strength is in the rebuilding, not in pretending you were never broken.",
          "Stop comparing your sadness to others'. 'Other people have it worse' doesn't invalidate your pain. Your feelings are real and they matter."
        ],
        angry: [
          "Here's where you should stop: Stop swallowing your anger to keep the peace. Your silence doesn't keep peace — it keeps you in pain. Speak up. Set the boundary. Your peace matters more than their comfort.",
          "Stop letting people walk all over you and calling it 'being the bigger person.' Sometimes being the bigger person means walking away."
        ],
        anxious: [
          "Stop trying to predict every possible outcome. You're living in 47 different futures right now — none of which exist. Come back to this moment. What's true RIGHT NOW?",
          "Stop rehearsing conversations in your head. The version in your mind is never the version in real life. Say what you need to say and trust that you'll handle whatever comes."
        ],
        lonely: [
          "Stop performing for people who wouldn't even notice if you left the room. Start investing in people who light up when they see you. Quality over quantity — always.",
          "Stop shrinking yourself to fit into spaces that weren't built for you. The right people will celebrate your whole self."
        ],
        disrespected: [
          "Here's where you should stop: Stop accepting apologies without change. Words without action are just noise. If they're sorry, they'll show it — not just say it.",
          "Stop explaining your boundaries to people who benefit from you having none. You don't owe anyone an explanation for protecting your peace."
        ],
        hopeful: [
          "Keep going! But remember — progress isn't always linear. There will be setbacks. The key is to not let a bad day erase a good month. You've come too far to go back now.",
          "Channel this hope into action. What's one small thing you can do today that your future self will thank you for?"
        ],
        neutral: [
          "Take a moment to check in with yourself. How are you really feeling today? Not the answer you give others — the real answer. That honesty is where growth begins."
        ]
      },
      hi: {
        heartbreak: [
          "यहाँ रुकें: रात को उन्हें message करना बंद करें। उनका social media चेक करना बंद। आप किसी ऐसे इंसान के हक़दार हैं जो बिना हिचकिचाहट आपको चुने।",
          "उनकी माफ़ी का इंतज़ार बंद करें। अच्छे पलों को याद करके बुरे पलों को justify करना बंद करें।"
        ],
        sad: [
          "खुद से कहना बंद करें कि हमेशा 'मज़बूत' रहना है। रोना ठीक है। टूटना ठीक है। ताकत बनाने में है, नाटक करने में नहीं।",
          "अपनी उदासी की तुलना दूसरों से करना बंद करें। आपकी भावनाएं असली हैं और मायने रखती हैं।"
        ],
        angry: [
          "शांति बनाए रखने के लिए अपना गुस्सा दबाना बंद करें। आपकी चुप्पी शांति नहीं रखती — आपको दर्द में रखती है। बोलें। सीमा तय करें।",
        ],
        anxious: [
          "हर संभावित परिणाम की भविष्यवाणी करने की कोशिश बंद करें। आप अभी 47 अलग-अलग भविष्य में जी रहे हैं — जिनमें से कोई मौजूद नहीं। इस पल में वापस आएं।",
        ],
        lonely: ["ऐसे लोगों के लिए नाटक करना बंद करें जो आपके जाने पर ध्यान भी न दें। ऐसे लोगों में निवेश करें जो आपको देखकर खुश होते हैं।"],
        disrespected: ["बदलाव के बिना माफ़ी स्वीकार करना बंद करें। बिना कार्रवाई के शब्द सिर्फ शोर हैं।"],
        hopeful: ["आगे बढ़ते रहें! लेकिन याद रखें — प्रगति हमेशा सीधी नहीं होती। एक बुरा दिन एक अच्छे महीने को मिटाने न दें।"],
        neutral: ["एक पल रुकें और खुद से पूछें — आप वाकई कैसा महसूस कर रहे हैं आज?"]
      },
      bn: {
        heartbreak: [
          "এখানে থামুন: রাতে তাদের message করা বন্ধ করুন। তাদের social media চেক করা বন্ধ। আপনি এমন কারো যোগ্য যে দ্বিধা ছাড়াই আপনাকে বেছে নেয়।",
        ],
        sad: [
          "নিজেকে বলা বন্ধ করুন যে সবসময় 'শক্তিশালী' থাকতে হবে। কাঁদা ঠিক আছে। ভেঙে পড়া ঠিক আছে। শক্তি পুনর্নির্মাণে, ভান করায় নয়।",
        ],
        angry: ["শান্তি রক্ষার জন্য রাগ গিলে ফেলা বন্ধ করুন। আপনার নীরবতা শান্তি রাখে না — আপনাকে কষ্টে রাখে। কথা বলুন। সীমানা ঠিক করুন।"],
        anxious: ["প্রতিটি সম্ভাব্য ফলাফল ভবিষ্যদ্বাণী করার চেষ্টা বন্ধ করুন। আপনি এখন ৪৭টি ভিন্ন ভবিষ্যতে বাস করছেন — যার কোনোটিই বিদ্যমান নেই।"],
        lonely: ["যারা আপনার চলে যাওয়া খেয়ালও করবে না তাদের জন্য অভিনয় বন্ধ করুন। যারা আপনাকে দেখে আনন্দিত হয় তাদের মধ্যে বিনিয়োগ করুন।"],
        disrespected: ["পরিবর্তন ছাড়া ক্ষমা গ্রহণ করা বন্ধ করুন। কাজ ছাড়া কথা শুধু শব্দ।"],
        hopeful: ["চালিয়ে যান! কিন্তু মনে রাখুন — অগ্রগতি সবসময় সরলরেখায় হয় না। একটি খারাপ দিন একটি ভালো মাসকে মুছে দিতে দেবেন না।"],
        neutral: ["একটু থামুন এবং নিজেকে জিজ্ঞেস করুন — আজ আপনি সত্যিই কেমন অনুভব করছেন?"]
      }
    };

    const langAdvice = advice[lang] || advice.en;
    const moodAdvice = langAdvice[mood] || langAdvice.neutral;
    return moodAdvice[Math.floor(Math.random() * moodAdvice.length)];
  }

  generateGrowthChallenge(mood, topics, lang) {
    const challenges = {
      en: [
        "Today's challenge: Write down 3 things about yourself that you love. Not what others love about you — what YOU love about you.",
        "Today's challenge: Set one boundary. Just one. It can be small: 'I will not reply to messages after 10 PM tonight.'",
        "Today's challenge: Look in the mirror and say: 'I am enough exactly as I am.' Say it until you feel it.",
        "Today's challenge: Delete one thing from your phone that makes you feel bad about yourself. One app, one chat, one photo.",
        "Today's challenge: Tell someone how you really feel today. No filter, no 'I'm fine.' Just truth.",
        "Today's challenge: Do something kind for yourself — not because you earned it, but because you deserve it.",
        "Today's challenge: Write a letter to your past self. Forgive them for the mistakes. Thank them for surviving.",
        "Today's challenge: Spend 10 minutes in silence. No phone, no music, no distraction. Just you and your thoughts.",
        "Today's challenge: Compliment a stranger today. Kindness given freely comes back multiplied.",
        "Today's challenge: Identify one person who drains your energy. Decide what boundary you'll set with them."
      ],
      hi: [
        "आज की चुनौती: अपने बारे में 3 चीज़ें लिखें जो आपको पसंद हैं। दूसरों को नहीं — आपको क्या पसंद है।",
        "आज की चुनौती: एक सीमा तय करें। बस एक। छोटी सी: 'रात 10 बजे के बाद messages का जवाब नहीं दूंगा।'",
        "आज की चुनौती: आईने में देखें और कहें: 'मैं वैसा ही काफ़ी हूँ जैसा मैं हूँ।'",
        "आज की चुनौती: फ़ोन से एक ऐसी चीज़ delete करें जो आपको खुद के बारे में बुरा महसूस कराती है।",
        "आज की चुनौती: किसी को बताएं आज आप वाकई कैसा महसूस कर रहे हैं। बिना filter।",
        "आज की चुनौती: खुद के लिए कुछ अच्छा करें — इसलिए नहीं कि आपने कमाया, बल्कि इसलिए कि आप हक़दार हैं।"
      ],
      bn: [
        "আজকের চ্যালেঞ্জ: নিজের সম্পর্কে ৩টি জিনিস লিখুন যা আপনি পছন্দ করেন। অন্যরা নয় — আপনি কী পছন্দ করেন।",
        "আজকের চ্যালেঞ্জ: একটি সীমানা ঠিক করুন। মাত্র একটি। ছোট: 'রাত ১০টার পর মেসেজের উত্তর দেব না।'",
        "আজকের চ্যালেঞ্জ: আয়নায় দেখুন এবং বলুন: 'আমি যেমন আছি তেমনই যথেষ্ট।'",
        "আজকের চ্যালেঞ্জ: ফোন থেকে এমন একটি জিনিস মুছুন যা আপনাকে নিজের সম্পর্কে খারাপ অনুভব করায়।",
        "আজকের চ্যালেঞ্জ: কাউকে বলুন আজ আপনি সত্যিই কেমন অনুভব করছেন। কোনো ফিল্টার ছাড়া।",
        "আজকের চ্যালেঞ্জ: নিজের জন্য ভালো কিছু করুন — কারণ আপনি এর যোগ্য।"
      ]
    };

    const langChallenges = challenges[lang] || challenges.en;
    return langChallenges[Math.floor(Math.random() * langChallenges.length)];
  }

  getMoodHistory() {
    return [...this.userMoodHistory];
  }

  reset() {
    this.conversationHistory = [];
    this.userMoodHistory = [];
  }
}

window.WisdomEngine = WisdomEngine;
