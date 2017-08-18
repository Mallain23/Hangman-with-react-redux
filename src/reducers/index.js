import * as actions from '../actions';
import { images } from '../utils/images'

const initialState = {
            startGame: false,
            targetWord: '',
            wordDisplay: '',
            priorGuesses: [],
            remainingLives: 6,
            showInput: true,
            showInfo: false,
            imageIndex: 0,
            hangmanPicture: images[0],
            feedback: "Guess a letter to begin the game!"
}

export default (state=initialState, action) => {

   if (action.type === actions.START_NEW_GAME) {

      let { startGame, targetWord, wordDisplay, showInput } = action

        return Object.assign({}, state, {
            startGame,
            targetWord,
            wordDisplay,
            priorGuesses: [],
            remainingLives: 6,
            showInput,
            imageIndex: 0,
            hangmanPicture: images[state.imageIndex],
            feedback: "Guess a letter to begin the game!"
        });
    }

    else if (action.type === actions.TOGGLE_INFO) {
        return Object.assign({}, state, {
            showInfo: !state.showInfo
        });
    }

    else if (action.type === actions.MAKE_GUESS) {

        const {
            targetWord,
            wordDisplay,
            priorGuesses,
            remainingLives,
            imageIndex
        } = state

        const { guess } = action;

        let newWordDisplay = [];
        let indexArray = [];

        targetWord.split('').forEach((letter, index) => letter === guess ? indexArray.push(index) : '')

        if (priorGuesses.includes(guess)) {
              return Object.assign({}, state, {
                  feedback: `You have already guessed ${guess}, guess a different letter!`
              });
        }

        else if (indexArray.length < 1 && remainingLives > 1) {

            const newImageIndex = imageIndex + 1
            const hangmanPicture = images[newImageIndex]
            const priorGuessesArray = [...priorGuesses, guess]

            const commonObject = {
              priorGuesses: priorGuessesArray,
              imageIndex: newImageIndex,
              hangmanPicture
            }

            const moreThanOneLife = remainingLives > 1

            return Object.assign({}, state, {
                  ...commonObject,
                  remainingLives: Math.max(remainingLives - 1, 0),
                  wordDisplay: moreThanOneLife ? wordDisplay : targetWord,
                  feedback: moreThanOneLife ?  `Sorry there are no ${guess}'s, try again!` : 'Sorry, you have no more guesses left! The Game is over.'
            });

        }

        newWordDisplay = wordDisplay.map((currentCharacter, index) => indexArray.includes(index) ? guess : currentCharacter)

        return Object.assign({}, state, {
            wordDisplay: newWordDisplay,
            priorGuesses: [...priorGuesses, guess],
            feedback: `Correct guess!`
        });

    }

    return state
};
