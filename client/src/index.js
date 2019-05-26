import React from 'react';
import ReactDOM from 'react-dom';
// import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.css'
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App.jsx';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
// registerServiceWorker();