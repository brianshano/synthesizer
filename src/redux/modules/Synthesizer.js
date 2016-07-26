const SET_DETUNE = 'SET_DETUNE';
const SET_FREQUENCY = 'SET_FREQUENCY';
const SET_VOLUME = 'SET_VOLUME';
const SET_WAVE_FORM = 'SET_WAVE_FORM';
const START_NOTE = 'START_NOTE';
const STOP_NOTE = 'STOP_NOTE';

const initialState = {
  frequencyAmount: 440,
  detuneAmount: 0,
  volumnAmount: 0,
  waveFormType: 1
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_NOTE:
      return {
        ...state,
        notePlaying: action.note
      };
    case STOP_NOTE:
      return {
        ...state,
        notePlaying: action.note
      };
    default:
      return state;
  }
}
export function startNote(note) {
  return {
    type: START_NOTE,
    note
  }
}
export function stopNote(note) {
  return {
    type: STOP_NOTE,
    note
  }
}
export function setFrequency(frequencyAmount) {
  return {
    type: SET_FREQUENCY,
    frequencyAmount
  }
}
export function setDetune(detuneAmount) {
  return {
    type: SET_DETUNE,
    detuneAmount
  }
}
export function setVolumn(volumnAmount) {
  return {
    type: SET_VOLUME,
    volumnAmount
  }
}
export function setWaveForm(waveFormType) {
  return {
    type: SET_WAVE_FORM,
    waveFormType
  }
}
