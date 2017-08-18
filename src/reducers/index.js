import * as actions from '../actions';
import { images } from '../utils/images';
import { feedback } from '../utils/constants'

const randomWords = require('random-words');

const { NEW_GAME, CORRECT_GUESS, WRONG_GUESS, DUPLICATE_GUESS, GAME_OVER } = feedback;

const initialState = {
            startGame: false,
            targetWord: '',
            wordDisplay: [],
            priorGuesses: [],
            remainingLives: 6,
            showInput: true,
            showInfo: false,
            imageIndex: 0,
            hangmanPicture: images[0],
            feedback: NEW_GAME
};
//change name of wordDisplay and targetWord
export default (state=initialState, action) => {

   if (action.type === actions.START_NEW_GAME) {

        let { startGame, showInput } = action
        const targetWord = randomWords()
        const wordDisplay = targetWord.split('').map(letter => '_')

        return Object.assign({}, state, {
            startGame,
            targetWord,
            wordDisplay,
            priorGuesses: [],
            remainingLives: 6,
            showInput,
            imageIndex: 0,
            hangmanPicture: images[state.imageIndex],
            feedback: NEW_GAME
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
                  feedback: DUPLICATE_GUESS
              });
        }

        else if (indexArray.length < 1 && remainingLives > 1) {

            const newImageIndex = imageIndex + 1;
            const hangmanPicture = images[newImageIndex];
            const priorGuessesArray = [...priorGuesses, guess];

            const commonObject = {
              priorGuesses: priorGuessesArray,
              imageIndex: newImageIndex,
              hangmanPicture
            };

            const moreThanOneLife = remainingLives > 1;

            return Object.assign({}, state, {
                  ...commonObject,
                  remainingLives: Math.max(remainingLives - 1, 0),
                  wordDisplay: moreThanOneLife ? wordDisplay : targetWord,
                  feedback: moreThanOneLife ?  WRONG_GUESS : GAME_OVER
            });

        }

        newWordDisplay = wordDisplay.map((currentCharacter, index) => indexArray.includes(index) ? guess : currentCharacter)

        return Object.assign({}, state, {
            wordDisplay: newWordDisplay,
            priorGuesses: [...priorGuesses, guess],
            feedback: CORRECT_GUESS
        });

    }

    return state
};
