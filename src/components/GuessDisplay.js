import React from 'react'
import {connect} from 'react-redux';

export class GuessDisplay extends React.Component {

    render() {
        let guessLength = this.props.guesses.length
        let guesses = this.props.guesses.map((guess, index) => index < guessLength - 1 && guessLength ?  `${guess}, ` : guess)

        return (
            <div className="guess-display">Prior Guesses: {guesses}</div>
        )
    };
};

const mapStateToProps = state => ({
  guesses: state.priorGuesses
})

export default connect (mapStateToProps)(GuessDisplay)
