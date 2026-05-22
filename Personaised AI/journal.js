// ============================================
// SoulMentor — Journal Manager
// Problem history, mood trends, and growth insights
// ============================================

class JournalManager {
  constructor(storageManager) {
    this.storage = storageManager;
    this.journalKey = 'journal';
  }

  getEntries() {
    return this.storage.get(this.journalKey, []);
  }

  addEntry(problemText, responseData) {
    const entries = this.getEntries();
    const isGrowth = responseData.detectedMood === 'hopeful' || 
                     problemText.toLowerCase().includes('better') ||
                     problemText.toLowerCase().includes('happy') ||
                     problemText.toLowerCase().includes('growth') ||
                     problemText.toLowerCase().includes('solved') ||
                     problemText.toLowerCase().includes('streak');

    const newEntry = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      problemText,
      detectedMood: responseData.detectedMood,
      topics: responseData.topics || [],
      responseQuote: responseData.quote,
      responseAdvice: responseData.advice,
      isGrowthMoment: isGrowth
    };

    entries.unshift(newEntry); // Newest first
    this.storage.set(this.journalKey, entries);
    return newEntry;
  }

  deleteEntry(id) {
    const entries = this.getEntries();
    const filtered = entries.filter(e => e.id !== id);
    this.storage.set(this.journalKey, filtered);
    return filtered;
  }

  searchEntries(query = '', moodFilter = 'all', topicFilter = 'all') {
    const entries = this.getEntries();
    const lowerQuery = query.toLowerCase().trim();

    return entries.filter(e => {
      // 1. Text Search match
      const textMatch = !lowerQuery || 
                        e.problemText.toLowerCase().includes(lowerQuery) || 
                        (e.responseAdvice && e.responseAdvice.toLowerCase().includes(lowerQuery));

      // 2. Mood Filter match
      const moodMatch = moodFilter === 'all' || e.detectedMood === moodFilter;

      // 3. Topic Filter match
      const topicMatch = topicFilter === 'all' || (e.topics && e.topics.includes(topicFilter));

      return textMatch && moodMatch && topicMatch;
    });
  }

  getMoodTrends() {
    const entries = this.getEntries();
    const stats = {
      total: entries.length,
      happy: 0,
      sad: 0,
      angry: 0,
      anxious: 0,
      lonely: 0,
      disrespected: 0,
      neutral: 0
    };

    entries.forEach(e => {
      const mood = e.detectedMood || 'neutral';
      if (stats.hasOwnProperty(mood)) {
        stats[mood]++;
      } else {
        stats.neutral++;
      }
    });

    return stats;
  }

  getGrowthMoments() {
    const entries = this.getEntries();
    return entries.filter(e => e.isGrowthMoment);
  }
}

window.JournalManager = JournalManager;
