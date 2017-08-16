import React from 'react'
import {connect} from 'react-redux';
import {toggleInfo} from '../actions'
import './ToggleInfoButton.css'

export class ToggleInfoButton extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    };

    handleClick(e) {
        e.preventDefault()

        this.props.dispatch(toggleInfo())
    };

    render() {
      return <a href="#" onClick={this.handleClick}>Info</a>
    };
};

export default connect()(ToggleInfoButton)
