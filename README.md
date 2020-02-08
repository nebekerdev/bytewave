## README
### This app is under current development

This stands as a placeholder for the eventual documentation.
If you'd like to read development documentation, visit the adr folder.

Until the project is complete, this readme will serve to hold notes
on phases of the development.

##First Phase: Basic UI Generation - complete
*Initiliaze the project, install nodejs modules,
*Create build automation.
*Develop the bare bones of the user interface (all our divs in the right place!)
and create the basic React components.

##Second Phase: Create the Web Audio portions - ***IN PROGRESS***##
Here we'll have to create the application's sound sources
and effects, and tie them into the UI elements. I'm still
in the process of doing this because I haven't decided how
I want to organize the code. I've decided I want an independent
"Step" object that contains a reference to the graph node
and the control node, to facilitate communication between the two.
I've also decided I want a master container that will take care of
the actual logic, deciding when to play a specific Step (because
there should only be ONE audiocontext object)
I've committed code fleshing out the bare bones of the Step object
and creating the oscillators. About 30% done.

##Third Phase: Add cute UI elements. - **UP NEXT**##

##***CURRENT ISSUES/ROADBLOCKS:***##
Before continuing, I need to determine how to optimally
associate a div in the TimeStep Graph section,
which controls timing for a step,
with an input row in the controls section,
which gives the user access to oscillators, pitch, and volume
for the step. Currently both are represented as divs, but
they need to be associated together.
