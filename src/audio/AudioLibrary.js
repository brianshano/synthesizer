import Tone from 'tone';

class AudioLibrary {
  createOscillator(envelope, frequency, type, volume) {
    return new Tone.Oscillator({
      frequency,
      type,
      volume
    }).connect(envelope);
  }
  createFreeVerb(roomSize = 0.9, dampening = 3000) {
    return new Tone.Freeverb({
      roomSize,
      dampening
    }).toMaster();
  }
  createChorus(frequency = 1, delayTime = 1.5, depth = 0.8, feedback = 0.1, type = 'sine', spread = 280) {
    return new Tone.Chorus({
      frequency,
      delayTime,
      depth,
      feedback,
      type,
      spread
    }).toMaster();
  }
}

export default AudioLibrary;
