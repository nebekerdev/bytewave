# Program Feature Synopsis #
Bytewave is a cross-platform application for creating unique sound effects using the web audio api.
The core of the program consists of a sequence of sixteen steps, each of which are associated with their
own oscillator and peripheral effects. Steps can be shrunk universally. For example, if a user generates
a two second clip, each step would represent 1/16 of two seconds. Steps can also be shrunk individually
in which case individual steps would play for a longer or shorter period of time than some others.

Ideally I will create five oscillar types that the user can choose from: Saw, Sine, Triangle, Square, and Saw-Square.
Only the last type requires more than one oscillator internally. There will also be FX the user can choose to add, 
reverb and delay.

Finally, the user should be able to save the file to persistent storage, and to export the resulting sound into a
standard audio waveform.

## Components ##
Here I'll detail a high-level description of each component of the system.

### UI ###
The UI is perhaps the focus of the entire application. It consists of a React front-end wrapped in an instance of electron.
The app should contain these sections:
* Controls Section: A list of user controls for ***pitch***, ***volume***,
  ***oscillar type***, ***channel panning*** for each **timestep**. Should include a separate subsection for two additional FX: 
  reverb and delay.
* Timestep Section: Should contain a display graph for each of the sixteen
  timesteps. Each timestep is represented by a styled div that should be resizable to represent the length of time that the sound
  associated with that timestep is played. Should also contain a Universal Time Control section consisting of a set of
  radio buttons that scale the entire graph by a certain time (i.e play total clip for 3 seconds, 2 seconds, or 1 seconds)
* Header Section: The header section is just for animation to show the user
  which keyboard keys he can press to record a sound. 
### web audio api section ###
I want to separate the section of code that generates sound on a low level from the UI. This is because the web audio api
involves creating a graph from oscillator-audiobuffer and managing some messy things like timers.
The web audio api section should contain
* A step object representing the sound at a given step.
* Functions for connecting the audio graph network
* Functions for playing the specific sound
* A global controller that manages timing


