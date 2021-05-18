import React, { createContext, useContext, useReducer } from 'react';

import { initialState, MessagingReducer } from './reducers';

const MessagingContext = createContext({});

export const useMessagingContext = () => {
  const context = useContext(MessagingContext);
  if(null === context) {
    throw new Error("useMessagingContext must be used inside a MessagingProvider");
  }
  return context;
};

export const MessagingProvider = ({ children }) => {
  const [context, dispatch] = useReducer(MessagingReducer, initialState);
  return (
    <MessagingContext.Provider value={{context, dispatch}}>
      {children}
    </MessagingContext.Provider>
  );
};

