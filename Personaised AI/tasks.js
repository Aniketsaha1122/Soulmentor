// ============================================
// SoulMentor — Tasks Manager
// Daily growth tasks, streaks, and suggestions
// ============================================

class TasksManager {
  constructor(storageManager) {
    this.storage = storageManager;
    this.tasksKey = 'tasks';
    this.stateKey = 'tasks_state';
  }

  getTasks() {
    return this.storage.get(this.tasksKey, []);
  }

  getStreak() {
    const state = this.storage.get(this.stateKey, { streak: 0, lastCompletedDate: null });
    this.verifyStreak(state);
    return state.streak;
  }

  addTask(text, category = 'growth') {
    const tasks = this.getTasks();
    const newTask = {
      id: Date.now().toString(),
      text,
      category,
      completed: false,
      createdAt: new Date().toISOString(),
      completedAt: null
    };
    tasks.push(newTask);
    this.storage.set(this.tasksKey, tasks);
    return newTask;
  }

  deleteTask(id) {
    const tasks = this.getTasks();
    const filtered = tasks.filter(t => t.id !== id);
    this.storage.set(this.tasksKey, filtered);
    return filtered;
  }

  toggleTask(id) {
    const tasks = this.getTasks();
    let updatedTask = null;
    
    const updated = tasks.map(t => {
      if (t.id === id) {
        const completed = !t.completed;
        updatedTask = {
          ...t,
          completed,
          completedAt: completed ? new Date().toISOString() : null
        };
        return updatedTask;
      }
      return t;
    });

    this.storage.set(this.tasksKey, updated);

    if (updatedTask && updatedTask.completed) {
      this.updateStreak();
    } else {
      this.recalculateStreak(updated);
    }

    return updated;
  }

  updateStreak() {
    const state = this.storage.get(this.stateKey, { streak: 0, lastCompletedDate: null });
    const today = new Date().toDateString();
    
    if (state.lastCompletedDate === today) {
      // Already completed a task today, streak is maintained but not incremented
      return;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();

    if (state.lastCompletedDate === yesterdayStr || state.streak === 0) {
      state.streak += 1;
    } else {
      // Streak broken, reset to 1 since we just completed a task today
      state.streak = 1;
    }

    state.lastCompletedDate = today;
    this.storage.set(this.stateKey, state);
  }

  recalculateStreak(tasks) {
    const completedTasks = tasks
      .filter(t => t.completed && t.completedAt)
      .sort((a, b) => new Date(a.completedAt) - new Date(b.completedAt));

    const state = { streak: 0, lastCompletedDate: null };

    if (completedTasks.length === 0) {
      this.storage.set(this.stateKey, state);
      return;
    }

    // Group completions by date string
    const completionDates = Array.from(new Set(
      completedTasks.map(t => new Date(t.completedAt).toDateString())
    ));

    // Sort completion dates chronologically
    const sortedDates = completionDates.map(d => new Date(d)).sort((a, b) => a - b);
    
    let currentStreak = 0;
    let lastDate = null;

    for (let i = 0; i < sortedDates.length; i++) {
      const currentDate = sortedDates[i];
      const currentDateStr = currentDate.toDateString();

      if (lastDate === null) {
        currentStreak = 1;
      } else {
        const diffTime = Math.abs(currentDate - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          currentStreak += 1;
        } else if (diffDays > 1) {
          currentStreak = 1;
        }
      }
      lastDate = currentDate;
    }

    // Verify if streak is broken because today/yesterday has no completion
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const hasCompletedTodayOrYesterday = completionDates.includes(today.toDateString()) || 
                                          completionDates.includes(yesterday.toDateString());

    if (!hasCompletedTodayOrYesterday) {
      currentStreak = 0;
      lastDate = null;
    }

    state.streak = currentStreak;
    state.lastCompletedDate = lastDate ? lastDate.toDateString() : null;
    this.storage.set(this.stateKey, state);
  }

  verifyStreak(state) {
    if (state.streak === 0 || !state.lastCompletedDate) return;

    const last = new Date(state.lastCompletedDate);
    const today = new Date();
    
    // Clear time parts
    last.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = Math.abs(today - last);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 1) {
      // Streak broken, reset
      state.streak = 0;
      state.lastCompletedDate = null;
      this.storage.set(this.stateKey, state);
    }
  }
}

window.TasksManager = TasksManager;
