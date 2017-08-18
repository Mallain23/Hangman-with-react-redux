import React from 'react'
import './Navigation.css'

import NewGameButton from './NewGameButton'
import ToggleInfoButton from './ToggleInfoButton'


export default function Navigation(props) {

    return (
        <nav className="nav-bar">
            <header className="game-title">Hangman</header>
              <div className='nav-links'>
                  <span className='nav-bar-item'><NewGameButton className='nav-new-game-button'/></span>
                  <span className='nav-bar-item'><ToggleInfoButton /></span>
              </div>
        </nav>
    )
};
