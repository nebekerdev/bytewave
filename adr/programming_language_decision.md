# Summary #
*** 
## Issue ##
I have to decide on programming languages to use for the application.
I'd like the application to be cross-platform and I'd like to be able to use Nodejs.
***
## Decision ##
I've chosen Javascript with React and Electron.

## Status ##
Decided. I'm fairly locked in to one language by virtue of using electron 
for cross-platform compatibility.

# Details #
### Assumptions ###
* The program must be cross platform. Performance is not a major concern
  because the application itself is quite small.
* I'd like to be able to build UI components quickly,and not focus too much time on GUI
  development. 

No backend technologies will be necessary as the app is simple. Possible output reduces to the following cases:

* Saving a file for use inside the application
* Importing audio samples
* Exporting a file to a standard audio format

# Constraints #
I'm heavily constrained in my choice of programming language
by choosing to use electron desktop for cross-platform capabilities.
I must use a langauge that can be interpreted by Chromium, which 
at this point in time is exclusively Javascript and the markup languages.
I do have control over my choice of frameworks.

These were the candidates for:

* React
* Angular 

Ultimately the biggest concern for me was speed of development. I didn't 
want to waste time building a complex GUI. I determined Angular to be
too heavy-weight and to require too much ramp-up time to learn to use
effectively. I also like React's plug-n-play philosophy of a simple base
system combined with modules you can add in as needed, like Redux.
