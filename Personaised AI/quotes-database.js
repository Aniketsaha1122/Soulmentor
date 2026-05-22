// ============================================
// SoulMentor — Quotes Database
// Curated wisdom from great authors & books
// ============================================

class QuotesDB {
  constructor() {
    this.quotes = [
      // ===== RITVIK SINGH — Can We Be Strangers Again =====
      {
        id: 1,
        text: { en: "Sometimes the bravest thing you can do is let go of someone you love, not because you stopped caring, but because they stopped trying.", hi: "कभी-कभी सबसे बहादुरी का काम यह होता है कि आप उस इंसान को जाने दें जिसे आप प्यार करते हैं — इसलिए नहीं कि आपने परवाह करना बंद किया, बल्कि इसलिए कि उन्होंने कोशिश करना छोड़ दिया।", bn: "কখনো কখনো সবচেয়ে সাহসী কাজ হলো যাকে ভালোবাসেন তাকে ছেড়ে দেওয়া — কারণ আপনি যত্ন নেওয়া বন্ধ করেননি, বরং তারা চেষ্টা করা বন্ধ করে দিয়েছে।" },
        author: "Ritvik Singh", book: "Can We Be Strangers Again",
        category: ["letting-go", "heartbreak", "self-respect"],
        mood: ["heartbreak", "sad"],
        month: [1, 4, 7, 10],
        realExample: { en: "Like Priya who kept trying to save a relationship where she was the only one calling, texting, making plans. One day she realized — love shouldn't feel like a job application where you never hear back. She stopped. And for the first time, she felt lighter.", hi: "जैसे प्रिया ने एक ऐसे रिश्ते को बचाने की कोशिश की जहाँ सिर्फ वही कॉल करती थी, मैसेज करती थी। एक दिन उसने समझा — प्यार ऐसा नहीं होना चाहिए जैसे नौकरी का आवेदन जिसका जवाब कभी न आए। उसने रुकना सीखा।", bn: "যেমন প্রিয়া একটি সম্পর্ক বাঁচাতে চেষ্টা করেছিল যেখানে শুধু সে-ই ফোন করত, মেসেজ করত। একদিন সে বুঝল — ভালোবাসা এমন হওয়া উচিত নয় যেন চাকরির আবেদন যার উত্তর কখনো আসে না।" }
      },
      {
        id: 2,
        text: { en: "You don't need closure from someone who was never honest with you. Your peace is your closure.", hi: "आपको उस इंसान से closure की ज़रूरत नहीं जो कभी आपके साथ ईमानदार नहीं था। आपकी शांति ही आपका closure है।", bn: "যে মানুষ আপনার সাথে কখনো সৎ ছিল না তার কাছ থেকে closure চাওয়ার দরকার নেই। আপনার শান্তিই আপনার closure।" },
        author: "Ritvik Singh", book: "Can We Be Strangers Again",
        category: ["letting-go", "self-respect", "moving-on"],
        mood: ["heartbreak", "sad", "anxious"],
        month: [2, 5, 8, 11],
        realExample: { en: "Rahul spent months waiting for his ex to explain why she left. He kept checking her social media, replaying conversations. Then he realized — he was giving her the power to keep hurting him. The moment he stopped seeking answers from her, he found his own.", hi: "राहुल महीनों इंतज़ार करता रहा कि उसकी ex समझाए कि वो क्यों गई। फिर उसने समझा — वो उसे अभी भी खुद को चोट पहुँचाने की ताकत दे रहा था।", bn: "রাহুল মাসের পর মাস অপেক্ষা করেছিল তার ex বুঝিয়ে বলবে কেন চলে গেছে। তারপর সে বুঝল — সে এখনও তাকে নিজেকে কষ্ট দেওয়ার ক্ষমতা দিচ্ছে।" }
      },
      {
        id: 3,
        text: { en: "We keep watering dead flowers and wonder why our garden doesn't bloom.", hi: "हम मुरझाए फूलों को पानी देते रहते हैं और सोचते हैं कि बगीचा क्यों नहीं खिलता।", bn: "আমরা মরা ফুলে জল ঢালতে থাকি আর ভাবি বাগান কেন ফোটে না।" },
        author: "Ritvik Singh", book: "Can We Be Strangers Again",
        category: ["letting-go", "self-love", "moving-on"],
        mood: ["sad", "heartbreak"],
        month: [3, 6, 9, 12],
        realExample: { en: "Ananya kept investing in a friendship where she was always the one checking in, always the one showing up. She poured love into people who never even noticed her cup was empty. The day she redirected that energy to herself, her life started blooming.", hi: "अनन्या एक ऐसी दोस्ती में निवेश करती रही जहाँ हमेशा वही हालचाल पूछती थी। जिस दिन उसने वो ऊर्जा खुद पर लगाई, उसकी ज़िंदगी खिल उठी।", bn: "অনন্যা এমন বন্ধুত্বে বিনিয়োগ করে যাচ্ছিল যেখানে সবসময় সে-ই খবর নিত। যেদিন সে সেই শক্তি নিজের জন্য ব্যবহার করল, তার জীবন ফুটে উঠল।" }
      },
      {
        id: 4,
        text: { en: "Not everyone who enters your life deserves a permanent seat. Some people are lessons, not lifetimes.", hi: "हर कोई जो आपकी ज़िंदगी में आता है, उसे स्थायी जगह नहीं मिलनी चाहिए। कुछ लोग सबक हैं, साथी नहीं।", bn: "যারা আপনার জীবনে আসে তারা সবাই স্থায়ী আসন পাওয়ার যোগ্য নয়। কিছু মানুষ শিক্ষা, সারাজীবনের সঙ্গী নয়।" },
        author: "Ritvik Singh", book: "Can We Be Strangers Again",
        category: ["boundaries", "self-respect", "letting-go"],
        mood: ["sad", "disrespected"],
        month: [1, 5, 9],
        realExample: { en: "Vikram's college friend borrowed money, broke promises, and disappeared when Vikram needed help. Vikram learned: just because someone was there at the start doesn't mean they deserve to stay. He let go and made room for people who truly valued him.", hi: "विक्रम के दोस्त ने पैसे उधार लिए, वादे तोड़े, और ज़रूरत पर गायब हो गया। विक्रम ने सीखा — सिर्फ इसलिए कि कोई शुरू में था, इसका मतलब नहीं कि वो रहने का हक़दार है।", bn: "বিক্রমের বন্ধু টাকা ধার নিল, প্রতিশ্রুতি ভাঙল, আর দরকারে অদৃশ্য হয়ে গেল। বিক্রম শিখল — শুরুতে থাকলেই থাকার অধিকার হয় না।" }
      },
      {
        id: 5,
        text: { en: "You cannot heal in the same environment that made you sick. Sometimes moving on is not giving up — it's growing up.", hi: "आप उसी माहौल में ठीक नहीं हो सकते जिसने आपको बीमार किया। कभी-कभी आगे बढ़ना हार मानना नहीं — बड़ा होना है।", bn: "যে পরিবেশ আপনাকে অসুস্থ করেছে সেখানে আপনি সুস্থ হতে পারবেন না। কখনো কখনো এগিয়ে যাওয়া হার মানা নয় — বড় হওয়া।" },
        author: "Ritvik Singh", book: "Can We Be Strangers Again",
        category: ["moving-on", "growth", "healing"],
        mood: ["sad", "anxious"],
        month: [2, 6, 10],
        realExample: { en: "Meera stayed in a toxic workplace for 3 years because she was afraid of change. She thought leaving meant failure. When she finally left, she realized she wasn't running away — she was running toward herself.", hi: "मीरा 3 साल तक एक toxic workplace में रही क्योंकि उसे बदलाव से डर लगता था। जब उसने आखिरकार छोड़ा, तो उसे एहसास हुआ कि वो भाग नहीं रही थी — वो खुद की ओर बढ़ रही थी।", bn: "মীরা ৩ বছর একটি toxic কর্মক্ষেত্রে ছিল কারণ পরিবর্তনে ভয় পেত। যখন শেষ পর্যন্ত ছাড়ল, বুঝল সে পালাচ্ছে না — নিজের দিকে এগিয়ে যাচ্ছে।" }
      },
      // ===== RITVIK SINGH — Warmth =====
      {
        id: 6,
        text: { en: "Be warm to the world, but never at the cost of being cold to yourself.", hi: "दुनिया के लिए गर्मजोश रहो, लेकिन कभी खुद से ठंडे होने की कीमत पर नहीं।", bn: "পৃথিবীর প্রতি উষ্ণ হও, কিন্তু কখনো নিজের প্রতি ঠান্ডা হওয়ার মূল্যে নয়।" },
        author: "Ritvik Singh", book: "Warmth",
        category: ["self-love", "self-respect", "boundaries"],
        mood: ["disrespected", "sad"],
        month: [1, 4, 7, 10],
        realExample: { en: "Sneha was everyone's therapist friend — always available, always listening. But nobody asked how she was doing. She learned that kindness without boundaries is self-destruction.", hi: "स्नेहा सबकी therapist दोस्त थी — हमेशा उपलब्ध, हमेशा सुनती। लेकिन किसी ने नहीं पूछा वो कैसी है। उसने सीखा कि बिना सीमा के दयालुता आत्म-विनाश है।", bn: "স্নেহা সবার therapist বন্ধু ছিল — সবসময় পাওয়া যেত, সবসময় শুনত। কিন্তু কেউ জিজ্ঞেস করেনি সে কেমন আছে। সে শিখল সীমানা ছাড়া দয়া আত্ম-ধ্বংস।" }
      },
      {
        id: 7,
        text: { en: "Softness is not weakness. The strongest people I know are the ones who still choose to be kind after everything they've been through.", hi: "नरमी कमज़ोरी नहीं है। सबसे मज़बूत लोग वो हैं जो सब कुछ सहने के बाद भी दयालु रहने का चुनाव करते हैं।", bn: "কোমলতা দুর্বলতা নয়। সবচেয়ে শক্তিশালী মানুষ তারাই যারা সব কিছু সহ্য করার পরেও দয়ালু থাকার পথ বেছে নেয়।" },
        author: "Ritvik Singh", book: "Warmth",
        category: ["strength", "self-love", "courage"],
        mood: ["hopeful", "disrespected"],
        month: [2, 5, 8, 11],
        realExample: { en: "After being betrayed by his best friend, Arjun could have turned bitter. Instead, he chose to be kind to the next person who walked into his life — not because he was naive, but because he refused to let someone else's cruelty change who he was.", hi: "अपने सबसे अच्छे दोस्त से धोखा खाने के बाद, अर्जुन कड़वा हो सकता था। लेकिन उसने अगले इंसान के साथ दयालु रहना चुना — इसलिए नहीं कि वो भोला था, बल्कि इसलिए कि उसने किसी की क्रूरता को खुद को बदलने नहीं दिया।", bn: "সেরা বন্ধুর বিশ্বাসঘাতকতার পর অর্জুন তিক্ত হতে পারত। তার বদলে সে পরের মানুষটির সাথে দয়ালু হতে বেছে নিল — কারণ সে অন্যের নিষ্ঠুরতাকে নিজেকে বদলাতে দিতে রাজি ছিল না।" }
      },
      {
        id: 8,
        text: { en: "You owe yourself the love you keep giving to everyone else.", hi: "जो प्यार आप सबको देते रहते हैं, वो प्यार आप खुद के भी हक़दार हैं।", bn: "যে ভালোবাসা আপনি সবাইকে দিয়ে যান, সেই ভালোবাসা আপনি নিজেও পাওয়ার যোগ্য।" },
        author: "Ritvik Singh", book: "Warmth",
        category: ["self-love", "self-respect"],
        mood: ["sad", "lonely"],
        month: [3, 6, 9, 12],
        realExample: { en: "Kavya spent years being the 'strong one' — helping everyone else through breakups, job losses, family problems. But when she broke down, no one was there. She learned the hard way: you can't pour from an empty cup. Self-love isn't selfish.", hi: "काव्या सालों तक 'मज़बूत वाली' बनी रही — सबकी मदद करती। लेकिन जब वो टूटी, कोई नहीं था। उसने कठिन तरीके से सीखा: खाली कप से नहीं भर सकते।", bn: "কাব্যা বছরের পর বছর 'শক্তিশালী' হয়ে থেকেছে — সবাইকে সাহায্য করেছে। কিন্তু যখন সে ভেঙে পড়ল, কেউ ছিল না। সে কঠিনভাবে শিখল: খালি কাপ থেকে ঢালা যায় না।" }
      },
      {
        id: 9,
        text: { en: "The warmth you seek from others already lives within you. You just forgot to light your own fire.", hi: "जो गर्माहट आप दूसरों से ढूंढते हैं, वो पहले से आपके भीतर है। आप बस अपनी आग जलाना भूल गए।", bn: "যে উষ্ণতা আপনি অন্যদের কাছ থেকে খোঁজেন, তা ইতিমধ্যে আপনার ভেতরে আছে। আপনি শুধু নিজের আগুন জ্বালাতে ভুলে গেছেন।" },
        author: "Ritvik Singh", book: "Warmth",
        category: ["self-love", "healing", "strength"],
        mood: ["lonely", "sad"],
        month: [1, 5, 9],
        realExample: { en: "Dev always needed validation from others — likes on social media, compliments from friends, approval from his boss. When all of that stopped, he felt empty. Therapy taught him that the validation he needed most was the kind only he could give himself.", hi: "देव को हमेशा दूसरों की मान्यता चाहिए थी। जब सब बंद हुआ, वो खालीपन महसूस करने लगा। थेरेपी ने सिखाया कि सबसे ज़रूरी मान्यता वो है जो सिर्फ वो खुद दे सकता है।", bn: "দেবকে সবসময় অন্যদের অনুমোদন দরকার ছিল। যখন সব বন্ধ হল, সে শূন্যতা অনুভব করল। থেরাপি শেখাল যে সবচেয়ে গুরুত্বপূর্ণ অনুমোদন সেটাই যা শুধু সে নিজে দিতে পারে।" }
      },
      {
        id: 10,
        text: { en: "Healing is not about becoming the person you were before. It's about becoming the person you were always meant to be.", hi: "ठीक होना पहले जैसा बनना नहीं है। यह वो बनना है जो आप हमेशा से बनने वाले थे।", bn: "সুস্থ হওয়া আগের মানুষ হওয়া নয়। এটি সেই মানুষ হওয়া যা আপনি সবসময় হতে চেয়েছিলেন।" },
        author: "Ritvik Singh", book: "Warmth",
        category: ["healing", "growth", "self-love"],
        mood: ["hopeful", "sad"],
        month: [2, 6, 10],
        realExample: { en: "After her divorce, Sunita tried to 'go back to normal.' But she realized there was no going back — only going forward. She didn't become the old Sunita. She became a stronger, wiser, more authentic version of herself.", hi: "तलाक के बाद सुनीता 'सामान्य' होने की कोशिश कर रही थी। लेकिन उसने समझा कि पीछे नहीं जा सकते — सिर्फ आगे। वो पुरानी सुनीता नहीं बनी, बल्कि एक मज़बूत, बुद्धिमान संस्करण बनी।", bn: "বিবাহবিচ্ছেদের পর সুনীতা 'স্বাভাবিক' হতে চেষ্টা করছিল। কিন্তু বুঝল পিছনে যাওয়া যায় না — শুধু সামনে। সে পুরনো সুনীতা হয়নি, বরং একটি শক্তিশালী, জ্ঞানী সংস্করণ হয়ে উঠল।" }
      },
      // ===== RITVIK SINGH — The Art of Not Overthinking =====
      {
        id: 11,
        text: { en: "Your mind replays what your heart hasn't processed. Feel it. Don't just think it.", hi: "आपका मन वही दोहराता है जो आपके दिल ने अभी तक समझा नहीं। महसूस करो, सिर्फ सोचो मत।", bn: "আপনার মন সেটাই পুনরাবৃত্তি করে যা আপনার হৃদয় এখনো প্রক্রিয়া করেনি। অনুভব করুন, শুধু ভাববেন না।" },
        author: "Ritvik Singh", book: "The Art of Not Overthinking",
        category: ["overthinking", "healing", "self-love"],
        mood: ["anxious", "sad"],
        month: [1, 4, 7, 10],
        realExample: { en: "Aditya would lie awake at 3 AM replaying a conversation from weeks ago. 'What did she mean by that?' 'Did I say the wrong thing?' He wasn't thinking — he was avoiding feeling. When he finally sat with his emotions instead of analyzing them, the 3 AM spirals stopped.", hi: "आदित्य रात 3 बजे जागकर हफ्तों पुरानी बातचीत दोहराता था। जब उसने सोचने की बजाय महसूस करना शुरू किया, रात की बेचैनी खत्म हुई।", bn: "আদিত্য রাত ৩টায় জেগে সপ্তাহ আগের কথোপকথন পুনরাবৃত্তি করত। যখন সে চিন্তার বদলে অনুভব করতে শুরু করল, রাতের অস্থিরতা বন্ধ হল।" }
      },
      {
        id: 12,
        text: { en: "Stop rereading old texts at midnight. That chapter is closed. You're just hurting yourself with memories that no longer exist.", hi: "आधी रात पुराने मैसेज पढ़ना बंद करो। वो अध्याय बंद हो चुका है। आप खुद को उन यादों से चोट दे रहे हैं जो अब नहीं हैं।", bn: "মাঝরাতে পুরনো মেসেজ পড়া বন্ধ করুন। সেই অধ্যায় শেষ হয়ে গেছে। আপনি নিজেকে এমন স্মৃতি দিয়ে কষ্ট দিচ্ছেন যা আর নেই।" },
        author: "Ritvik Singh", book: "The Art of Not Overthinking",
        category: ["overthinking", "letting-go", "moving-on"],
        mood: ["sad", "heartbreak", "anxious"],
        month: [2, 5, 8, 11],
        realExample: { en: "Nisha had a folder of screenshots from her ex — sweet messages, plans they made, promises they shared. Every night she'd scroll through them. Deleting that folder was one of the hardest and most freeing things she ever did.", hi: "निशा के पास ex के screenshots का फोल्डर था। हर रात वो उन्हें देखती। उस फोल्डर को डिलीट करना उसका सबसे कठिन और मुक्त करने वाला काम था।", bn: "নিশার কাছে ex-এর screenshots-এর ফোল্ডার ছিল। প্রতি রাতে দেখত। সেই ফোল্ডার মুছে ফেলা তার সবচেয়ে কঠিন এবং মুক্তিদায়ক কাজ ছিল।" }
      },
      {
        id: 13,
        text: { en: "Overthinking is just your fear wearing the mask of being careful.", hi: "ज़्यादा सोचना बस आपके डर का सावधानी का मुखौटा पहनना है।", bn: "অতিরিক্ত চিন্তা আসলে আপনার ভয়ের সতর্কতার মুখোশ পরা।" },
        author: "Ritvik Singh", book: "The Art of Not Overthinking",
        category: ["overthinking", "courage", "growth"],
        mood: ["anxious"],
        month: [3, 6, 9, 12],
        realExample: { en: "Rohan spent 3 weeks writing the 'perfect' email to his professor. He kept editing, rephrasing, second-guessing. In the end, his professor replied in two words: 'Sure, fine.' All that anxiety was a story he told himself.", hi: "रोहन ने 3 हफ्ते 'परफेक्ट' ईमेल लिखने में बिताए। अंत में प्रोफेसर ने दो शब्दों में जवाब दिया: 'ठीक है।' सारी चिंता एक कहानी थी जो उसने खुद को सुनाई।", bn: "রোহন ৩ সপ্তাহ 'পারফেক্ট' ইমেল লিখতে কাটাল। শেষে প্রফেসর দুই শব্দে উত্তর দিল: 'ঠিক আছে।' সব দুশ্চিন্তা একটা গল্প ছিল যা সে নিজেকে শুনিয়েছিল।" }
      },
      {
        id: 14,
        text: { en: "You are not responsible for the version of you that exists in someone else's mind.", hi: "आप दूसरों के मन में आपकी जो छवि है उसके लिए ज़िम्मेदार नहीं हैं।", bn: "অন্যের মনে আপনার যে সংস্করণ আছে তার জন্য আপনি দায়ী নন।" },
        author: "Ritvik Singh", book: "The Art of Not Overthinking",
        category: ["overthinking", "self-respect", "boundaries"],
        mood: ["anxious", "disrespected"],
        month: [1, 5, 9],
        realExample: { en: "Fatima discovered that some colleagues had been talking about her behind her back. She spent weeks trying to 'fix' their perception. Her therapist told her: 'Their opinion is their story, not your truth.' She stopped performing for people who weren't even watching.", hi: "फातिमा को पता चला कि सहकर्मी उसकी पीठ पीछे बात करते हैं। उसने हफ्तों उनकी सोच 'ठीक' करने की कोशिश की। थेरेपिस्ट ने कहा: 'उनकी राय उनकी कहानी है, आपकी सच्चाई नहीं।'", bn: "ফাতিমা জানতে পারল সহকর্মীরা তার পিছনে কথা বলছে। সে সপ্তাহের পর সপ্তাহ তাদের ধারণা 'ঠিক' করতে চেষ্টা করল। থেরাপিস্ট বলল: 'তাদের মতামত তাদের গল্প, আপনার সত্য নয়।'" }
      },
      {
        id: 15,
        text: { en: "The peace you're searching for is on the other side of overthinking. Let go of the need to control everything.", hi: "जो शांति आप ढूंढ रहे हैं वो ज़्यादा सोचने के दूसरी तरफ है। सब कुछ नियंत्रित करने की ज़रूरत छोड़ दो।", bn: "যে শান্তি আপনি খুঁজছেন তা অতিরিক্ত চিন্তার ওপারে। সবকিছু নিয়ন্ত্রণ করার প্রয়োজন ছেড়ে দিন।" },
        author: "Ritvik Singh", book: "The Art of Not Overthinking",
        category: ["overthinking", "healing", "self-love"],
        mood: ["anxious"],
        month: [2, 6, 10],
        realExample: { en: "Karan used to plan every minute of every day. When things didn't go according to plan, he'd spiral into anxiety. Learning to say 'I'll figure it out' instead of 'What if I can't?' changed everything.", hi: "करण हर दिन का हर मिनट प्लान करता था। जब चीज़ें प्लान के हिसाब से नहीं होतीं, वो चिंता में डूब जाता। 'क्या होगा अगर...' की जगह 'मैं समझ लूंगा' कहना सब बदल गया।", bn: "করণ প্রতিদিনের প্রতি মিনিট পরিকল্পনা করত। যখন পরিকল্পনামতো হত না, উদ্বেগে ডুবে যেত। 'যদি না পারি?' এর বদলে 'বুঝে নেব' বলা সব বদলে দিল।" }
      },
      // ===== RUPI KAUR — Milk and Honey =====
      {
        id: 16,
        text: { en: "If you were born with the weakness to fall, you were born with the strength to rise.", hi: "अगर आप गिरने की कमज़ोरी के साथ पैदा हुए, तो आप उठने की ताकत के साथ भी पैदा हुए।", bn: "যদি আপনি পড়ে যাওয়ার দুর্বলতা নিয়ে জন্মেছেন, তবে উঠে দাঁড়ানোর শক্তি নিয়েও জন্মেছেন।" },
        author: "Rupi Kaur", book: "Milk and Honey",
        category: ["strength", "courage", "healing"],
        mood: ["sad", "hopeful"],
        month: [1, 4, 7, 10],
        realExample: { en: "After failing his entrance exam twice, Sameer felt like a failure. But each time he fell, he learned what NOT to do. The third time, he didn't just pass — he topped. Your falls are just the universe teaching you how to fly.", hi: "दो बार entrance exam में fail होने के बाद, समीर खुद को failure समझता था। लेकिन तीसरी बार उसने सिर्फ pass नहीं किया — top किया।", bn: "দুবার entrance exam-এ ফেল হওয়ার পর, সমীর নিজেকে ব্যর্থ মনে করত। কিন্তু তৃতীয়বার সে শুধু পাস করেনি — টপ করেছিল।" }
      },
      {
        id: 17,
        text: { en: "You do not just wake up and become the butterfly. Growth is a process.", hi: "आप बस उठकर तितली नहीं बन जाते। विकास एक प्रक्रिया है।", bn: "আপনি শুধু উঠে প্রজাপতি হয়ে যান না। বৃদ্ধি একটি প্রক্রিয়া।" },
        author: "Rupi Kaur", book: "Milk and Honey",
        category: ["growth", "healing", "self-love"],
        mood: ["anxious", "hopeful"],
        month: [2, 5, 8, 11],
        realExample: { en: "Dia wanted to be confident overnight. She read books, watched TED talks, tried affirmations. Nothing worked instantly. It took months of small daily practices — saying no, speaking up, choosing herself — before she finally felt the shift.", hi: "दिया रातोंरात आत्मविश्वासी बनना चाहती थी। कुछ भी तुरंत काम नहीं आया। महीनों के छोटे दैनिक प्रयासों के बाद उसने बदलाव महसूस किया।", bn: "দিয়া রাতারাতি আত্মবিশ্বাসী হতে চেয়েছিল। কিছুই তাৎক্ষণিক কাজ করেনি। মাসের পর মাস ছোট দৈনিক অনুশীলনের পর সে পরিবর্তন অনুভব করল।" }
      },
      {
        id: 18,
        text: { en: "You have been broken and put yourself back together so many times. I am in awe of the way you heal.", hi: "आप इतनी बार टूटे हैं और खुद को जोड़ा है। मैं आपके ठीक होने के तरीके पर विस्मित हूँ।", bn: "আপনি এতবার ভেঙেছেন এবং নিজেকে জোড়া লাগিয়েছেন। আপনার সুস্থ হওয়ার পদ্ধতিতে আমি বিস্মিত।" },
        author: "Rupi Kaur", book: "Milk and Honey",
        category: ["strength", "healing", "self-love"],
        mood: ["sad", "hopeful"],
        month: [3, 6, 9, 12],
        realExample: { en: "Think about everything you've survived — every heartbreak, every betrayal, every night you cried yourself to sleep. And yet here you are, still reading this, still trying, still hoping. That's not weakness. That's extraordinary strength.", hi: "सोचिए आपने कितना कुछ सहा है — हर दिल टूटना, हर विश्वासघात। और फिर भी आप यहाँ हैं, अभी भी कोशिश कर रहे हैं। यह कमज़ोरी नहीं, असाधारण ताकत है।", bn: "ভাবুন আপনি কতকিছু সহ্য করেছেন — প্রতিটি হৃদয়ভঙ্গ, প্রতিটি বিশ্বাসঘাতকতা। তবুও আপনি এখানে আছেন, এখনো চেষ্টা করছেন। এটা দুর্বলতা নয়, অসাধারণ শক্তি।" }
      },
      {
        id: 19,
        text: { en: "The world gives you so much pain and here you are making gold out of it.", hi: "दुनिया आपको इतना दर्द देती है और आप उसमें से सोना बना रहे हैं।", bn: "পৃথিবী আপনাকে এত কষ্ট দেয় আর আপনি তা থেকে সোনা বানাচ্ছেন।" },
        author: "Rupi Kaur", book: "Milk and Honey",
        category: ["strength", "growth", "healing"],
        mood: ["hopeful", "sad"],
        month: [1, 5, 9],
        realExample: { en: "Maya lost her job during the pandemic. Instead of spiraling, she used that time to learn painting — something she'd dreamed of since childhood. Today she sells her art online. Her pain became her palette.", hi: "महामारी में माया की नौकरी गई। रुकने की बजाय उसने पेंटिंग सीखी। आज वो अपनी कला ऑनलाइन बेचती है। उसका दर्द उसका रंग बन गया।", bn: "মহামারীতে মায়ার চাকরি গেল। থেমে না গিয়ে সে পেইন্টিং শিখল। আজ সে অনলাইনে শিল্প বিক্রি করে। তার কষ্ট তার প্যালেট হয়ে গেল।" }
      },
      {
        id: 20,
        text: { en: "How you love yourself is how you teach others to love you.", hi: "आप खुद से कैसे प्यार करते हैं, यही दूसरों को सिखाता है कि आपसे कैसे प्यार करें।", bn: "আপনি নিজেকে যেভাবে ভালোবাসেন, সেটাই অন্যদের শেখায় আপনাকে কীভাবে ভালোবাসতে হবে।" },
        author: "Rupi Kaur", book: "The Sun and Her Flowers",
        category: ["self-love", "self-respect", "boundaries"],
        mood: ["disrespected", "lonely"],
        month: [2, 6, 10],
        realExample: { en: "Isha always accepted the bare minimum — late replies, cancelled plans, half-hearted apologies. When she started treating herself with respect — cooking nice meals for herself, saying no to people who disrespected her — others began treating her better too.", hi: "ईशा हमेशा कम से कम स्वीकार करती थी। जब उसने खुद का सम्मान करना शुरू किया, दूसरों ने भी उसके साथ बेहतर व्यवहार करना शुरू किया।", bn: "ঈশা সবসময় ন্যূনতম মেনে নিত। যখন সে নিজের সম্মান করতে শুরু করল, অন্যরাও তার সাথে ভালো ব্যবহার করতে লাগল।" }
      },
      {
        id: 21,
        text: { en: "I want to apologize to all the women I have called beautiful before I've called them intelligent or brave.", hi: "मैं उन सभी महिलाओं से माफ़ी चाहती हूँ जिन्हें मैंने बुद्धिमान या बहादुर कहने से पहले सुंदर कहा।", bn: "আমি সেই সব নারীদের কাছে ক্ষমা চাইতে চাই যাদের আমি বুদ্ধিমান বা সাহসী বলার আগে সুন্দর বলেছিলাম।" },
        author: "Rupi Kaur", book: "Milk and Honey",
        category: ["self-respect", "strength", "courage"],
        mood: ["hopeful", "disrespected"],
        month: [3, 7, 11],
        realExample: { en: "Neha was always praised for her looks, never for her ideas. At work, she started speaking up — demanding credit for her contributions. She proved that her mind was her most beautiful feature.", hi: "नेहा की हमेशा सुंदरता की तारीफ होती थी, विचारों की नहीं। काम पर उसने बोलना शुरू किया — अपने योगदान का श्रेय माँगा।", bn: "নেহার সবসময় সৌন্দর্যের প্রশংসা হত, ধারণার নয়। কাজে সে কথা বলতে শুরু করল — নিজের অবদানের কৃতিত্ব দাবি করল।" }
      },
      // ===== RUPI KAUR — The Sun and Her Flowers =====
      {
        id: 22,
        text: { en: "I am learning to love myself first. It is the quietest revolution.", hi: "मैं पहले खुद से प्यार करना सीख रही हूँ। यह सबसे शांत क्रांति है।", bn: "আমি প্রথমে নিজেকে ভালোবাসতে শিখছি। এটি সবচেয়ে নীরব বিপ্লব।" },
        author: "Rupi Kaur", book: "The Sun and Her Flowers",
        category: ["self-love", "growth", "healing"],
        mood: ["hopeful"],
        month: [1, 4, 7, 10],
        realExample: { en: "Sometimes the biggest act of rebellion is choosing yourself in a world that tells you to put everyone else first. It's saying 'I matter too' — not with arrogance, but with quiet certainty.", hi: "कभी-कभी सबसे बड़ा विद्रोह खुद को चुनना है — उस दुनिया में जो कहती है सबको पहले रखो।", bn: "কখনো কখনো সবচেয়ে বড় বিদ্রোহ হলো নিজেকে বেছে নেওয়া — এমন পৃথিবীতে যা বলে সবাইকে আগে রাখতে।" }
      },
      {
        id: 23,
        text: { en: "What is stronger than the human heart which shatters over and over and still lives.", hi: "मानव हृदय से मज़बूत क्या है जो बार-बार टूटता है फिर भी जीता है।", bn: "মানুষের হৃদয়ের চেয়ে শক্তিশালী কী যা বারবার ভাঙে তবুও বেঁচে থাকে।" },
        author: "Rupi Kaur", book: "The Sun and Her Flowers",
        category: ["strength", "healing", "courage"],
        mood: ["sad", "hopeful"],
        month: [2, 5, 8, 11],
        realExample: { en: "Your heart has survived every worst day you've ever had. A 100% survival rate. Remember that when you feel like you can't go on.", hi: "आपके दिल ने आपके हर सबसे बुरे दिन से बचाया है। 100% survival rate। याद रखें जब लगे कि आगे नहीं बढ़ सकते।", bn: "আপনার হৃদয় আপনার প্রতিটি সবচেয়ে খারাপ দিন থেকে বেঁচে আছে। ১০০% survival rate। মনে রাখুন যখন মনে হয় আর এগোতে পারছেন না।" }
      },
      // ===== MARK MANSON — The Subtle Art of Not Giving a F*ck =====
      {
        id: 24,
        text: { en: "Who you are is defined by what you're willing to struggle for.", hi: "आप कौन हैं यह इससे तय होता है कि आप किसके लिए संघर्ष करने को तैयार हैं।", bn: "আপনি কে তা নির্ধারিত হয় আপনি কীসের জন্য সংগ্রাম করতে রাজি।" },
        author: "Mark Manson", book: "The Subtle Art of Not Giving a F*ck",
        category: ["growth", "purpose", "courage"],
        mood: ["anxious", "hopeful"],
        month: [1, 4, 7, 10],
        realExample: { en: "Everyone wants the result — the fit body, the successful career, the happy relationship. But who's willing to go through the pain? The gym at 6 AM? The rejection emails? The hard conversations? Your willingness to struggle is what separates dreamers from doers.", hi: "सब परिणाम चाहते हैं — फिट बॉडी, सफल करियर। लेकिन कौन दर्द सहने को तैयार है? सुबह 6 बजे जिम? अस्वीकृति? कठिन बातचीत?", bn: "সবাই ফলাফল চায় — ফিট শরীর, সফল ক্যারিয়ার। কিন্তু কে কষ্ট সহ্য করতে রাজি? সকাল ৬টায় জিম? প্রত্যাখ্যান? কঠিন কথোপকথন?" }
      },
      {
        id: 25,
        text: { en: "The desire for more positive experience is itself a negative experience. And the acceptance of one's negative experience is itself a positive experience.", hi: "और अधिक सकारात्मक अनुभव की चाह खुद एक नकारात्मक अनुभव है। और अपने नकारात्मक अनुभव की स्वीकृति खुद एक सकारात्मक अनुभव है।", bn: "আরো ইতিবাচক অভিজ্ঞতার আকাঙ্ক্ষা নিজেই একটি নেতিবাচক অভিজ্ঞতা। আর নেতিবাচক অভিজ্ঞতার গ্রহণযোগ্যতা নিজেই একটি ইতিবাচক অভিজ্ঞতা।" },
        author: "Mark Manson", book: "The Subtle Art of Not Giving a F*ck",
        category: ["overthinking", "growth", "healing"],
        mood: ["anxious", "sad"],
        month: [2, 5, 8, 11],
        realExample: { en: "The more Raj chased happiness, the more unhappy he felt about not being happy enough. When he accepted that bad days are normal, that sadness isn't failure — he paradoxically started feeling better.", hi: "जितना राज खुशी पीछे भागा, उतना दुखी हुआ कि काफी खुश नहीं। जब उसने बुरे दिनों को सामान्य माना, विरोधाभासी रूप से बेहतर महसूस किया।", bn: "রাজ যত সুখের পিছনে ছুটল, তত অসুখী হল যে যথেষ্ট সুখী নয়। যখন সে খারাপ দিনকে স্বাভাবিক মেনে নিল, বিপরীতভাবে ভালো অনুভব করল।" }
      },
      {
        id: 26,
        text: { en: "You are not special. Everyone struggles. And that's okay. That's what makes us human.", hi: "आप विशेष नहीं हैं। सब संघर्ष करते हैं। और यह ठीक है। यही हमें इंसान बनाता है।", bn: "আপনি বিশেষ নন। সবাই সংগ্রাম করে। এবং এটা ঠিক আছে। এটাই আমাদের মানুষ করে।" },
        author: "Mark Manson", book: "The Subtle Art of Not Giving a F*ck",
        category: ["growth", "vulnerability", "healing"],
        mood: ["sad", "lonely"],
        month: [3, 6, 9, 12],
        realExample: { en: "On social media, everyone looks like they have it figured out. Perfect relationships, perfect bodies, perfect lives. Behind the filters, everyone is struggling with something. You are never as alone in your pain as you think.", hi: "सोशल मीडिया पर सब perfect लगते हैं। फिल्टर्स के पीछे, सब किसी न किसी चीज़ से जूझ रहे हैं। आप अपने दर्द में कभी उतने अकेले नहीं जितना सोचते हैं।", bn: "সোশ্যাল মিডিয়ায় সবাই perfect দেখায়। ফিল্টারের পিছনে, সবাই কিছু না কিছু নিয়ে লড়াই করছে। আপনি আপনার কষ্টে কখনো এতটা একা নন যতটা ভাবেন।" }
      },
      {
        id: 27,
        text: { en: "Maturity is what happens when one learns to only give a f*ck about what's truly f*ckworthy.", hi: "परिपक्वता तब आती है जब आप सीख लेते हैं कि सिर्फ उसकी परवाह करनी चाहिए जो सच में परवाह के लायक है।", bn: "পরিণতি তখন আসে যখন আপনি শেখেন শুধু সেটারই পরোয়া করতে যা সত্যিই পরোয়া করার যোগ্য।" },
        author: "Mark Manson", book: "The Subtle Art of Not Giving a F*ck",
        category: ["boundaries", "self-respect", "growth"],
        mood: ["anxious", "disrespected"],
        month: [1, 5, 9],
        realExample: { en: "Amit used to care about every comment, every look, every opinion. Then he made a list of 5 things that truly mattered to him. Everything else? He let it go. His anxiety dropped by half within a month.", hi: "अमित हर टिप्पणी, हर नज़र, हर राय की परवाह करता था। फिर उसने 5 चीज़ों की सूची बनाई जो वाकई मायने रखती हैं। बाकी? छोड़ दिया।", bn: "অমিত প্রতিটি মন্তব্য, প্রতিটি দৃষ্টি, প্রতিটি মতামতের পরোয়া করত। তারপর সে ৫টি জিনিসের তালিকা করল যা সত্যিই গুরুত্বপূর্ণ। বাকি? ছেড়ে দিল।" }
      },
      {
        id: 28,
        text: { en: "The only way to be comfortable with death is to understand and see yourself as something bigger than yourself.", hi: "मृत्यु के साथ सहज होने का एकमात्र तरीका है खुद को अपने से बड़ा कुछ समझना।", bn: "মৃত্যুর সাথে স্বস্তি পাওয়ার একমাত্র উপায় হলো নিজেকে নিজের চেয়ে বড় কিছু হিসেবে দেখা।" },
        author: "Mark Manson", book: "The Subtle Art of Not Giving a F*ck",
        category: ["purpose", "growth", "courage"],
        mood: ["anxious", "hopeful"],
        month: [2, 6, 10],
        realExample: { en: "When you contribute to something bigger — your family, your community, an idea — you start caring less about petty fears and more about meaningful action.", hi: "जब आप कुछ बड़ा करते हैं — परिवार, समुदाय, एक विचार — तो छोटे डर कम होते हैं और सार्थक कार्य बढ़ता है।", bn: "যখন আপনি বড় কিছুতে অবদান রাখেন — পরিবার, সম্প্রদায়, একটি ধারণা — তখন ছোট ভয় কমে যায় এবং অর্থবহ কাজ বাড়ে।" }
      },
      // ===== PAULO COELHO — The Alchemist =====
      {
        id: 29,
        text: { en: "When you want something, all the universe conspires in helping you to achieve it.", hi: "जब आप कुछ चाहते हैं, तो पूरा ब्रह्मांड आपको पाने में मदद करने की साज़िश करता है।", bn: "যখন আপনি কিছু চান, তখন সমগ্র মহাবিশ্ব আপনাকে তা অর্জন করতে সাহায্য করার ষড়যন্ত্র করে।" },
        author: "Paulo Coelho", book: "The Alchemist",
        category: ["purpose", "courage", "growth"],
        mood: ["hopeful"],
        month: [1, 4, 7, 10],
        realExample: { en: "When Aisha decided to start her own business, doors started opening she never expected — a mentor appeared, a friend offered to invest, she found the perfect location. The universe rewards clarity of intention.", hi: "जब आयशा ने अपना business शुरू करने का फैसला किया, अनपेक्षित दरवाज़े खुलने लगे — एक mentor मिला, दोस्त ने invest किया।", bn: "যখন আয়েশা নিজের ব্যবসা শুরু করার সিদ্ধান্ত নিল, অপ্রত্যাশিত দরজা খুলতে লাগল — একজন mentor এল, বন্ধু invest করল।" }
      },
      {
        id: 30,
        text: { en: "People learn, early in their lives, what is their reason for being. Maybe that's why they give up on it so early, too.", hi: "लोग जल्दी सीख लेते हैं कि उनके होने का कारण क्या है। शायद इसीलिए वे जल्दी हार भी मान लेते हैं।", bn: "মানুষ জীবনের শুরুতেই শিখে যায় তাদের থাকার কারণ কী। হয়তো তাই তারা এত তাড়াতাড়ি ছেড়েও দেয়।" },
        author: "Paulo Coelho", book: "The Alchemist",
        category: ["purpose", "courage", "growth"],
        mood: ["sad", "anxious"],
        month: [2, 5, 8, 11],
        realExample: { en: "Rishi wanted to be a musician since he was 5. Society told him 'get a real job.' He spent 10 years in IT, feeling empty. At 30, he picked up his guitar again. It's never too late to return to who you really are.", hi: "ऋषि 5 साल से musician बनना चाहता था। समाज ने कहा 'असली नौकरी करो।' 30 में उसने फिर guitar उठाया। खुद पर लौटने में कभी देर नहीं होती।", bn: "ঋষি ৫ বছর থেকে musician হতে চেয়েছিল। সমাজ বলল 'আসল চাকরি করো।' ৩০-এ সে আবার গিটার তুলে নিল। নিজের কাছে ফেরায় কখনো দেরি হয় না।" }
      },
      {
        id: 31,
        text: { en: "Tell your heart that the fear of suffering is worse than the suffering itself.", hi: "अपने दिल से कहो कि पीड़ा का डर पीड़ा से भी बदतर है।", bn: "আপনার হৃদয়কে বলুন যে কষ্টের ভয় কষ্টের চেয়েও খারাপ।" },
        author: "Paulo Coelho", book: "The Alchemist",
        category: ["courage", "growth", "healing"],
        mood: ["anxious", "sad"],
        month: [3, 6, 9, 12],
        realExample: { en: "Pooja avoided having a difficult conversation with her mother for years. She imagined the worst — tears, shouting, rejection. When she finally spoke up, her mother listened, cried, and hugged her. The fear was always worse than the reality.", hi: "पूजा ने सालों तक माँ से कठिन बातचीत टाली। जब उसने आखिरकार बोला, माँ ने सुना, रोई, और गले लगाया। डर हमेशा हक़ीक़त से बदतर था।", bn: "পূজা বছরের পর বছর মায়ের সাথে কঠিন কথোপকথন এড়িয়ে গেছে। যখন শেষ পর্যন্ত বলল, মা শুনল, কাঁদল, এবং জড়িয়ে ধরল। ভয় সবসময় বাস্তবের চেয়ে খারাপ ছিল।" }
      },
      {
        id: 32,
        text: { en: "One day you will wake up and there won't be any more time to do the things you've always wanted. Do it now.", hi: "एक दिन आप जागेंगे और उन चीज़ों को करने का समय नहीं बचेगा जो आप हमेशा करना चाहते थे। अभी करो।", bn: "একদিন জাগবেন আর সেই কাজগুলো করার সময় থাকবে না যা সবসময় করতে চেয়েছিলেন। এখনই করুন।" },
        author: "Paulo Coelho", book: "The Alchemist",
        category: ["purpose", "courage", "discipline"],
        mood: ["hopeful", "anxious"],
        month: [1, 5, 9],
        realExample: { en: "A 70-year-old man was asked his biggest regret. He didn't say the things he did — he regretted the things he didn't do. The trip he never took. The book he never wrote. The 'I love you' he never said. Don't be that person.", hi: "70 साल के एक बुज़ुर्ग से उनका सबसे बड़ा पछतावा पूछा गया। उन्होंने किए गए काम नहीं कहे — न किए गए काम बताए।", bn: "৭০ বছরের এক বৃদ্ধকে তার সবচেয়ে বড় আফসোস জিজ্ঞেস করা হল। তিনি করা কাজের কথা বলেননি — না করা কাজের কথা বললেন।" }
      },
      {
        id: 33,
        text: { en: "No one can make you feel inferior without your consent.", hi: "आपकी सहमति के बिना कोई आपको हीन महसूस नहीं करा सकता।", bn: "আপনার সম্মতি ছাড়া কেউ আপনাকে হীনভাবে অনুভব করাতে পারে না।" },
        author: "Paulo Coelho", book: "The Alchemist",
        category: ["self-respect", "strength", "boundaries"],
        mood: ["disrespected", "angry"],
        month: [2, 6, 10],
        realExample: { en: "When someone insults you, they hand you a package. You get to decide whether to open it or let it lie. Their words are about their insecurities, not your worth.", hi: "जब कोई आपका अपमान करता है, वो एक पैकेज देते हैं। आप तय करें खोलें या छोड़ दें। उनके शब्द उनकी असुरक्षा के बारे में हैं, आपकी कीमत नहीं।", bn: "যখন কেউ আপনাকে অপমান করে, তারা একটি প্যাকেজ দেয়। আপনি ঠিক করুন খুলবেন নাকি ফেলে দেবেন। তাদের কথা তাদের অনিরাপত্তা, আপনার মূল্য নয়।" }
      },
      // ===== JAMES CLEAR — Atomic Habits =====
      {
        id: 34,
        text: { en: "You do not rise to the level of your goals. You fall to the level of your systems.", hi: "आप अपने लक्ष्यों के स्तर तक नहीं उठते। आप अपनी प्रणालियों के स्तर तक गिरते हैं।", bn: "আপনি আপনার লক্ষ্যের স্তরে ওঠেন না। আপনি আপনার সিস্টেমের স্তরে পড়ে যান।" },
        author: "James Clear", book: "Atomic Habits",
        category: ["discipline", "growth", "purpose"],
        mood: ["hopeful", "anxious"],
        month: [1, 4, 7, 10],
        realExample: { en: "Everyone sets New Year resolutions to 'get fit.' By February, 90% have quit. The difference between those who succeed and those who don't isn't motivation — it's systems. The person who puts running shoes by the door every night is more likely to run than the person who relies on willpower alone.", hi: "सब New Year पर 'fit होने' का resolution लेते हैं। फरवरी तक 90% छोड़ देते हैं। फ़र्क motivation नहीं — systems है।", bn: "সবাই New Year-এ 'ফিট হওয়ার' রেজোলিউশন নেয়। ফেব্রুয়ারিতে ৯০% ছেড়ে দেয়। পার্থক্য motivation নয় — systems।" }
      },
      {
        id: 35,
        text: { en: "Every action you take is a vote for the type of person you wish to become.", hi: "आपका हर काम उस तरह के इंसान के लिए एक वोट है जो आप बनना चाहते हैं।", bn: "আপনার প্রতিটি কাজ সেই ধরনের মানুষের জন্য একটি ভোট যা আপনি হতে চান।" },
        author: "James Clear", book: "Atomic Habits",
        category: ["discipline", "growth", "self-love"],
        mood: ["hopeful"],
        month: [2, 5, 8, 11],
        realExample: { en: "Every time you choose to read instead of scroll, exercise instead of sleep in, speak up instead of stay silent — you're casting a vote for the person you want to become. You don't need a dramatic transformation. You need consistent votes.", hi: "हर बार जब आप scroll की बजाय पढ़ते हैं, सोने की बजाय exercise करते हैं — आप उस इंसान के लिए vote कर रहे हैं जो बनना चाहते हैं।", bn: "প্রতিবার যখন আপনি scroll এর বদলে পড়েন, ঘুমানোর বদলে ব্যায়াম করেন — আপনি সেই মানুষটির জন্য ভোট দিচ্ছেন যা আপনি হতে চান।" }
      },
      {
        id: 36,
        text: { en: "Habits are the compound interest of self-improvement.", hi: "आदतें आत्म-सुधार का चक्रवृद्धि ब्याज हैं।", bn: "অভ্যাস হলো আত্ম-উন্নতির চক্রবৃদ্ধি সুদ।" },
        author: "James Clear", book: "Atomic Habits",
        category: ["discipline", "growth"],
        mood: ["hopeful"],
        month: [3, 6, 9, 12],
        realExample: { en: "1% better every day = 37 times better in a year. 1% worse = nearly zero. The math of small habits is astonishing. That 10-minute walk today? It's not just a walk. It's the first brick of a completely different life.", hi: "हर दिन 1% बेहतर = साल में 37 गुना बेहतर। छोटी आदतों का गणित चौंकाने वाला है।", bn: "প্রতিদিন ১% ভালো = বছরে ৩৭ গুণ ভালো। ছোট অভ্যাসের গণিত বিস্ময়কর।" }
      },
      {
        id: 37,
        text: { en: "The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become.", hi: "अपनी आदतें बदलने का सबसे प्रभावी तरीका यह है कि आप क्या हासिल करना चाहते हैं पर नहीं, बल्कि कौन बनना चाहते हैं पर ध्यान दें।", bn: "আপনার অভ্যাস পরিবর্তনের সবচেয়ে কার্যকর উপায় হলো আপনি কী অর্জন করতে চান তার উপর নয়, বরং আপনি কে হতে চান তার উপর মনোযোগ দেওয়া।" },
        author: "James Clear", book: "Atomic Habits",
        category: ["growth", "discipline", "purpose"],
        mood: ["hopeful", "anxious"],
        month: [1, 5, 9],
        realExample: { en: "Instead of saying 'I want to quit smoking,' say 'I am not a smoker.' Instead of 'I want to lose weight,' say 'I am a healthy person.' Identity drives behavior. Become the person first, the results follow.", hi: "'मैं smoking छोड़ना चाहता हूँ' की बजाय कहें 'मैं smoker नहीं हूँ।' पहचान व्यवहार चलाती है।", bn: "'আমি ধূমপান ছাড়তে চাই' এর বদলে বলুন 'আমি ধূমপায়ী নই।' পরিচয় আচরণ চালায়।" }
      },
      {
        id: 38,
        text: { en: "Be the designer of your world and not merely the consumer of it.", hi: "अपनी दुनिया के डिज़ाइनर बनो, सिर्फ उपभोक्ता नहीं।", bn: "আপনার পৃথিবীর ডিজাইনার হন, শুধু ভোক্তা নয়।" },
        author: "James Clear", book: "Atomic Habits",
        category: ["growth", "discipline", "purpose"],
        mood: ["hopeful"],
        month: [2, 6, 10],
        realExample: { en: "Tanya rearranged her room — put books on her desk instead of her phone, kept water next to her bed, removed the TV from her bedroom. Small environmental changes led to massive behavior changes.", hi: "तान्या ने कमरा बदला — फ़ोन की जगह किताबें रखीं, बिस्तर के पास पानी रखा, बेडरूम से TV हटाया। छोटे बदलावों ने बड़ा फ़र्क किया।", bn: "তান্যা ঘর পুনর্বিন্যাস করল — ফোনের বদলে বই রাখল, বিছানার পাশে জল রাখল, বেডরুম থেকে TV সরাল। ছোট পরিবর্তন বড় ফলাফল আনল।" }
      },
      // ===== BRENÉ BROWN — The Gifts of Imperfection =====
      {
        id: 39,
        text: { en: "Owning our story and loving ourselves through that process is the bravest thing we'll ever do.", hi: "अपनी कहानी को स्वीकार करना और उस प्रक्रिया में खुद से प्यार करना — यह सबसे बहादुरी का काम है।", bn: "আমাদের গল্প স্বীকার করা এবং সেই প্রক্রিয়ায় নিজেকে ভালোবাসা — এটাই সবচেয়ে সাহসী কাজ।" },
        author: "Brené Brown", book: "The Gifts of Imperfection",
        category: ["vulnerability", "self-love", "courage"],
        mood: ["sad", "hopeful"],
        month: [1, 4, 7, 10],
        realExample: { en: "Sharing your story — your struggles, your failures, your imperfections — isn't weakness. It's the ultimate act of courage. When you say 'This is who I am, and I'm enough,' you free yourself and inspire others to do the same.", hi: "अपनी कहानी साझा करना — संघर्ष, असफलताएं, अपूर्णताएं — कमज़ोरी नहीं है। यह साहस का चरम कार्य है।", bn: "আপনার গল্প শেয়ার করা — সংগ্রাম, ব্যর্থতা, অপূর্ণতা — দুর্বলতা নয়। এটি সাহসের চূড়ান্ত কাজ।" }
      },
      {
        id: 40,
        text: { en: "Imperfections are not inadequacies; they are reminders that we're all in this together.", hi: "अपूर्णताएं कमियां नहीं हैं; ये याद दिलाती हैं कि हम सब इसमें एक साथ हैं।", bn: "অপূর্ণতা অপ্রতুলতা নয়; এগুলো মনে করিয়ে দেয় যে আমরা সবাই একসাথে এতে আছি।" },
        author: "Brené Brown", book: "The Gifts of Imperfection",
        category: ["vulnerability", "self-love", "healing"],
        mood: ["sad", "lonely"],
        month: [2, 5, 8, 11],
        realExample: { en: "The crack in the cup doesn't make it useless — in Japanese culture (kintsugi), they fill cracks with gold, making the object more beautiful than before. Your scars are your gold.", hi: "कप में दरार उसे बेकार नहीं बनाती — जापानी संस्कृति (kintsugi) में दरारों को सोने से भरते हैं। आपके निशान आपका सोना हैं।", bn: "কাপের ফাটল তাকে অকেজো করে না — জাপানি সংস্কৃতিতে (kintsugi) ফাটল সোনা দিয়ে ভরা হয়। আপনার দাগ আপনার সোনা।" }
      },
      {
        id: 41,
        text: { en: "Courage starts with showing up and letting ourselves be seen.", hi: "साहस की शुरुआत उपस्थित होने और खुद को दिखाने देने से होती है।", bn: "সাহসের শুরু হয় উপস্থিত হওয়া এবং নিজেকে দেখাতে দেওয়া থেকে।" },
        author: "Brené Brown", book: "The Gifts of Imperfection",
        category: ["courage", "vulnerability", "growth"],
        mood: ["anxious", "hopeful"],
        month: [3, 6, 9, 12],
        realExample: { en: "Asking for help when you're struggling isn't weakness — it's courage. Saying 'I'm not okay' takes more strength than pretending everything is fine. Show up as you are. That's enough.", hi: "जब आप जूझ रहे हों तो मदद माँगना कमज़ोरी नहीं — साहस है। 'मैं ठीक नहीं हूँ' कहना 'सब ठीक है' का नाटक करने से ज़्यादा ताकत लेता है।", bn: "যখন সংগ্রাম করছেন তখন সাহায্য চাওয়া দুর্বলতা নয় — সাহস। 'আমি ঠিক নেই' বলা 'সব ঠিক আছে' ভান করার চেয়ে বেশি শক্তি নেয়।" }
      },
      {
        id: 42,
        text: { en: "You are worthy of love and belonging right now. Not when you lose 10 pounds. Not when you get married. Right now.", hi: "आप अभी प्यार और अपनेपन के लायक हैं। तब नहीं जब 10 किलो घटाएं। तब नहीं जब शादी हो। अभी।", bn: "আপনি এখনই ভালোবাসা এবং অন্তর্ভুক্তির যোগ্য। ১০ কেজি কমানোর পর নয়। বিয়ের পর নয়। এখনই।" },
        author: "Brené Brown", book: "The Gifts of Imperfection",
        category: ["self-love", "self-respect", "healing"],
        mood: ["sad", "lonely", "disrespected"],
        month: [1, 5, 9],
        realExample: { en: "Stop putting conditions on your own worthiness. 'I'll be happy when...' is a trap. You deserve joy, love, and respect TODAY — not as a reward for meeting some impossible standard.", hi: "अपनी योग्यता पर शर्तें लगाना बंद करें। 'मैं तब खुश होऊंगा जब...' एक जाल है। आप आज खुशी, प्यार और सम्मान के हक़दार हैं।", bn: "নিজের যোগ্যতায় শর্ত লাগানো বন্ধ করুন। 'আমি তখন খুশি হব যখন...' একটি ফাঁদ। আপনি আজই সুখ, ভালোবাসা এবং সম্মানের যোগ্য।" }
      },
      {
        id: 43,
        text: { en: "Vulnerability is not winning or losing; it's having the courage to show up and be seen when we have no control over the outcome.", hi: "संवेदनशीलता जीतना या हारना नहीं है; यह तब उपस्थित होने और दिखने का साहस है जब हमारा परिणाम पर कोई नियंत्रण नहीं।", bn: "দুর্বলতা প্রকাশ জেতা বা হারা নয়; এটি ফলাফলের উপর কোনো নিয়ন্ত্রণ না থাকলেও উপস্থিত হওয়া এবং দেখানোর সাহস।" },
        author: "Brené Brown", book: "The Gifts of Imperfection",
        category: ["vulnerability", "courage", "strength"],
        mood: ["anxious", "hopeful"],
        month: [2, 6, 10],
        realExample: { en: "Confessing your feelings to someone, starting a new venture, sharing your art with the world — none of these guarantee success. But doing them anyway? That's where the magic lives.", hi: "किसी को अपनी भावनाएं बताना, नया काम शुरू करना — इनमें सफलता की गारंटी नहीं। लेकिन फिर भी करना? वहीं जादू है।", bn: "কাউকে অনুভূতি জানানো, নতুন কিছু শুরু করা — এগুলোতে সাফল্যের গ্যারান্টি নেই। তবুও করা? সেখানেই যাদু।" }
      },
      // ===== NAJWA ZEBIAN — Welcome Home =====
      {
        id: 44,
        text: { en: "These mountains that you carry, you were only supposed to climb.", hi: "ये पहाड़ जो आप ढो रहे हैं, आपको तो बस इन पर चढ़ना था।", bn: "এই পাহাড়গুলো যা আপনি বহন করছেন, আপনার তো শুধু চড়তে হওয়ার কথা ছিল।" },
        author: "Najwa Zebian", book: "Welcome Home",
        category: ["letting-go", "healing", "strength"],
        mood: ["sad", "anxious"],
        month: [1, 4, 7, 10],
        realExample: { en: "You're carrying the weight of everyone's expectations, past mistakes, future fears — all at once. But those weren't meant to be carried. They were meant to be crossed. Put down the mountain. Start climbing instead.", hi: "आप सबकी उम्मीदों, पिछली गलतियों, भविष्य के डर का बोझ एक साथ ढो रहे हैं। लेकिन ये ढोने के लिए नहीं, पार करने के लिए थे।", bn: "আপনি সবার প্রত্যাশা, অতীতের ভুল, ভবিষ্যতের ভয়ের ভার একসাথে বহন করছেন। কিন্তু এগুলো বহনের জন্য নয়, পার করার জন্য ছিল।" }
      },
      {
        id: 45,
        text: { en: "Home is not a place. It is a feeling. Build that feeling inside yourself so no one can ever take it away.", hi: "घर कोई जगह नहीं है। यह एक एहसास है। वो एहसास अपने अंदर बनाओ ताकि कोई कभी छीन न सके।", bn: "ঘর কোনো জায়গা নয়। এটি একটি অনুভূতি। সেই অনুভূতি নিজের ভেতরে তৈরি করুন যাতে কেউ কখনো কেড়ে নিতে না পারে।" },
        author: "Najwa Zebian", book: "Welcome Home",
        category: ["self-love", "healing", "strength"],
        mood: ["lonely", "sad"],
        month: [2, 5, 8, 11],
        realExample: { en: "After moving to a new city, Preet felt homeless even with a roof over her head. Then she started building home within herself — her morning routine, her journaling practice, her evening tea. Home became wherever she was.", hi: "नई शहर में आने के बाद प्रीत को छत होते हुए भी बेघर लगता था। फिर उसने अपने अंदर घर बनाना शुरू किया — सुबह की दिनचर्या, जर्नलिंग, शाम की चाय।", bn: "নতুন শহরে আসার পর প্রীতের ছাদ থাকা সত্ত্বেও গৃহহীন লাগত। তারপর সে নিজের ভেতরে ঘর বানাতে শুরু করল — সকালের রুটিন, জার্নালিং, সন্ধ্যার চা।" }
      },
      {
        id: 46,
        text: { en: "Don't let someone make you feel like you're asking for too much when you're only asking for what you deserve.", hi: "किसी को आपको यह एहसास न कराने दें कि आप बहुत ज़्यादा माँग रहे हैं जबकि आप सिर्फ वही माँग रहे हैं जो आप हक़दार हैं।", bn: "কাউকে আপনাকে এমন অনুভব করাতে দেবেন না যে আপনি বেশি চাইছেন যখন আপনি শুধু তাই চাইছেন যা আপনার প্রাপ্য।" },
        author: "Najwa Zebian", book: "Welcome Home",
        category: ["self-respect", "boundaries", "self-love"],
        mood: ["disrespected", "angry"],
        month: [3, 6, 9, 12],
        realExample: { en: "Wanting respect isn't 'too much.' Wanting honesty isn't 'too much.' Wanting someone to show up for you the way you show up for them isn't 'too much.' You're not asking for extra. You're asking for the bare minimum of what love should be.", hi: "सम्मान चाहना 'ज़्यादा' नहीं है। ईमानदारी चाहना 'ज़्यादा' नहीं है। आप extra नहीं माँग रहे — प्यार का न्यूनतम माँग रहे हैं।", bn: "সম্মান চাওয়া 'বেশি' নয়। সততা চাওয়া 'বেশি' নয়। আপনি extra চাইছেন না — ভালোবাসার ন্যূনতম চাইছেন।" }
      },
      {
        id: 47,
        text: { en: "Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy.", hi: "इतना आत्म-सम्मान रखो कि उस चीज़ से दूर हो जाओ जो अब आपकी सेवा, विकास या खुशी नहीं देती।", bn: "নিজেকে এতটা সম্মান করুন যে এমন কিছু থেকে দূরে চলে যান যা আর আপনার সেবা করে না, বৃদ্ধি করে না, বা সুখী করে না।" },
        author: "Najwa Zebian", book: "Welcome Home",
        category: ["self-respect", "letting-go", "boundaries"],
        mood: ["disrespected", "sad"],
        month: [1, 5, 9],
        realExample: { en: "Leaving a job, a friendship, or a relationship that makes you miserable isn't quitting — it's choosing yourself. You don't owe anyone your peace of mind.", hi: "एक नौकरी, दोस्ती, या रिश्ता छोड़ना जो आपको दुखी करता है — हार नहीं, खुद को चुनना है। आप किसी को अपनी शांति देने के लिए बाध्य नहीं हैं।", bn: "যে চাকরি, বন্ধুত্ব, বা সম্পর্ক আপনাকে দুঃখী করে তা ছেড়ে দেওয়া হার নয় — নিজেকে বেছে নেওয়া। আপনি কাউকে আপনার মানসিক শান্তি ঋণী নন।" }
      },
      {
        id: 48,
        text: { en: "You are not hard to love. You've just been giving your love to the wrong people.", hi: "आपसे प्यार करना मुश्किल नहीं है। आप बस गलत लोगों को अपना प्यार दे रहे थे।", bn: "আপনাকে ভালোবাসা কঠিন নয়। আপনি শুধু ভুল মানুষদের আপনার ভালোবাসা দিচ্ছিলেন।" },
        author: "Najwa Zebian", book: "Welcome Home",
        category: ["self-love", "heartbreak", "self-respect"],
        mood: ["heartbreak", "lonely"],
        month: [2, 6, 10],
        realExample: { en: "If a plant doesn't bloom, you don't blame the plant — you change the soil. If your love hasn't been reciprocated, the problem isn't your love. It's where you planted it.", hi: "अगर पौधा नहीं खिलता, तो पौधे को दोष नहीं देते — मिट्टी बदलते हैं। अगर प्यार का जवाब नहीं मिला, समस्या प्यार नहीं — जहाँ बोया वहाँ है।", bn: "যদি গাছ ফোটে না, গাছকে দোষ দেন না — মাটি বদলান। ভালোবাসার উত্তর না পেলে, সমস্যা ভালোবাসা নয় — যেখানে রোপণ করেছেন সেখানে।" }
      },
      // ===== YUNG PUEBLO — Clarity & Connection =====
      {
        id: 49,
        text: { en: "The healing you seek is not in someone's love for you, but in your own love for yourself.", hi: "जो उपचार आप ढूंढ रहे हैं वो किसी के प्यार में नहीं, आपके अपने आत्म-प्रेम में है।", bn: "যে নিরাময় আপনি খুঁজছেন তা কারো ভালোবাসায় নয়, আপনার নিজের আত্ম-ভালোবাসায় আছে।" },
        author: "Yung Pueblo", book: "Clarity & Connection",
        category: ["healing", "self-love", "growth"],
        mood: ["heartbreak", "lonely"],
        month: [1, 4, 7, 10],
        realExample: { en: "After his breakup, Arjun jumped into another relationship hoping it would heal him. It didn't. He learned that no amount of external love can fix an internal wound. Healing starts with you.", hi: "ब्रेकअप के बाद अर्जुन दूसरे रिश्ते में कूद गया ठीक होने की उम्मीद में। नहीं हुआ। उसने सीखा कि बाहर का प्यार अंदर का घाव नहीं भर सकता।", bn: "ব্রেকআপের পর অর্জুন আরেকটি সম্পর্কে ঝাঁপ দিল সুস্থ হওয়ার আশায়। হয়নি। সে শিখল বাইরের ভালোবাসা ভেতরের ক্ষত সারাতে পারে না।" }
      },
      {
        id: 50,
        text: { en: "Letting go does not mean forgetting. It means you've chosen your peace over your pain.", hi: "छोड़ देने का मतलब भूलना नहीं है। इसका मतलब है आपने अपने दर्द पर अपनी शांति चुनी।", bn: "ছেড়ে দেওয়ার মানে ভুলে যাওয়া নয়। এর মানে আপনি আপনার কষ্টের উপর শান্তি বেছে নিয়েছেন।" },
        author: "Yung Pueblo", book: "Clarity & Connection",
        category: ["letting-go", "healing", "self-love"],
        mood: ["sad", "heartbreak"],
        month: [2, 5, 8, 11],
        realExample: { en: "You can still have love for someone and choose not to let them be a part of your life. Letting go isn't about erasing memories — it's about refusing to let those memories control your present.", hi: "आप किसी से अभी भी प्यार कर सकते हैं और चुन सकते हैं कि वो आपकी ज़िंदगी का हिस्सा न रहें। छोड़ना यादें मिटाना नहीं — यादों को वर्तमान पर हावी न होने देना है।", bn: "আপনি কাউকে এখনো ভালোবাসতে পারেন এবং বেছে নিতে পারেন যে তারা আপনার জীবনের অংশ না থাকুক। ছেড়ে দেওয়া স্মৃতি মুছে ফেলা নয় — স্মৃতিকে বর্তমানে কর্তৃত্ব না করতে দেওয়া।" }
      },
      {
        id: 51,
        text: { en: "The real sign of growth is being able to observe your own patterns without judgment.", hi: "विकास का असली संकेत बिना निर्णय के अपने ही patterns को देख पाना है।", bn: "বৃদ্ধির প্রকৃত লক্ষণ হলো বিচার ছাড়াই নিজের patterns পর্যবেক্ষণ করতে পারা।" },
        author: "Yung Pueblo", book: "Clarity & Connection",
        category: ["growth", "healing", "self-love"],
        mood: ["hopeful"],
        month: [3, 6, 9, 12],
        realExample: { en: "Noticing 'I always people-please when I'm anxious' without beating yourself up about it — that's growth. Awareness without judgment is the foundation of all lasting change.", hi: "'मैं चिंतित होने पर हमेशा लोगों को खुश करने की कोशिश करता हूँ' — बिना खुद को कोसे यह notice करना ही विकास है।", bn: "'আমি উদ্বিগ্ন হলে সবসময় মানুষকে খুশি করার চেষ্টা করি' — নিজেকে দোষ না দিয়ে এটা লক্ষ্য করাই বৃদ্ধি।" }
      },
      {
        id: 52,
        text: { en: "Your calm mind is the ultimate weapon against your challenges.", hi: "आपका शांत मन आपकी चुनौतियों के खिलाफ़ सबसे बड़ा हथियार है।", bn: "আপনার শান্ত মন আপনার চ্যালেঞ্জের বিরুদ্ধে চূড়ান্ত অস্ত্র।" },
        author: "Yung Pueblo", book: "Clarity & Connection",
        category: ["strength", "overthinking", "healing"],
        mood: ["anxious", "angry"],
        month: [1, 5, 9],
        realExample: { en: "In the middle of a heated argument, Siddharth took a breath and said 'I need 5 minutes.' Those 5 minutes saved a friendship. Reacting is easy. Responding is powerful.", hi: "एक तीखी बहस में सिद्धार्थ ने साँस ली और कहा 'मुझे 5 मिनट चाहिए।' उन 5 मिनट ने एक दोस्ती बचाई।", bn: "উত্তপ্ত তর্কের মাঝে সিদ্ধার্থ শ্বাস নিল এবং বলল 'আমার ৫ মিনিট দরকার।' সেই ৫ মিনিট একটি বন্ধুত্ব বাঁচাল।" }
      },
      {
        id: 53,
        text: { en: "True maturity is when you stop blaming others for your unhappiness and take responsibility for your own joy.", hi: "सच्ची परिपक्वता तब है जब आप अपनी दुखी के लिए दूसरों को दोष देना बंद करें और अपनी खुशी की ज़िम्मेदारी लें।", bn: "প্রকৃত পরিণতি তখন যখন আপনি আপনার অসুখের জন্য অন্যদের দোষ দেওয়া বন্ধ করেন এবং নিজের আনন্দের দায়িত্ব নেন।" },
        author: "Yung Pueblo", book: "Clarity & Connection",
        category: ["growth", "self-respect", "healing"],
        mood: ["angry", "disrespected"],
        month: [2, 6, 10],
        realExample: { en: "It's easy to say 'they ruined my life.' It's harder to say 'I allowed it to happen and now I'm choosing differently.' That shift — from victim to owner — is where real transformation begins.", hi: "'उन्होंने मेरी ज़िंदगी बर्बाद की' कहना आसान है। 'मैंने होने दिया और अब अलग चुन रहा हूँ' कहना कठिन। यही बदलाव असली शुरुआत है।", bn: "'তারা আমার জীবন নষ্ট করেছে' বলা সহজ। 'আমি হতে দিয়েছিলাম এবং এখন ভিন্নভাবে বেছে নিচ্ছি' বলা কঠিন। এই পরিবর্তনই প্রকৃত শুরু।" }
      },
      // ===== MORGAN HARPER NICHOLS — All Along You Were Blooming =====
      {
        id: 54,
        text: { en: "Even when it feels like nothing is happening, you are growing. Even in silence, you are becoming.", hi: "जब लगे कि कुछ नहीं हो रहा, तब भी आप बढ़ रहे हैं। खामोशी में भी, आप बन रहे हैं।", bn: "যখন মনে হয় কিছুই হচ্ছে না, তখনও আপনি বাড়ছেন। নীরবতায়ও, আপনি হয়ে উঠছেন।" },
        author: "Morgan Harper Nichols", book: "All Along You Were Blooming",
        category: ["growth", "healing", "self-love"],
        mood: ["sad", "anxious", "hopeful"],
        month: [1, 4, 7, 10],
        realExample: { en: "Seeds don't sprout the moment you plant them. There are weeks of darkness, silence, invisible growth. You might feel stuck right now, but beneath the surface, you are becoming something beautiful.", hi: "बीज बोते ही नहीं उगते। अंधेरे, खामोशी, अदृश्य विकास के हफ्ते होते हैं। शायद अभी रुका हुआ लगे, लेकिन सतह के नीचे, आप कुछ सुंदर बन रहे हैं।", bn: "বীজ রোপণ করলেই গজায় না। অন্ধকার, নীরবতা, অদৃশ্য বৃদ্ধির সপ্তাহ থাকে। হয়তো এখন আটকে আছেন, কিন্তু পৃষ্ঠের নীচে, আপনি সুন্দর কিছু হয়ে উঠছেন।" }
      },
      {
        id: 55,
        text: { en: "You were never meant to live a small life. You were always meant to bloom.", hi: "आप कभी छोटी ज़िंदगी जीने के लिए नहीं बने। आप हमेशा खिलने के लिए बने।", bn: "আপনি কখনো ছোট জীবন যাপনের জন্য তৈরি হননি। আপনি সবসময় ফুটে ওঠার জন্য তৈরি।" },
        author: "Morgan Harper Nichols", book: "All Along You Were Blooming",
        category: ["growth", "courage", "purpose"],
        mood: ["hopeful"],
        month: [2, 5, 8, 11],
        realExample: { en: "Stop shrinking yourself to fit into spaces that were never meant for you. The right room will celebrate your fullness, not ask you to become smaller.", hi: "खुद को छोटा करना बंद करें उन जगहों में फिट होने के लिए जो आपके लिए नहीं बनीं। सही जगह आपकी पूर्णता का जश्न मनाएगी।", bn: "যে জায়গা আপনার জন্য তৈরি হয়নি সেখানে ফিট হতে নিজেকে ছোট করা বন্ধ করুন। সঠিক জায়গা আপনার সম্পূর্ণতা উদযাপন করবে।" }
      },
      {
        id: 56,
        text: { en: "Let this be the season you learn to trust the timing of your own life.", hi: "यह वो मौसम हो जब आप अपनी ज़िंदगी के समय पर भरोसा करना सीखें।", bn: "এটি সেই ঋতু হোক যখন আপনি আপনার জীবনের সময়ের উপর বিশ্বাস করতে শেখেন।" },
        author: "Morgan Harper Nichols", book: "All Along You Were Blooming",
        category: ["growth", "healing", "self-love"],
        mood: ["anxious", "hopeful"],
        month: [3, 6, 9, 12],
        realExample: { en: "Your friend got married at 25, got promoted at 28. You're still figuring things out. That's okay. Everyone's timeline is different. Stop comparing your chapter 1 to someone else's chapter 20.", hi: "आपकी दोस्त 25 में शादी, 28 में promotion। आप अभी समझ रहे हैं। यह ठीक है। सबकी timeline अलग है। अपना chapter 1 किसी के chapter 20 से मत तुलना करो।", bn: "আপনার বন্ধু ২৫-এ বিয়ে, ২৮-এ promotion। আপনি এখনো বুঝছেন। এটা ঠিক আছে। সবার timeline আলাদা। আপনার chapter 1 কারো chapter 20 এর সাথে তুলনা করবেন না।" }
      },
      {
        id: 57,
        text: { en: "You are allowed to be both a masterpiece and a work in progress simultaneously.", hi: "आप एक साथ एक उत्कृष्ट कृति और प्रगति पर काम दोनों हो सकते हैं।", bn: "আপনি একই সাথে একটি মাস্টারপিস এবং একটি চলমান কাজ হতে পারেন।" },
        author: "Morgan Harper Nichols", book: "All Along You Were Blooming",
        category: ["self-love", "growth", "healing"],
        mood: ["hopeful", "sad"],
        month: [1, 5, 9],
        realExample: { en: "You don't need to be 'finished' to be worthy. A painting in progress is still beautiful. You can celebrate how far you've come while still working on where you're going.", hi: "'पूरा' होना ज़रूरी नहीं योग्य होने के लिए। बन रही पेंटिंग भी सुंदर है। आप कहाँ पहुँचे इसका जश्न मनाएं और कहाँ जा रहे हैं इस पर काम करें।", bn: "'সম্পূর্ণ' হওয়ার দরকার নেই যোগ্য হতে। তৈরি হচ্ছে এমন পেইন্টিংও সুন্দর। কতদূর এসেছেন তা উদযাপন করুন এবং কোথায় যাচ্ছেন তার উপর কাজ করুন।" }
      },
      // ===== ADDITIONAL WISDOM =====
      {
        id: 58,
        text: { en: "The only person you should try to be better than is the person you were yesterday.", hi: "जिस एकमात्र व्यक्ति से बेहतर बनने की कोशिश करनी चाहिए वो कल का आप हैं।", bn: "যে একমাত্র ব্যক্তির চেয়ে ভালো হওয়ার চেষ্টা করা উচিত সে হলো গতকালের আপনি।" },
        author: "Unknown", book: "Ancient Wisdom",
        category: ["growth", "self-love", "discipline"],
        mood: ["hopeful"],
        month: [1, 3, 5, 7, 9, 11],
        realExample: { en: "Comparison is the thief of joy. The only fair comparison is you versus you. Are you kinder than yesterday? More aware? More honest? That's the only scoreboard that matters.", hi: "तुलना खुशी की चोर है। एकमात्र उचित तुलना आप बनाम आप है।", bn: "তুলনা আনন্দের চোর। একমাত্র সুষ্ঠু তুলনা আপনি বনাম আপনি।" }
      },
      {
        id: 59,
        text: { en: "You are under no obligation to be the same person you were five minutes ago.", hi: "आप पाँच मिनट पहले जो थे वही बने रहने के लिए बाध्य नहीं हैं।", bn: "আপনি পাঁচ মিনিট আগে যা ছিলেন তাই থাকতে বাধ্য নন।" },
        author: "Alan Watts", book: "The Book",
        category: ["growth", "courage", "letting-go"],
        mood: ["hopeful", "anxious"],
        month: [2, 4, 6, 8, 10, 12],
        realExample: { en: "You said something you regret? You made a bad choice? Great — you recognized it. Now make a better one. Growth isn't about being perfect. It's about being willing to change, even in the middle of a sentence.", hi: "आपने कुछ ऐसा कहा जिसका पछतावा है? बुरा चुनाव किया? बढ़िया — आपने पहचाना। अब बेहतर करें।", bn: "এমন কিছু বললেন যার জন্য অনুতাপ? খারাপ সিদ্ধান্ত নিলেন? দারুণ — আপনি চিনতে পেরেছেন। এখন ভালো করুন।" }
      },
      {
        id: 60,
        text: { en: "When someone shows you who they are, believe them the first time.", hi: "जब कोई आपको दिखाए कि वो कैसे हैं, पहली बार ही विश्वास कर लो।", bn: "যখন কেউ আপনাকে দেখায় তারা কেমন, প্রথমবারেই বিশ্বাস করুন।" },
        author: "Maya Angelou", book: "Collected Wisdom",
        category: ["boundaries", "self-respect", "self-love"],
        mood: ["disrespected", "heartbreak"],
        month: [1, 3, 5, 7, 9, 11],
        realExample: { en: "He cancelled plans three times, forgot your birthday, and made you feel like an option. Those aren't 'mistakes' — that's a pattern. When someone consistently shows you they don't value you, stop making excuses for them. Believe their actions, not their apologies.", hi: "उसने तीन बार plans cancel किए, birthday भूल गया, आपको option जैसा महसूस कराया। ये 'गलतियाँ' नहीं — pattern है। जब कोई बार-बार दिखाए कि आपकी कदर नहीं, उनके बहाने बनाना बंद करें।", bn: "সে তিনবার পরিকল্পনা বাতিল করল, জন্মদিন ভুলে গেল, আপনাকে option মনে করাল। এগুলো 'ভুল' নয় — pattern। যখন কেউ বারবার দেখায় আপনার মূল্য দেয় না, তাদের জন্য অজুহাত তৈরি করা বন্ধ করুন।" }
      },
      {
        id: 61,
        text: { en: "Boundaries are not walls to keep people out. They are fences with gates — you decide who gets the key.", hi: "सीमाएं लोगों को बाहर रखने की दीवारें नहीं हैं। ये दरवाज़े वाली बाड़ हैं — आप तय करें किसे चाबी दें।", bn: "সীমানা মানুষকে বাইরে রাখার দেয়াল নয়। এগুলো গেটসহ বেড়া — আপনি ঠিক করুন কাকে চাবি দেবেন।" },
        author: "Unknown", book: "Modern Wisdom",
        category: ["boundaries", "self-respect", "self-love"],
        mood: ["disrespected", "angry"],
        month: [2, 4, 6, 8, 10, 12],
        realExample: { en: "Setting boundaries doesn't make you mean. It makes you healthy. 'I can't take calls after 9 PM.' 'I need weekends for myself.' 'I don't discuss my salary.' These are not rude statements — they are self-preservation.", hi: "सीमाएं तय करना आपको बुरा नहीं बनाता — स्वस्थ बनाता है। 'रात 9 के बाद calls नहीं।' 'वीकेंड मेरे हैं।' ये कठोर नहीं — आत्म-संरक्षण है।", bn: "সীমানা নির্ধারণ আপনাকে খারাপ করে না — সুস্থ করে। 'রাত ৯টার পর কল নেই।' 'উইকেন্ড আমার।' এগুলো কঠোর নয় — আত্ম-সংরক্ষণ।" }
      },
      {
        id: 62,
        text: { en: "Your value doesn't decrease based on someone's inability to see your worth.", hi: "किसी की आपकी कीमत न देख पाने की अक्षमता से आपका मूल्य कम नहीं होता।", bn: "কারো আপনার মূল্য দেখতে না পারার অক্ষমতায় আপনার মূল্য কমে না।" },
        author: "Unknown", book: "Timeless Wisdom",
        category: ["self-respect", "self-love", "strength"],
        mood: ["disrespected", "sad", "lonely"],
        month: [1, 3, 5, 7, 9, 11],
        realExample: { en: "A diamond doesn't lose its value just because someone chose to pick up a stone instead. If someone can't see what you're worth, that's their loss — not your flaw.", hi: "एक हीरा अपनी कीमत नहीं खोता सिर्फ इसलिए कि किसी ने पत्थर उठा लिया। अगर कोई आपकी कीमत नहीं देख सकता, ये उनका नुकसान है — आपकी कमी नहीं।", bn: "একটি হীরা তার মূল্য হারায় না শুধু কারণ কেউ পাথর তুলে নিল। কেউ আপনার মূল্য দেখতে না পারলে, এটা তাদের ক্ষতি — আপনার ত্রুটি নয়।" }
      }
    ];

    // ===== JOKES DATABASE =====
    this.jokes = [
      { id: 1, text: { en: "Why don't scientists trust atoms? Because they make up everything! Just like your overthinking makes up problems that don't exist. 😄", hi: "वैज्ञानिक atoms पर भरोसा क्यों नहीं करते? क्योंकि वो सब कुछ बना देते हैं! बिल्कुल आपकी overthinking की तरह जो ऐसी problems बनाती है जो हैं ही नहीं। 😄", bn: "বিজ্ঞানীরা atoms বিশ্বাস করে না কেন? কারণ তারা সবকিছু তৈরি করে! ঠিক আপনার overthinking এর মতো যা এমন সমস্যা তৈরি করে যা নেই-ই। 😄" }, type: "pun" },
      { id: 2, text: { en: "I told my therapist about my fear of random letters. She said 'You're going to be OK.' I said 'OH NO!' 😂", hi: "मैंने therapist को बताया कि मुझे random अक्षरों से डर लगता है। उसने कहा 'तुम OK होगे।' मैंने कहा 'OH NO!' 😂", bn: "আমি therapist-কে বললাম random অক্ষরে ভয় লাগে। সে বলল 'তুমি OK হবে।' আমি বললাম 'OH NO!' 😂" }, type: "pun" },
      { id: 3, text: { en: "My bed and I have a special relationship. We're 'sheet' together every night! 😴💕 Remember — rest is productive too.", hi: "मेरे और मेरे बिस्तर का खास रिश्ता है। हम हर रात 'sheet' में होते हैं! 😴💕 याद रखें — आराम भी उत्पादक है।", bn: "আমার এবং আমার বিছানার বিশেষ সম্পর্ক। আমরা প্রতি রাতে 'sheet'-এ থাকি! 😴💕 মনে রাখবেন — বিশ্রামও উৎপাদনশীল।" }, type: "wholesome" },
      { id: 4, text: { en: "Why did the scarecrow win an award? Because he was outstanding in his field! Just like you — you're outstanding even when you don't realize it. 🏆", hi: "बिजूका को पुरस्कार क्यों मिला? क्योंकि वो अपने field में outstanding था! बिल्कुल आपकी तरह — जब आपको खुद एहसास नहीं तब भी। 🏆", bn: "কাকতাড়ুয়া পুরস্কার পেল কেন? কারণ সে তার field-এ outstanding ছিল! ঠিক আপনার মতো — যখন নিজেও বোঝেন না তখনও। 🏆" }, type: "motivational-funny" },
      { id: 5, text: { en: "I'm reading a book about anti-gravity. It's impossible to put down! 📚 Speaking of which — put down your worries too. They're heavier than any book.", hi: "मैं anti-gravity पर किताब पढ़ रहा हूँ। रखना ही मुश्किल है! 📚 बात निकली है तो — अपनी चिंताएं भी रख दो। वो किसी किताब से भारी हैं।", bn: "আমি anti-gravity নিয়ে বই পড়ছি। রাখাই অসম্ভব! 📚 যখন কথা উঠলই — আপনার চিন্তাগুলোও নামিয়ে রাখুন। এগুলো যেকোনো বইয়ের চেয়ে ভারী।" }, type: "pun" },
      { id: 6, text: { en: "What did the ocean say to the shore? Nothing — it just waved! 🌊 Sometimes the best response is a simple wave, not a tsunami of overthinking.", hi: "समुद्र ने किनारे से क्या कहा? कुछ नहीं — बस wave किया! 🌊 कभी-कभी सबसे अच्छा जवाब एक साधारण wave है, overthinking का सुनामी नहीं।", bn: "সমুদ্র তীরকে কী বলল? কিছু না — শুধু wave করল! 🌊 কখনো কখনো সেরা উত্তর একটি সাধারণ wave, overthinking এর সুনামি নয়।" }, type: "pun" },
      { id: 7, text: { en: "A wise person once said: 'Follow your heart.' My heart led me to the fridge. No regrets. 🍕❤️ Self-care comes in all forms!", hi: "एक बुद्धिमान इंसान ने कहा: 'दिल की सुनो।' दिल ने fridge की ओर ले गया। कोई पछतावा नहीं। 🍕❤️", bn: "একজন জ্ঞানী বলেছিল: 'হৃদয়ের কথা শোনো।' হৃদয় আমাকে ফ্রিজে নিয়ে গেল। কোনো আফসোস নেই। 🍕❤️" }, type: "wholesome" },
      { id: 8, text: { en: "They say laughter is the best medicine. Your face must be curing the world! 😊 Just kidding — but seriously, your smile has more power than you know.", hi: "कहते हैं हँसी सबसे अच्छी दवा है। आपका चेहरा दुनिया ठीक कर रहा होगा! 😊 मज़ाक है — लेकिन सच में, आपकी मुस्कान में आप जितनी सोचते हैं उससे ज़्यादा ताकत है।", bn: "বলে হাসি সেরা ওষুধ। আপনার মুখ পৃথিবী সারিয়ে দিচ্ছে! 😊 মজা করছি — কিন্তু সত্যিই, আপনার হাসিতে আপনার ধারণার চেয়ে বেশি শক্তি আছে।" }, type: "motivational-funny" },
      { id: 9, text: { en: "Why did the student eat his homework? Because his teacher told him it was a piece of cake! 🎂 If only life problems were that delicious to solve.", hi: "छात्र ने homework क्यों खाया? क्योंकि teacher ने कहा ये piece of cake है! 🎂 काश ज़िंदगी की problems भी इतनी स्वादिष्ट होतीं।", bn: "ছাত্র হোমওয়ার্ক খেয়ে ফেলল কেন? কারণ শিক্ষক বলেছিল এটা piece of cake! 🎂 জীবনের সমস্যাও যদি এত সুস্বাদু হতো।" }, type: "pun" },
      { id: 10, text: { en: "I used to play piano by ear, but now I use my hands. 🎹 Growth is about finding better methods, even if the old ones were... creative.", hi: "मैं कान से piano बजाता था, अब हाथों से बजाता हूँ। 🎹 विकास बेहतर तरीके खोजना है।", bn: "আমি কান দিয়ে পিয়ানো বাজাতাম, এখন হাত দিয়ে বাজাই। 🎹 বৃদ্ধি হলো ভালো পদ্ধতি খুঁজে পাওয়া।" }, type: "pun" },
      { id: 11, text: { en: "I asked the gym instructor if he could teach me to do the splits. He said: 'How flexible are you?' I said: 'I can't make Tuesdays.' 🏋️😂", hi: "मैंने gym instructor से splits सिखाने को कहा। उसने पूछा: 'कितने flexible हो?' मैंने कहा: 'मंगलवार नहीं आ सकता।' 🏋️😂", bn: "আমি gym instructor-কে splits শেখাতে বললাম। সে জিজ্ঞেস করল: 'কতটা flexible?' আমি বললাম: 'মঙ্গলবার পারি না।' 🏋️😂" }, type: "pun" },
      { id: 12, text: { en: "Remember: even your phone needs to be charged. It's okay to take a break. 🔋 You're not lazy. You're recharging for something amazing.", hi: "याद रखें: आपके फ़ोन को भी charge चाहिए। break लेना ठीक है। 🔋 आप आलसी नहीं हैं — किसी अद्भुत चीज़ के लिए recharge हो रहे हैं।", bn: "মনে রাখুন: আপনার ফোনেরও charge দরকার। বিরতি নেওয়া ঠিক আছে। 🔋 আপনি অলস নন — কিছু অসাধারণের জন্য recharge হচ্ছেন।" }, type: "wholesome" },
      { id: 13, text: { en: "Plot twist: The person who hurt you is eating well and sleeping fine. So stop losing sleep over them and go eat something nice! 🍕😤", hi: "Plot twist: जिसने आपको चोट दी वो अच्छा खा-सो रहा है। तो उनके लिए नींद खोना बंद करें और कुछ अच्छा खाएं! 🍕😤", bn: "Plot twist: যে আপনাকে কষ্ট দিয়েছে সে ভালো খাচ্ছে আর ঘুমাচ্ছে। তো তাদের জন্য ঘুম হারানো বন্ধ করুন এবং কিছু ভালো খান! 🍕😤" }, type: "motivational-funny" },
      { id: 14, text: { en: "Why don't we ever tell secrets on a farm? Because the potatoes have eyes, the corn has ears, and the beans stalk! 🌽👀 Your secrets are safe with me though.", hi: "खेत में राज़ क्यों नहीं बताते? क्योंकि आलू की आँखें हैं, मक्का के कान, और beans stalk करती हैं! 🌽👀 लेकिन आपके राज़ मेरे पास सुरक्षित हैं।", bn: "খামারে গোপন কথা বলি না কেন? কারণ আলুর চোখ আছে, ভুট্টার কান, আর বিনস stalk করে! 🌽👀 তবে আপনার গোপনীয়তা আমার কাছে নিরাপদ।" }, type: "pun" },
      { id: 15, text: { en: "Fun fact: You've survived 100% of your worst days. That's a pretty impressive track record! 🏅 Keep going, champion.", hi: "मज़ेदार तथ्य: आपने अपने 100% सबसे बुरे दिनों से बचे हैं। काफ़ी प्रभावशाली रिकॉर्ड है! 🏅 आगे बढ़ते रहो, चैंपियन।", bn: "মজার তথ্য: আপনি আপনার ১০০% সবচেয়ে খারাপ দিন থেকে বেঁচে আছেন। বেশ চমৎকার রেকর্ড! 🏅 চালিয়ে যান, চ্যাম্পিয়ন।" }, type: "motivational-funny" }
    ];
  }

