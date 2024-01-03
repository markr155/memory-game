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
pick random pokemon num = 4 + 2 * currentround
render list of pokemon in a random order

Components:
Header, includes instruction text
Score box

- high score
- current score
  Game Card
  -picture
  -text
