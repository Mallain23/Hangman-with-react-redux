import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Game from './components/Game/Game';
import store from './store';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </ Provider>,
    document.getElementById('root')
);

registerServiceWorker();
