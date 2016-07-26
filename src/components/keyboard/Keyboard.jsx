import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onKeyPress, onKeyLeave } from '../../redux/modules/Keys';
import Tone from 'tone';
require('./Keyboard.scss');

const notes = ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4'];
const keyVisual = ['left', 'black', 'center', 'black', 'right', 'left', 'black', 'center', 'black', 'center', 'black', 'right'];

const Keyboard = (props) => {
  const mouseEnter = (noteIndex, event) => {
    event.preventDefault();
    if (!props.keyDown) return;
    const note = notes[noteIndex];
    props.dispatch(onKeyPress(note))
    if (props.onKeyDownCallback) props.onKeyDownCallback(note);
  }
  const mouseDown = (noteIndex, event) => {
    event.preventDefault();
    const note = notes[noteIndex];
    props.dispatch(onKeyPress(note));
    if (props.onKeyDownCallback) props.onKeyDownCallback(note);
  }
  const mouseUp = (event) => {
    event.preventDefault();
    props.dispatch(onKeyLeave(props.currentNote));
    if (props.onKeyUpCallback) props.onKeyUpCallback(props.currentNote);
  }
  const mouseLeave = (event) => {
    event.preventDefault();
    if (!props.keyDown) return;
    props.dispatch(onKeyLeave(props.currentNote));
    if (props.onKeyUpCallback) props.onKeyUpCallback(props.currentNote);
  }
  const activeKey = notes.indexOf(props.keyDown);
  const keys = notes.map((item, index) => {
    const style = {
      transform: 'translateY(' + (active ? 5 : 0) + 'px)'
    };
    let active = activeKey === index;
    let classes = `key ${keyVisual[index]}-key`;
    let top = keyVisual[index] !== 'black' ? <div className='top'></div> : null;
    return (
      <div
        className={classes}
        key={index}
        style={style}
        onMouseEnter={mouseEnter.bind(this, index)}
        onMouseLeave={mouseLeave}
        onMouseDown={mouseDown.bind(this, index)}
        onMouseUp={mouseUp}>
        {top}
      </div>
    );
  });
  return (
    <div>{keys}</div>
  );
};

Keyboard.defaultProps = {
  type: 'volume',
  onKeyDownCallback: null,
  onKeyUpCallback: null
};

Keyboard.propTypes = {
  dispatch: PropTypes.func,
  type: PropTypes.string,
  onKeyDownCallback: PropTypes.func,
  onKeyUpCallback: PropTypes.func
};

const stateToProps = (state) => {
  return {
    keyDown: state.Keys.keyDown,
    currentNote: state.Keys.currentNote
  }
};

export default connect(stateToProps)(Keyboard);
