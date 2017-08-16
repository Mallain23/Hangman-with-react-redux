import React from 'react'
import {connect} from 'react-redux'

export function HangmanDisplay (props) {

    return (
        <div className="Hangman-display-container">
            <div className="remaining-lives">Remaing Lives: {props.remainingLives}</div>
            <div className="hangman-picture"><img src={props.hangmanPicture}/></div>
        </div>
    )
}

const mapStateToProps = state => ({
  remainingLives: state.remainingLives,
  hangmanPicture: state.hangmanPicture
})

export default connect(mapStateToProps)(HangmanDisplay)
