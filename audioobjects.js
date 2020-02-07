import React from 'react';

export class Step
{
  const oscillator;
  const intervalToPlaySoundFor = {this.props.intervalToPlaySoundFor};
  constructor(props)
  {
    super(props);
    this.graphNodeID = {this.props.graphNodeID};
    this.setState({audioContext: this.props.audioContext});

  }

  generateSoundSource()
  {
    oscillator = this.state.audioContext.createOscillator();
    oscillator.type = {this.props.oscType};
  }

  connectSoundSource(oscillator)
  {
      oscillator.connect(audioContext.destination);
  }
}
