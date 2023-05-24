# Front-end Exercise

Welcome to the front-end technical exercise. The purpose of this is to test your React knowledge by building a fun and simple pokemon app. 

First, thank you for considering Apex and for taking the time out of your busy day to interview with us. We know interviewing can be stressful. We are here to help you succeed, both by talking through the problem and making suggestions as you code. We all make typos along the way, and want to help you catch any of those to save time. Please ask questions at any point during the exercise if something is unclear. Take a deep breath, and let's begin.

## Pokedex App

The purpose of this interview is to test your react knowledge by building a fun and simple application that fetches and displays Pokemon data from PokeAPI. 

First, we will go over the acceptance criteria and ask for your solution design. Talk us through what steps that you will take to meet the Acceptance Criteria. 

## Pokedex

You are creating a simple Pokemon App that allows you to search for any pokemon and add it to your captured list. You will be using the PokeAPI. Pokemon data can be fetched at [https://pokeapi.co/api/v2/pokemon/pikachu](https://pokeapi.co/api/v2/pokemon/pikachu) (Replace "pikachu" with a pokemon name or id). Please view the design below and the acceptance criteria.

![poke app](public/poke-app.png)

### Acceptance Criteria

1. Users can search any pokemon by name or id and display it's information.
    1. Front-facing image
    2. Name
    3. ID/Name
    4. List all types associated.
    5. List 4 stats. (HP, Attack, Defense, Speed) 
2. Capture Button
    1. Pressing the "Capture" button adds the current Pokemon to list on the right.
        1. Can capture the same pokemon multiple times.
        2. Can only capture up to 6 pokemon.
3. Captured List
    1. Displays all captured Pokemon images stacked vertically.
    2. Clicking on a captured Pokemon removes it from the list.

### Technical notes

- Use react with typescript.
- Use any style library you are comfortable with. (We use Chakra-ui).
- Use additional libraries if needed.

### Additional notes
- User experience is important.
- State management is important.
- Styling doesn’t need to match example image but try to make it reasonably nice looking.
- Write unit tests if you have time. 

## Running App

`yarn install`
`yarn dev`