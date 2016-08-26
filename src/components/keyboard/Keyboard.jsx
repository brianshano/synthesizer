import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onKeyPress, onKeyLeave } from '../../redux/modules/Keys';
import { KEY_CONFIGURATION } from './config';
import Tone from 'tone';
require('./Keyboard.scss');

const Keyboard = (props) => {
  const mouseEnter = (note, event) => {
    event.preventDefault();
    if (!props.keyDown) return;
    props.dispatch(onKeyPress(note))
    if (props.onKeyDownCallback) props.onKeyDownCallback(note);
  }
  const mouseDown = (note, event) => {
    event.preventDefault();
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
  const activeKey = KEY_CONFIGURATION.indexOf(props.keyDown);
  const keys = KEY_CONFIGURATION.map((key, index) => {
    let active = activeKey === index;
    let classes = `key ${key.keyPosition}-key`;
    let top = key.keyPosition !== 'black' ? <div className='top'></div> : null;
    let style = {
      transform: 'translateY(' + (active ? 5 : 0) + 'px)'
    };
    return (
      <div
        className={classes}
        key={index}
        style={style}
        onMouseEnter={mouseEnter.bind(this, key.note)}
        onMouseLeave={mouseLeave}
        onMouseDown={mouseDown.bind(this, key.note)}
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
