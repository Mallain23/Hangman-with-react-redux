import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import {startNewGame} from '../actions'
import './NewGameButton.css'

import { Button } from 'react-bootstrap'

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
        this.props.dispatch(startNewGame())
    };

    render() {
      const { className } = this.props;

      return <button className={`${className} link`} onClick={this.handleClick}>New Game</button>;
    };
};

export default connect()(NewGameButton)
