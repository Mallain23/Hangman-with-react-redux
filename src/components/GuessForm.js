import React from 'react'
import {connect} from 'react-redux'
import {makeGuess} from '../actions'

export class GuessForm extends React.Component {
    constructor(props) {
        super(props)

        this.onGuess = this.onGuess.bind(this)
    }

    onGuess(e) {
        e.preventDefault()
        let guess = this.input.value
        this.props.dispatch(makeGuess(guess))
        this.input.value = ''
    }

    render() {
        return (
          <form onSubmit={this.onGuess}>
              <label htmlFor="user guess">Enter your guess </label>
              <input type="text" ref={input => this.input = input}
                  maxLength="1" id="user-guess" required />
              <input type="submit" id="guessButton"
                  className="button" name="submit" value="Guess"/>
          </form>
        )
    };
};

export default connect()(GuessForm)
