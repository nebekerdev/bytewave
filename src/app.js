import React from 'react';

class TimeStepDisplayGraph extends React.Component {

  render () {
      return <div id={ this.props.id }>Heyyyyy</div>;
    }
  }

class TimeStepScaler extends React.Component {
  render () {
      return <div id = {this.props.id}>
             <TimeStepSpacingBlock id="nullstyles"/>
             <TimeStepControlNode id="centerBlock">
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
      return <div id={this.props.id}></div>;
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

            <BasicFXControl id="applyFX"/>

            </div> {/* CLOSE CONTROL SECTION */}

            <div id="timesteps">

            <TimeStepDisplayGraph id="timeStepDisplayGraphStyles"/>

            <TimeStepScaler id="timeStepUniversalControl"/>

            </div> {/* CLOSE TIMESTEPS */}

            </div> {/* CLOSE CENTER SECTION */}


            <div id="bottomSection">

            </div>
            </div> {/* CLOSE APP SECTION */}
            </>
        );
    }
}
