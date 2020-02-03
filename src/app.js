import React from 'react';


export default class App extends React.Component {
    dummy = () => {
        // Just to test arrow functions
    }

    render() {
        return (
            <>
            <div id="appContainer">

            <div id="topSection">
            </div>

            <div id="centerSection">

            <div id="controls">

            <div id="baseSoundControls">
            Hey Hey Hey
            </div>

            <div id="applyFX">
            Hi Hi Hi
            </div>

            </div>

            <div id="timesteps">

            <div id="timeStepDisplayGraph">
            Hey
            </div>

            <div id="timeStepUniversalControl">
            <div id="timeStepLeft">
            </div>


            <div id="timeStepControlNode">
            Hi
            </div>
            </div>

            <div id="timeStepRight">
            </div>


            </div>
            </div>


            <div id="bottomSection">

            </div>
            </div>
            </>
        );
    }
}
