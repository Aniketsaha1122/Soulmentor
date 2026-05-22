// ============================================
// SoulMentor — Voice System
// Speech-to-text & text-to-speech using Web Speech API
// ============================================

class VoiceSystem {
  constructor(i18n) {
    this.i18n = i18n;
    this.recognition = null;
    this.synthesis = window.speechSynthesis || null;
    this.isRecording = false;
    this.isSupported = false;
    this.onResult = null;
    this.onStart = null;
    this.onEnd = null;
    this.onError = null;

    this._initRecognition();
  }

  _initRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      this.isSupported = false;
      return;
    }
    this.isSupported = true;
    this.recognition = new SpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.interimResults = false;

    this.recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (this.onResult) this.onResult(transcript);
    };

    this.recognition.onstart = () => {
      this.isRecording = true;
      if (this.onStart) this.onStart();
    };

    this.recognition.onend = () => {
      this.isRecording = false;
      if (this.onEnd) this.onEnd();
    };

    this.recognition.onerror = (event) => {
      this.isRecording = false;
      if (this.onError) this.onError(event.error);
      if (this.onEnd) this.onEnd();
    };
  }

  _getLangCode() {
    const map = { en: 'en-US', hi: 'hi-IN', bn: 'bn-IN' };
    return map[this.i18n.getLanguage()] || 'en-US';
  }

  startRecording() {
    if (!this.isSupported || !this.recognition) return false;
    this.recognition.lang = this._getLangCode();
    try {
      this.recognition.start();
      return true;
    } catch (e) {
      console.warn('VoiceSystem: Could not start recording', e);
      return false;
    }
  }

  stopRecording() {
    if (!this.isSupported || !this.recognition) return;
    try {
      this.recognition.stop();
    } catch (e) {
      // ignore
    }
  }

  toggleRecording() {
    if (this.isRecording) {
      this.stopRecording();
    } else {
      this.startRecording();
    }
    return this.isRecording;
  }

  speak(text) {
    if (!this.synthesis) return;
    // Cancel any ongoing speech
    this.synthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = this._getLangCode();
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 0.8;

    // Try to find a suitable voice
    const voices = this.synthesis.getVoices();
    const langCode = this._getLangCode();
    const matchingVoice = voices.find(v => v.lang.startsWith(langCode.split('-')[0]));
    if (matchingVoice) utterance.voice = matchingVoice;

    this.synthesis.speak(utterance);
  }

  stopSpeaking() {
    if (this.synthesis) this.synthesis.cancel();
  }
}

window.VoiceSystem = VoiceSystem;
