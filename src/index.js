import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {App} from './components/Smart/App';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './services/serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
