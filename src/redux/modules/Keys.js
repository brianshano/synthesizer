const KEY_PRESS = 'KEY_PRESS';
const KEY_LEAVE = 'KEY_LEAVE';

const initialState = {
  keyDown: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case KEY_PRESS:
      return {
        ...state,
        keyDown: action.note,
        currentNote: action.note
      };
    case KEY_LEAVE:
      return {
        ...state,
        keyDown: false,
        currentNote: action.note
      };
    default:
      return state;
  }
}

export function onKeyPress(note) {
  return {
    type: KEY_PRESS,
    note
  }
}

export function onKeyLeave(note) {
  return {
    type: KEY_LEAVE,
    note
  }
}
