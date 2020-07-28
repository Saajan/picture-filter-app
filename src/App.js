import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import settings from './reducers';

import Container from './components/Container';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

// With server rendering, we can grab the preloaded state.
//const preloadedState = window.__PRELOADED_STATE__ || {}; // eslint-disable-line

const store = createStore(
  settings,
  composeEnhancers(applyMiddleware(...middleware))
);


function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Container />
      </div>
    </Provider>
  );
}

export default App;