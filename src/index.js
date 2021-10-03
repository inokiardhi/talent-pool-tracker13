import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from "./redux/store"

ReactDOM.render(
  <>
    <div className="backgroundColor">
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </>,
  document.getElementById('root')
);
