import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//icons
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faSpotify, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faSpotify, faCoffee)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
