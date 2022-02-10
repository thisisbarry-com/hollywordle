# Movie Name Guessing Game

# How to play
- Guess the Hollywood movie in 6 tries.
- Each guess must be a valid 5 letter word or movie name. E.g. "LOCKE" is a valid guess. 
- Hit the enter button to submit.
- After each guess, the color of the tiles will change to show how close your guess was to the name.
- Just like popular Wordle, each day a new movie name will be available.

# Code & Setup
This is a clone project of a popular word guessing game made using React, Typescript, and Tailwind.

_To Run Locally:_
Clone the repository and perform the following command line actions:

```bash
$> cd word-guessing-game
$> npm install
$> npm run start
```

_To build/run docker container:_

```bash
$> docker build -t game .
$> docker run -d -p 3000:3000 game
```

open [http://localhost:3000](http://localhost:3000) in browser.


