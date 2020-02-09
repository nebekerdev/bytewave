import React from 'react';
import Step from './audioobjects.js'

/*  ##### TIMESTEP SECTION COMPONENTS
this section contains components currently
rendered on the right side of the application
for controlling the time that each oscillator
plays for as well as the overall clip length.

*/

// This is a container component which houses both our individual TimeStepGraphNodes
// and the scaling UI component
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


/* createGraphNode is the timestep element that ultimately
  can be interacted with by the user. The user can click
  the graphnode to see its associated oscillator and fx,
  or drag the graph node to increase or decrease the time it plays for
*/
function createGraphNode(uniqueIdentifier, communicateWithParentFunction)
{
  return <TimeStepDisplayGraphNode class="graphNodeStyles" communicate =
  {this.props.communicateWithParentFunction} communicationID=
  {this.props.uniqueIdentifier}/>
}

// The display  graph is the container component that houses all of the graph nodes
class TimeStepDisplayGraph extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render ()
  {
      // creates n TimeStepGraphNode nodes, depending on argument numberOfNodes
      // and associates each with a unique ID that is tied to the actual oscillator
      // that it represents

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
        this.div = React.createRef(); // necessary to update the div width on screen
        this.interactionRequest = this.interactionRequest.bind(this);
        this.activateTimeStep = this.activateTimeStep.bind(this);
        var decrementedWidth = 0;

      }
      // When the user drags the component, we change the divs width correspondingly
      // and the width is further associated with a percentage of the total time
      // for the clip
      interactionRequest(e)
      {
        decrementedWidth = e.clientX - 2;
        this.div.current.style.width = `${numba}px`;
      }

      // Used to display a visual indication to the user that he is viewing the
      // sound controls for a specific timestep
      activateTimeStep()
      {
        this.div.current.style = {this.props.class+"clicked"};
        this.props.communicate(this.props.communicationID, decrementedWidth);

      }

        render() {

            return <div class = { this.props.class } ref = { this.divWidth }
                    onClick = {this.activateTimeStep} onDrag =
                    {(e) => { this.interactionRequest(e)} }>
                   </div>;
}
}

// This is the component which contains the UI element that scales the timesteps according
// to an overall clip length
class TimeStepScaler extends React.Component {
  render () {
      return <div id = {this.props.id}>
             <TimeStepSpacingBlock id="nullstyles"/> // Used to center the scaling UI element
                                                    // is not visible on screen
             <TimeStepControlNode id="centerBlockStyles"/>
             <TimeStepSpacingBlock id="nullstyles"/> // Same as above
             </div>;
  }
}

class TimeStepSpacingBlock extends React.Component {
  render () {
      return <div id= { this.props.id }></div>;
  }
}
// This is the UI component that allows the user to scale the total clip length
class TimeStepControlNode extends React.Component {
  render () {
      return <div id={this.props.id}>
             <CircleLineButton/>
             <CircleLineButton/>
             <CircleLineButton isChecked="checked" /> // One of three clip lengths must be set by default
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

/* ##### CONTROLS SECTION
This section appears on the left side of the application and contains
all of the UI components responsible for controlling the oscillators and fx
associated with each time step
*/

class BasicSoundControl extends React.Component {
    constructor()
    {
      super(props);
      this.respondToTimeStepGraphNode = this.respondToTimeStepGraphNode.bind(this);
    }
    respondtoTimeStepGraphNode(timeStepWidth)
    {
      let oscillatorsList = React.Children.toArray(props.children);


      if (oscillatorsList === 1)
      {
        // TO DO
      }
    }
    render () {
      // Create n oscillators depending ona rgument
      numberOfOscillators = new Array(this.props.numberOfOscillators);
      return <div id={ this.props.id }>{numberOfOscillators.map((ea, i)=>
              {return <OscillatorControl id={i} communicationID={"c"+i}
                audiocontext={this.props.audiocontext}/>})}
             </div>;
    }
}

// This section houses our reverb and delay, but is not finished
class BasicFXControl extends React.Component {
    render () {
      return <div id={ this.props.id }> Hey Hey Hey </div>;
    }
}


// This component contains the actual oscillator and the UI component
// associated with controlling it. It contains methods for updating the oscillator.
class OscillatorControl extends React.Component
{
  constructor ()
  {
    this.setState(webAudioOscillator: this.props.audiocontext.createOscillator());
    this.state.webAudioOscillator.type = "sine";
    this.communicateWithSelf = this.communicateWithSelf.bind(this);
    inputField = <input type="range" min="0" max="3" step="1"
                  onChange={this.communicateWithSelf(this.props.communicationID,
                  inputField.value}/>;

  }

  communicateWithSelf(id, message)
  {
    setWaveform(message);
  }


  setWaveform(oscType)
  {
    switch (oscType)
    {
      case 0: this.state.webAudioOscillator.type = "sine";
              break;
      case 1: this.state.webAudioOscillator.type = "square";
              break;
      case 2: this.state.webAudioOscillator.type = "sawtooth";
      case 3: this.state.webAudioOscillator.type = "triangle";
              break;
    }

  }

  setPitch(frequency)
  {
    this.state.webAudioOscillator.frequency.setValueAtTime(frequency, this.props.audiocontext.currentTime);
  }

  render()
  {
      return <div id={this.props.id}>{inputField}</div>
  }


}
// This is a container component that houses both our oscillators and fx
class Controls extends React.Component
{
  render() {
    return <div id={this.props.id}><BasicSoundControl id="basicSoundControlStyles" audiocontext={this.props.audiocontext}/>
            <BasicFXControl id="applyFXStyles" audiocontext={this.props.audiocontext}/> </div>
  }
}


// This is the top-most parent component which houses our controls section and timestep SECTION
class ControlsAndTimeStepCommunicator {

  constructor()
  {
    super(props);
    this.setState(audioContext: new AudioContext());
  }

  communicateBetweenSiblings (communicationID, message) {

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
