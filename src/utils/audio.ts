// Web Audio API Music Box Synthesizer
// Play a sweet lullaby / birthday melody using synthetic musical-box chimes.

class MusicBox {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private nextNoteTimeout: number | null = null;
  private currentNoteIndex: number = 0;

  // Melody: [frequency, duration in beats]
  private melody: [number, number][] = [
    [261.63, 0.75], // C4
    [261.63, 0.25], // C4
    [293.66, 1.0],  // D4
    [261.63, 1.0],  // C4
    [349.23, 1.0],  // F4
    [329.63, 2.0],  // E4
    
    [261.63, 0.75], // C4
    [261.63, 0.25], // C4
    [293.66, 1.0],  // D4
    [261.63, 1.0],  // C4
    [392.00, 1.0],  // G4
    [349.23, 2.0],  // F4
    
    [261.63, 0.75], // C4
    [261.63, 0.25], // C4
    [523.25, 1.0],  // C5
    [440.00, 1.0],  // A4
    [349.23, 1.0],  // F4
    [329.63, 1.0],  // E4
    [293.66, 2.0],  // D4
    
    [466.16, 0.75], // A#4
    [466.16, 0.25], // A#4
    [440.00, 1.0],  // A4
    [349.23, 1.0],  // F4
    [392.00, 1.0],  // G4
    [349.23, 2.5],  // F4
    
    [0, 1.0],       // Rest
  ];

  // Accompaniment track (adds warmth with low arpeggiated bass chimes)
  private accompaniment: [number, number][] = [
    [130.81, 1.0], // C3
    [196.00, 1.0], // G3
    [329.63, 1.0], // E4
    [130.81, 1.0], // C3
    [174.61, 1.0], // F3
    [349.23, 1.0], // F4
    
    [130.81, 1.0], // C3
    [196.00, 1.0], // G3
    [392.00, 1.0], // G4
    [130.81, 1.0], // C3
    [174.61, 1.0], // F3
    [349.23, 1.0], // F4
  ];

  private initContext() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  private playTone(freq: number, startTime: number, duration: number, volume: number = 0.15) {
    if (!this.ctx || freq <= 0) return;

    // Create oscillator and gain node for physical modeling of a chime
    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    // Soft music-box chime spectrum: use a triangle or sine wave with some overtone
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, startTime);

    // Create an overtone for that magical music box sparkle
    const overtone = this.ctx.createOscillator();
    const overtoneGain = this.ctx.createGain();
    overtone.type = "sine";
    overtone.frequency.setValueAtTime(freq * 2, startTime);
    overtoneGain.gain.setValueAtTime(volume * 0.25, startTime);

    // Envelope: Instant attack, long exponential decay for ringing sound
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 1.5);

    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    // Route audio graph
    osc.connect(gainNode);
    overtone.connect(overtoneGain);
    
    gainNode.connect(this.ctx.destination);
    overtoneGain.connect(this.ctx.destination);

    // Start & Stop
    osc.start(startTime);
    osc.stop(startTime + duration * 1.5);

    overtone.start(startTime);
    overtone.stop(startTime + duration * 1.5);
  }

  public start() {
    this.initContext();
    if (this.isPlaying) return;
    
    this.isPlaying = true;
    this.currentNoteIndex = 0;
    this.scheduler();
  }

  public stop() {
    this.isPlaying = false;
    if (this.nextNoteTimeout) {
      clearTimeout(this.nextNoteTimeout);
      this.nextNoteTimeout = null;
    }
  }

  private scheduler() {
    if (!this.isPlaying || !this.ctx) return;

    const tempo = 110; // Beats per minute
    const beatDuration = 60 / tempo; // Duration of one beat in seconds

    const currentNote = this.melody[this.currentNoteIndex];
    const freq = currentNote[0];
    const durationBeats = currentNote[1];
    const durationSeconds = durationBeats * beatDuration;

    const now = this.ctx.currentTime;
    
    // Play melody chime
    this.playTone(freq, now, durationSeconds, 0.18);

    // Play bass accompaniment occasionally for harmony
    if (this.currentNoteIndex % 3 === 0) {
      const accIndex = Math.floor(this.currentNoteIndex / 3) % this.accompaniment.length;
      const accNote = this.accompaniment[accIndex];
      this.playTone(accNote[0], now, durationSeconds * 2, 0.08);
    }

    // Schedule next note
    this.currentNoteIndex = (this.currentNoteIndex + 1) % this.melody.length;
    this.nextNoteTimeout = window.setTimeout(() => {
      this.scheduler();
    }, durationSeconds * 1000);
  }

  public toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying() {
    return this.isPlaying;
  }
}

export const musicBox = new MusicBox();
