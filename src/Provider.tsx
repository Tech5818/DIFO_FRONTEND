import React, { PropsWithChildren, createContext, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

type ContextType = {
  onMenu: boolean;
  setOnMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultContext: ContextType = {
  onMenu: false,
  setOnMenu: () => {},
};

export const Context = createContext(defaultContext);

export const Provider = ({ children }: PropsWithChildren) => {
  const [onMenu, setOnMenu] = useState(false);
  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <Context.Provider value={{ onMenu, setOnMenu }}>
            {children}
          </Context.Provider>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
};
