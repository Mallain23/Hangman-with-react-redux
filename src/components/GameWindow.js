import React from 'react'
import {connect} from 'react-redux';

import NewGameButton from './NewGameButton'
import GuessForm from './GuessForm'
import GuessDisplay from './GuessDisplay'
import WordDisplay from './WordDisplay'
import HangmanDisplay from './HangmanDisplay'
import './GameWindow.css'

export class GameWindow extends React.Component {

    renderCorrectDisplay() {
        return this.props.showInput === false ? <NewGameButton /> : <GuessForm />
    }

   render () {
        const { feedback } = this.props

        return (
            <div className="game-window-container">
                <GuessDisplay />
                <h3>{feedback}</h3>
                <HangmanDisplay />
                {this.renderCorrectDisplay()}
                <WordDisplay />
              </div>
        )
    };
};

const mapStateToProps = state => ({
    showInput: state.showInput,
    feedback: state.feedback
})

export default connect(mapStateToProps)(GameWindow)
