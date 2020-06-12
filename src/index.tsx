import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider, Store } from './store';

export default function App(): JSX.Element {
  const state = React.useContext(Store);
  return <h1>Hello!! {state.message}</h1>;
}

const root = document.getElementById('root');
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  root,
);
