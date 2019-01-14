# Memory Game Project

 by Ian Barkan

## Table of Contents

* [Instructions](#Instructions)
* [Game play](#Gameplay)
* [HTML](#HTML)
* [CSS](#CSS)
* [JS](#JS)
* [Acknowledgements](#Acknowledgements)


## Instructions
The game can be played either by clicking on the GitHub pages link in my repository, by downloading the project file and opening the index.html file up in any browser or by clicking https://iddesignspace.github.io/Udacity-Fend-Memory-Game/. I recommend Google Chrome, as this was the browser it was tested in.

## Game Play

Upon the page loading the game will start automatically cards will be shuffled and then briefly displayed. Clicking the cards will display them. If the two cards clicked "Matched" cards will turn green and will count towards one turn and cards will be add to the matched cards list. If the cards do not match this will count against the player. If too many moves have been made and not enough cards have been matched the player will lose stars. Upon matching all sixteen of the cards your final score will be displayed and the game can be started over by clicking the restart button. 

## HTML

They HTML was manipulated very little. I created the "congratulations modal", the timer and the star rating system. I also removed some of Udacitys original classes

## CSS

I added some CSS in order to make the modal pop up as well as manipulate the star rating system. 

## JS

I manipulated the DOM using Vanilla JS. I'd like to see if I can refactor my code in a more streamlined way using more ES6. 


## Acknowledgements

* MDN Web Documentation
* W3C Web Documentation
* [Stopwatch tutorial](https://www.ostraining.com/blog/coding/stopwatch/)