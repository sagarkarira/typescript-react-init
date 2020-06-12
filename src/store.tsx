import React from 'react';

interface IState {
  message: string;
}

const initialState = {
  message: 'World!',
};
export const Store = React.createContext(initialState);

export function StoreProvider(props: any): JSX.Element {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>;
}
