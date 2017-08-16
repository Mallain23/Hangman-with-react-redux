

export const START_NEW_GAME = 'START_NEW_GAME';
export const startNewGame = (targetWord, wordDisplay) => ({
    type: START_NEW_GAME,
    targetWord,
    wordDisplay,
    startGame: true,
    showInput: true
})

export const TOGGLE_INFO = 'TOGGLE_INFO'
export const toggleInfo = () => ({
  type: TOGGLE_INFO
})

export const MAKE_GUESS = 'MAKE_GUESS'
export const makeGuess = guess => ({
    type: MAKE_GUESS,
    guess
})
