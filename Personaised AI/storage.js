// ============================================
// SoulMentor — Storage Manager
// localStorage wrapper for all persistent data
// ============================================

class StorageManager {
  constructor(prefix = 'soulmentor_') {
    this.prefix = prefix;
  }

  _key(key) {
    return this.prefix + key;
  }

  set(key, value) {
    try {
      localStorage.setItem(this._key(key), JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn('StorageManager: Failed to save', key, e);
      return false;
    }
  }

  get(key, defaultValue = null) {
    try {
      const raw = localStorage.getItem(this._key(key));
      return raw !== null ? JSON.parse(raw) : defaultValue;
    } catch (e) {
      console.warn('StorageManager: Failed to read', key, e);
      return defaultValue;
    }
  }

  remove(key) {
    localStorage.removeItem(this._key(key));
  }

  clear() {
    const keys = Object.keys(localStorage).filter(k => k.startsWith(this.prefix));
    keys.forEach(k => localStorage.removeItem(k));
  }

  getAll() {
    const data = {};
    Object.keys(localStorage)
      .filter(k => k.startsWith(this.prefix))
      .forEach(k => {
        try {
          data[k.replace(this.prefix, '')] = JSON.parse(localStorage.getItem(k));
        } catch (e) {
          data[k.replace(this.prefix, '')] = localStorage.getItem(k);
        }
      });
    return data;
  }

  addToArray(key, item) {
    const arr = this.get(key, []);
    arr.push(item);
    this.set(key, arr);
    return arr;
  }

  removeFromArray(key, predicate) {
    const arr = this.get(key, []);
    const filtered = arr.filter((item, i) => !predicate(item, i));
    this.set(key, filtered);
    return filtered;
  }

  updateInArray(key, predicate, updates) {
    const arr = this.get(key, []);
    const updated = arr.map(item => predicate(item) ? { ...item, ...updates } : item);
    this.set(key, updated);
    return updated;
  }

  exportData() {
    return JSON.stringify(this.getAll(), null, 2);
  }

  importData(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      Object.keys(data).forEach(key => this.set(key, data[key]));
      return true;
    } catch (e) {
      console.warn('StorageManager: Import failed', e);
      return false;
    }
  }

  cleanOldData(monthsToKeep = 6) {
    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() - monthsToKeep);
    ['journal', 'chat_history'].forEach(key => {
      const arr = this.get(key, []);
      const filtered = arr.filter(item => new Date(item.createdAt) > cutoff);
      this.set(key, filtered);
    });
  }
}

window.StorageManager = StorageManager;
