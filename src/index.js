import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {AppContainer} from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR
const render = (Component) => {
  ReactDOM.render(
      <AppContainer>
        <Component/>
      </AppContainer>,
      document.getElementById('root')
  );
};
render(App);

// Hot Module Replacement API
if(module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App);
  });
}
