import { createStore } from 'redux';
import reducers from './reducers';

export default (initialState = {}) => {
  let middleware;

  if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      middleware = devToolsExtension();
    }
  }

  return createStore(reducers, initialState, middleware);
};
