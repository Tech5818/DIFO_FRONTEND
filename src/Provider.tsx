import { PropsWithChildren, createContext } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

type ContextType = {};

const defaultContext: ContextType = {};

export const Context = createContext(defaultContext);

export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <Context.Provider value={{}}>{children}</Context.Provider>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
};
