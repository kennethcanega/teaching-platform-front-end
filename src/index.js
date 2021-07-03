import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './components/App'
import reducers from './components/reducers'


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter basename={"/freelance-teacher"}>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)