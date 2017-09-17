/*
 * Green Ninja Puzzle Project
 *
 * Puzzle Developers: Ryan Liu, Maxim Tiourin, Edwin Tsang
 * GNPLib Developer: Maxim Tiourin
 * Tester: Stephen Sing
 */

This README contains information that will help a future developer understand the contained file structure, and how to
begin working with the GNPLib library.

-----------------

GNPLib is a javascript library that contains within it the minified versions of the EaselJs, TweenJs, and PreloadJS libraries.

The documentation for these 3 libraries can be found at:
EaselJs (http://www.createjs.com/docs/easeljs/modules/EaselJS.html)
TweenJs (http://www.createjs.com/docs/tweenjs/modules/TweenJS.html)
PreloadJs (http://www.createjs.com/docs/preloadjs/modules/PreloadJS.html)

The documentation for the GNPLib functionality can be found locally at (/gnplib/doc/index.html)

--------------------

Since gnplib contains all of the above mentions libraries within it, it is only necessary to include the gnplib.js script
to gain access to the functionality of all the features of the above libraries.

--------------------

When referencing elements of the the EaselJs / TweenJs / PreloadJs libraries, it is necessary to first prepend the namespace
"createjs", so for example, referencing the Stage object from the EaselJs module can be done with "createjs.Stage"

When referencing elements of the GNPLib library, it is necessary to first prepend the namespace "gnplib", and then any additional
namespaces after that. So referencing the LockDial class from the "ui" namespace within the GNPLib module can be done
with "gnplib.ui.LockDial"

Refer to the above listed documentation sources to better understand the API behind all of the libraries. The
documentation for GNPLib itself will often have example code listed below functions to show how they might be used.

--------------------

The unobfuscated, verbosely documented version of the GNPLib javascript library can be found locally at
(/gnplib/lib/gnplib.js) -- this file contains the minified versions of the createjs libraries along with their licenses,
and then the unobfuscated gnplib code follows after them.

When including GNPLib inside of an html file, it is better to use the minified version of the library which has a smaller
file size, and does not include the comment documentation of the full library. This minified version can be found locally at
("gnplib/lib/gnplib-min.js)

--------------------

** Important Notice **: All asset images are not properly licensed/credited. Although some might have been created from scratch
by the team, most have been heavily edited and attained from sites such as Google Images. All of these assets only serve
to help test the puzzle examples and convey their purpose. Any commercial or official release of the puzzle project will
require new asset images
created for it.

--------------------

(/gnplib/) contains all source files as well as all gnplib documentation and this is where the future developers will edit the project.
(/release_snapshot/) contains only the core files necessary to execute and play the puzzle.

--------------------

The temporary landing page for the puzzle is located in (release_snapshot/index.html) and (gnplib/testing/index.html), this is
where the puzzle can be started from the beginning for purposes of playing.
