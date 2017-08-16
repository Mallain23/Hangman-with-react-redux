import React from 'react';
import { connect } from 'react-redux'
import {toggleInfo} from '../actions'

import './InfoPage.css'

export class InfoPage extends React.Component {
    constructor(props) {
      super(props)

      this.onClose = this.onClose.bind(this)

    }
    onClose(e) {
        e.preventDefault();
        this.props.dispatch(toggleInfo())
      }

    render() {
      return (
              <div className="overlay" id="modal">
                              <div className="content">
                                  <h3>What do I do?</h3>
                                  <div>
                                      <p>This is a Hangman Guessing Game. The game goes like this: </p>
                                      <ul>
                                          <li>1. I pick a <strong>random secret word</strong> and reveal how many letters are in the word.</li>
                                          <li>2. You need to <strong>guess</strong> a letter from a-z.</li>
                                          <li>3. If you guess correctly, I wil fill in the spaces with the correct letter, if you guess wrong, you will lose one of your remaining lives</li>
                                          <li>4. You have 7 lives in the game, if you guess the phrase before all of your lives are used up, you win!</li>
                                      </ul>
                                      <p>So, Are you ready?</p>
                                      <a className="close" href="#" onClick={this.onClose}>Got It!</a>
                                  </div>
                              </div>
                          </div>
        )
    }
}

export default connect()(InfoPage)
