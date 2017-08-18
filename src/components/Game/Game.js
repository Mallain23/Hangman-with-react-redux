import React from 'react';
import {connect} from 'react-redux';


import NewGameButton from '../NewGameButton'
import GameWindow from '../GameWindow'
import Navigation from '../Navigation'
import InfoPage from '../InfoPage'
import './Game.css'


export class Game extends React.Component {

    renderPage() {
        return this.props.startGame === true ? <GameWindow /> : <NewGameButton className="new-game-button"/>
    };

    render() {

        if (this.props.showInfo === true) {

            return <InfoPage />
        }

        let gameElement = this.renderPage()

        return (
            <div>
                <Navigation />
                <h1>Hangman</h1>
                <div className="game-element">{gameElement}</div>
            </div>
        )
    };
};

const mapStateToProps = state => ({
  startGame: state.startGame,
  showInfo: state.showInfo
})

export default connect(mapStateToProps)(Game)