  getQuotesByCategory(category) {
    return this.quotes.filter(q => q.category.includes(category));
  }

  getQuotesByAuthor(author) {
    return this.quotes.filter(q => q.author.toLowerCase().includes(author.toLowerCase()));
  }

  getQuotesByBook(book) {
    return this.quotes.filter(q => q.book.toLowerCase().includes(book.toLowerCase()));
  }

  getQuotesByMood(mood) {
    return this.quotes.filter(q => q.mood.includes(mood));
  }

  getRandomQuote(filters = {}) {
    let pool = [...this.quotes];
    if (filters.category) pool = pool.filter(q => q.category.includes(filters.category));
    if (filters.mood) pool = pool.filter(q => q.mood.includes(filters.mood));
    if (filters.author) pool = pool.filter(q => q.author.toLowerCase().includes(filters.author.toLowerCase()));
    if (pool.length === 0) pool = [...this.quotes];
    return pool[Math.floor(Math.random() * pool.length)];
  }

  getMonthlyQuotes() {
    const currentMonth = new Date().getMonth() + 1;
    return this.quotes.filter(q => q.month.includes(currentMonth));
  }

  getJoke(language = 'en') {
    const joke = this.jokes[Math.floor(Math.random() * this.jokes.length)];
    return { ...joke, displayText: joke.text[language] || joke.text.en };
  }

  getAllCategories() {
    const cats = new Set();
    this.quotes.forEach(q => q.category.forEach(c => cats.add(c)));
    return [...cats].sort();
  }

  getAllAuthors() {
    return [...new Set(this.quotes.map(q => q.author))].sort();
  }

  getAllBooks() {
    return [...new Set(this.quotes.map(q => q.book))].sort();
  }

  searchQuotes(query) {
    const q = query.toLowerCase();
    return this.quotes.filter(quote =>
      quote.text.en.toLowerCase().includes(q) ||
      quote.text.hi.includes(q) ||
      quote.text.bn.includes(q) ||
      quote.author.toLowerCase().includes(q) ||
      quote.book.toLowerCase().includes(q)
    );
  }
}

window.QuotesDB = QuotesDB;
