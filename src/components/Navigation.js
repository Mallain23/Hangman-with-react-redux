import React from 'react'
import './Navigation.css'
import { Nav, NavItem, Navbar } from 'react-bootstrap';

import NewGameButton from './NewGameButton'
import ToggleInfoButton from './ToggleInfoButton'


export default function Navigation(props) {

    return (
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>Hangman</Navbar.Brand>
            </Navbar.Header>
            <Nav bsStyle="pills">
                <NavItem><NewGameButton className='nav-button' /></NavItem>
                <NavItem><ToggleInfoButton className='nav-button'/></NavItem>
            </Nav>
        </Navbar>
    )
};
