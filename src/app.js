import React from 'react';


class TimeStepDisplayGraph extends React.Component {

  render () {
      return <div id={ this.props.id }>
             <TimeStepDisplayGraphNode class="graphNodeStyles"/>
             <TimeStepDisplayGraphNode class="graphNodeStyles"/>
             <TimeStepDisplayGraphNode class="graphNodeStyles"/>
             <TimeStepDisplayGraphNode class="graphNodeStyles"/>
             <TimeStepDisplayGraphNode class="graphNodeStyles"/>
             <TimeStepDisplayGraphNode class="graphNodeStyles"/>
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

            return <div class = { this.props.class } ref = { this.divWidth } onDrag = {(e) => { this.interactionRequest(e)} }>  </div>;
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
    render () {
      return <div id={ this.props.id }> Hey Hey Hey </div>;
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

            <div id="centerSection">

            <div id="controls">

            <BasicSoundControl id="basicSoundControlStyles"/>

            <BasicFXControl id="applyFXStyles"/>

            </div> {/* CLOSE CONTROL SECTION */}

            <div id="timesteps">

            <TimeStepDisplayGraph id="timeStepDisplayGraphStyles"/>

            <TimeStepScaler id="timeStepUniversalControlStyles"/>

            </div> {/* CLOSE TIMESTEPS */}

            </div> {/* CLOSE CENTER SECTION */}


            <div id="bottomSection">

            </div>
            </div> {/* CLOSE APP SECTION */}
            </>
        );
    }
}
