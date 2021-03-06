import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { startNote, stopNote } from '../../redux/modules/Synthesizer';
import Oscillator from '../oscillator/Oscillator';
import Tone from 'tone';
import Keyboard from '../keyboard/Keyboard';
// import './Synthesizer.scss';
require('./Synthesizer.scss');

class Synthesizer extends React.Component {
  constructor(props) {
    super(props);
    this.freeverb = new Tone.Freeverb({
      roomSize: 0.9,
      dampening: 3000
    }).toMaster();
    this.chorus = new Tone.Chorus({
      frequency: 1,
      delayTime: 1.5,
      depth: 0.8,
      feedback: 0.01,
      type: 'sine',
      spread: 280
    }).toMaster();
    this.envelope = new Tone.AmplitudeEnvelope({
      attack: 0.1,
      decay: 0.2,
      sustain: 1.0,
      release: 0.8
    }).toMaster().connect(this.freeverb).connect(this.chorus);


    this.startNote = this.startNote.bind(this);
    this.stopNote = this.stopNote.bind(this);
  }
  updateDetune() {
    console.log('detune');
  }
  updateVolume() {
    console.log('volume');
  }
  updateWaveForm() {
    console.log('wave form');
  }
  startNote(note) {
    this.props.dispatch(startNote(note));
    this.envelope.triggerAttack();
  }
  stopNote(note) {
    this.props.dispatch(startNote(false));
    this.envelope.triggerRelease();
  }
  render() {
    return (
      <section className="synth">
        <Oscillator
          frequency={440}
          detune={ this.props.detuneAmount }
          waveform={ this.props.waveFormType }
          volume={ this.props.volumeAmount }
          type={ 'sawtooth' }
          envelope={this.envelope}
          notePlaying={this.props.notePlaying}>
          <section></section>
        </Oscillator>
        <Keyboard onKeyDownCallback={this.startNote} onKeyUpCallback={this.stopNote} />
      </section>
    );
  }
}

Synthesizer.defaultProps = {
  frequencyAmount: 440,
  detuneAmount: 0,
  volumeAmount: -20,
  waveFormType: 1
}
const stateToProps = (state) => {
  return {
    notePlaying: state.Synthesizer.notePlaying,
    currentNote: state.Keys.currentNote
  }
};

export default connect(stateToProps)(Synthesizer);
