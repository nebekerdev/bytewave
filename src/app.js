import React from 'react';
import Step from './audioobjects.js'

function createGraphNode(uniqueIdentifier, communicateWithParentFunction) {
  return <TimeStepDisplayGraphNode class="graphNodeStyles" communicate = {this.props.communicateWithParentFunction} key={this.props.uniqueIdentifier}/>
}

class TimeStepDisplayGraph extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render () {
      const numberOfNodes = new Array(this.props.numberOfNodes);
      return <div id={ this.props.id }>
              {numberOfNodes.map((ea, i) => {
                return createGraphNode(i, this.props.communicate) })};
             </div>;
    }
  }
class TimeStepDisplayGraphNode extends React.Component
{

      constructor(props)
      {
        super(props);
        this.divWidth = React.createRef();
        this.interactionRequest = this.interactionRequest.bind(this);
      }
      interactionRequest(e)
      {
        var numba = e.clientX - 2;
        this.divWidth.current.style.width = `${numba}px`;
      }

        render() {

            return <div class = { this.props.class } ref = { this.divWidth } onClick = {this.props.communicate} onDrag = {(e) => { this.interactionRequest(e)} }>  </div>;
}
}
class TimeStepScaler extends React.Component {
  render () {
      return <div id = {this.props.id}>
             <TimeStepSpacingBlock id="nullstyles"/>
             <TimeStepControlNode id="centerBlockStyles"/>
             <TimeStepSpacingBlock id="nullstyles"/>
             </div>;
  }
}

class TimeStepSpacingBlock extends React.Component {
  render () {
      return <div id= { this.props.id }></div>;
  }
}

class TimeStepControlNode extends React.Component {
  render () {
      return <div id={this.props.id}>
             <CircleLineButton/>
             <CircleLineButton/>
             <CircleLineButton isChecked="checked" />
             </div>;
  }
}
class CircleLineButton extends React.Component {
  render () {
              if (this.props.isChecked=="checked")
              return <input type="radio" id="circleLineButton" checked />;
              else
              return <input type="radio" id="circleLineButton" />;
  }
}
class SoundControlPanel extends React.Component {
    render () {
      return 0;
    }

}

class BasicSoundControl extends React.Component {
    constructor()
    {
      super(props);
    }

    render () {
      numberOfOscillators = new Array(this.props.numberOfOscillators);
      return <div id={ this.props.id }>{numberOfOscillators.map((ea, i)=>
             {return <OscillatorControl id={i} communicationID={"c"+i}
              audiocontext={this.props.audiocontext}/>})}</div>;
    }
}

class BasicFXControl extends React.Component {
    render () {
      return <div id={ this.props.id }> Hey Hey Hey </div>;
    }
}

 class TimeStepPanel extends React.Component {

      render() {
        return <div id = { this.props.id } ></div>;
      }

}
class OscillatorControl extends React.Component
{
  constructor ()
  {
    this.setState(webAudioOscillator: this.props.audiocontext.createOscillator());
    this.communicate = this.communicate.bind(this);


  }

  communicate()
  {

  }
  setWaveform(oscType)
  {
    this.state.webAudioOscillator.type = oscType;
  }

  setPitch(frequency)
  {
    this.state.webAudioOscillator.frequency.setValueAtTime(frequency, this.props.audiocontext.currentTime);
  }

  render()
  {
      return <div id={this.props.id}><input type="slider" onChange={this.communicate(this.props.communicationID)}/></div>
  }


}
class Controls extends React.Component
{
  render() {
    return <div id={this.props.id}><BasicSoundControl id="basicSoundControlStyles" audiocontext={this.props.audiocontext}/>
            <BasicFXControl id="applyFXStyles" audiocontext={this.props.audiocontext}/> </div>
  }
}
class TimeSteps extends React.Component
{


      render()
      {
        <div id= { this.props.id }>
        <TimeStepDisplayGraph id="timeStepDisplayGraphStyles"
        communicate={this.props.communicateBetweenSiblings}/>

        <TimeStepScaler id="timeStepUniversalControlStyles"/>
        </div>
      }
}
class ControlsAndTimeStepCommunicator {

  constructor()
  {
    super(props);
    this.setState(audioContext: new AudioContext());
  }

  communicateBetweenSiblings () {

  }
  sendMsg()
  {

  }
  receiveMsg()
  {

  }
  render() {
    return <div><Controls id="controls" numberOfOscillators =
                {this.props.numberOfOscillators} audiocontext={audioContext}>
                <TimeSteps id="timesteps" communicateBetweenSiblings=
                {this.communicateBetweenSiblings}>
           </div>
  }
}

export default class App extends React.Component {
    dummy = () => {
        // Just to test arrow functions
    }

    render() {
        return (
            <>
            <div id="appContainer">

            <div id="topSection">
            </div> {/* CLOSE TOP SECTION */}

            <ControlsAndTimeStepCommunicator numberOfOscillators="6"/>


            <div id="bottomSection">

            </div>
            </div> {/* CLOSE APP SECTION */}
            </>
        );
    }
}
