import { PropsWithChildren, createContext } from 'react';

type ContextType = {};

const defaultContext: ContextType = {};

export const Context = createContext(defaultContext);

export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Context.Provider value={{}}>{children}</Context.Provider>
    </>
  );
};
