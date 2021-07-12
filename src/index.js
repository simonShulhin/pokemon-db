import { App } from './components/app';
import ErrorBoundry from './components/error-boundry';
import { BrowserRouter as Router } from 'react-router-dom';

import './main.scss';
const reactDom = require('react-dom');
const React = require('react');

reactDom.render(
  <ErrorBoundry>
    <Router>
      <App />
    </Router>
  </ErrorBoundry>,
  document.getElementById('root')
);
