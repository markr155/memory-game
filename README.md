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

Pick initialNum random pokemon
get text picture
display cards in random order
On click - check if pokemon has been clicked before
if yes, game end, display score, update high score if current score higher and restart button (in modal)
if no, increment score, re-render cards in random order

Components:
Header, includes instruction text
Score box
- high score
- current score
  Game Card
  -picture
  -text

