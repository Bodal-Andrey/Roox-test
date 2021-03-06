import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from './components/app';
import store from './reducer/store';
import { Operation } from './reducer/users';
import './sass/style.scss';

store.dispatch(Operation.loadUsers());

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>),
    document.getElementById(`root`)
);
