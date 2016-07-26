import React from 'react';
import Tone from 'tone';

class Oscillator extends React.Component {
  constructor(props) {
    super(props);
    this.env = this.props.envelope;
    this.waves = ['sine','square','triangle','sawtooth'];
    // this.phaser = new Tone.Phaser({
    // 	frequency : 15,
    // 	octaves : 5,
    // 	baseFrequency : 1000
    // }).toMaster();
    this.tone = new Tone.Oscillator({
      frequency: this.props.frequency,
      type: this.waves[this.props.waveform],
      volume: this.props.volume
    }).connect(this.env).start();
  }
  componentWillReceiveProps(newProps) {
    this.tone.detune.value = newProps.detune;
    this.tone.volume.value = newProps.volume;
    this.tone.type = this.waves[newProps.waveform];
    if (newProps.notePlaying ) this.tone.frequency.value = newProps.notePlaying;
  }
  render() {
    return (
      <section className="oscillator">
        { this.props.children }
      </section>
    );
  }
}

export default Oscillator;
