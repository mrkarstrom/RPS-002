# Rock-Paper-Scissors API

A REST API for two players. The game is meant to settle disagreements between colleagues by playing the classic game of Rock-Paper-Scissors!

---

## Features

- Create a new game and receive a unique game-id.
- Join a created game by posting the same id.
- Make moves by posting rock/paper/scissors.
- The winner (if not draw) is decided and stored in memory. 
- The state of each game can be retrieved using the id.

---

## Running the Project

### What is included
All necessary files are included in the zip-file.
The project folder includes the index.js which is the main file of the project containing the routes handled by the express framework.

### How to Run
1. Extract the project files into a desired folder.
2. In the project folder you run the following commands:
    - 'npm install' - For installing dependencies.
    - 'npm start' - For starting up the node server to play the game on localhost port 3000.

### API Endpoints
- **POST /api/games**: Create a new game using body 'name' in json-format for setting name of user1.
- **POST /api/games/:id/join**: To join a game using the received id as params, and user2 'name' in body in json-format. 
- **POST /api/games/:id/move**: Make a move by sending username and move - 'rock', 'paper' or 'scissors', starting with user1.

- **GET /api/games:id**: Retrieve any game state by sending the id in params.

---

## Testing

Tests are using mocha and chai to verify functionality. Simply run command: 'npm test' to see results of included unit testing.

--- 

## Project Structure

The project is organized in a common way using src-folder as base of the controllers, routes, models and utils. This is mainly to show that scalability is a part of the planning of this very small project. Game.js is the only class type used, for the managing of game state.

| **Folder**     | **Description**                        |
|-----------------|----------------------------------------|
| **/controllers** | Handles API requests.                 |
| **/models**      | Contains the Game class for state managing. |
| **/routes**      | Defines the APIs.                     |
| **/utils**       | Holds helper utilities.               |


