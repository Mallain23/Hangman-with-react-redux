import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import {startNewGame} from '../actions'
import './NewGameButton.css'

const randomWords = require('random-words')

export class NewGameButton extends React.Component {
    static propTypes = {
        className: PropTypes.string
    }

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    };

    handleClick(e) {
        e.preventDefault()

        const targetWord = randomWords()
        const wordDisplay = targetWord.split('').map(letter => '_')

        this.props.dispatch(startNewGame(targetWord, wordDisplay))
    };

    render() {
      const { className } = this.props;

      return <a className={`${className} link`} href="#" onClick={this.handleClick}>New Game</a>;
    };
};

export default connect()(NewGameButton)
