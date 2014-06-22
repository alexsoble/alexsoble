---
layout: default
title: Los mensajes de error, tus mejores amigos
tags:
- Chile
- code
---

Los mensajes de error, tus mejores amigos
================================

The terminal can be impressive and frightening to people who haven't seen it before. More than any other programming tool, working with the terminal _looks_ like hacking. "That looks scary," people will say when they look over your shoulder at terminal. "Like _The Matrix_. I couldn't do that."

Implicit in those statements is the idea that programmers have mastered an arcane art, that deciphering code requires special ability. But the truth is that terminal output is mostly English: bad, clunky English produced by a cranky machine. And the mark of a coder is stubbornness, not epiphany or ability. 
A programmer is someone who sees an ugly-looking error message, _believes_ that she or he has the power to resolve it, and keeps trying new things until the error goes away.  

<div class="image-container">
  <img src="/assets/images/terminal.png">
</div>

Error messages contain clues, helpfully pointing out what's gone wrong and which lines of code need fixing. But the ugliness of error output in the terminal can be off-putting, scaring off a new coder before he or she has a chance to learn from it.

That's why my very first talk about programming, a lightning talk at [RailsGirls Chile](/2014/05/28/rails-girls-chile/), was about error messages. Below are the slides in Spanish and English. Hat tip to <a href="https://twitter.com/jeffcohen">Jeff Cohen</a> at The Starter League, my first programming teacher, for introducing his students to the idea of error-driven development from the start. 

<div class="slideshow-container">
  <iframe src="https://docs.google.com/presentation/d/1TUYowGAMvEiGub3oNHJht8woxP6Vbtom7Ig-8XcSZSQ/embed?start=false&loop=false&delayms=3000" frameborder="0" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</div>

<div class="slideshow-container">
  <iframe src="https://docs.google.com/presentation/d/1YtLjllD6zgHUBGCA6p0BFdl2H4XGtc-nIQpp0c7NBZI/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</div>

Giving the talk got me wondering about ways to make the programmer's toolbox less intimidating for new coders. What if terminal errors returned only the first line of an error up front, with the rest available by scrolling? What are other ways we could redesign programming tools to inspire confidence in first-time coders?