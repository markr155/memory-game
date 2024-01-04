# Memory Card Game

Initial Design
Header(Center)
'Click on each pokemon once' (center)
High Score:
Current Score:

---

Notes:
Start with 4 cards, increase by 2 each successful round
Highlight box shadow on card hover

---

API:
https://pokeapi.co/
name: species.name

picture: sprites.other.official-artwork.front_default
pic SVG: sprites.other.dream_world.front_default

---

Flow:

Have list of all pokemon
pick random pokemon num = 4 + 2 \* currentround
render list of pokemon in a random order
on click, check if card has been clicked before
if card has been clicked then game over, show reset modal
if card has not been clicked, check if all cards are clicked

Components:
Header, includes instruction text
Score box

- high score
- current score
  Game Card -- Look at making rows dynamic based on round
  -picture
  -text
