import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css'

reactDOM.render(
     <Router>
        <App />
        </Router>,
        document.getElementById('root')
);
