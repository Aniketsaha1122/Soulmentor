// ============================================
// SoulMentor — Reminders Manager
// Daily reminders with HTML5 Notification support
// ============================================

class RemindersManager {
  constructor(storageManager) {
    this.storage = storageManager;
    this.remindersKey = 'reminders';
    this.lastFiredKey = 'reminders_last_fired'; // Keep track of when reminders last fired
    this.checkIntervalId = null;

    this.initNotifications();
  }

  initNotifications() {
    if ('Notification' in window) {
      if (Notification.permission === 'default') {
        // We will request permission when the user enables notifications in UI
      }
    }
  }

  async requestPermission() {
    if (!('Notification' in window)) return false;
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  hasPermission() {
    if (!('Notification' in window)) return false;
    return Notification.permission === 'granted';
  }

  getReminders() {
    return this.storage.get(this.remindersKey, []);
  }

  addReminder(time, text, enabled = true) {
    // time should be in "HH:MM" format
    const reminders = this.getReminders();
    const newReminder = {
      id: Date.now().toString(),
      time,
      text,
      enabled,
      createdAt: new Date().toISOString()
    };
    reminders.push(newReminder);
    this.storage.set(this.remindersKey, reminders);
    return newReminder;
  }

  deleteReminder(id) {
    const reminders = this.getReminders();
    const filtered = reminders.filter(r => r.id !== id);
    this.storage.set(this.remindersKey, filtered);
    return filtered;
  }

  toggleReminder(id) {
    const reminders = this.getReminders();
    const updated = reminders.map(r => {
      if (r.id === id) {
        return { ...r, enabled: !r.enabled };
      }
      return r;
    });
    this.storage.set(this.remindersKey, updated);
    return updated;
  }

  startChecking(onTriggerCallback) {
    if (this.checkIntervalId) clearInterval(this.checkIntervalId);
    
    // Check every 30 seconds
    this.checkIntervalId = setInterval(() => {
      this.checkReminders(onTriggerCallback);
    }, 30000);
    
    // Also run immediately
    this.checkReminders(onTriggerCallback);
  }

  stopChecking() {
    if (this.checkIntervalId) {
      clearInterval(this.checkIntervalId);
      this.checkIntervalId = null;
    }
  }

  checkReminders(onTriggerCallback) {
    const now = new Date();
    const currentHour = now.getHours().toString().padStart(2, '0');
    const currentMinute = now.getMinutes().toString().padStart(2, '0');
    const currentTimeStr = `${currentHour}:${currentMinute}`;
    const todayStr = now.toDateString();

    const reminders = this.getReminders();
    const lastFired = this.storage.get(this.lastFiredKey, {});

    reminders.forEach(reminder => {
      if (!reminder.enabled) return;

      if (reminder.time === currentTimeStr) {
        const lastFiredTime = lastFired[reminder.id];
        
        // Trigger if it hasn't fired today yet
        if (lastFiredTime !== todayStr) {
          lastFired[reminder.id] = todayStr;
          this.storage.set(this.lastFiredKey, lastFired);
          this.triggerReminder(reminder, onTriggerCallback);
        }
      }
    });
  }

  triggerReminder(reminder, callback) {
    // 1. Trigger callback for in-app UI notifications
    if (callback) {
      callback(reminder);
    }

    // 2. Trigger system notification if permitted
    if (this.hasPermission()) {
      try {
        new Notification('SoulMentor Reminder 💫', {
          body: reminder.text,
          icon: '/favicon.ico' // fallback
        });
      } catch (e) {
        console.warn('RemindersManager: Failed to show system notification', e);
      }
    }
  }
}

window.RemindersManager = RemindersManager;
