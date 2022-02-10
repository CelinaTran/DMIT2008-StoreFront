import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import{app} from "./libs/firebase/firebaseConfig.js"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

