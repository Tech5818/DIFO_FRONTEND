import { Input, Stack, chakra } from '@chakra-ui/react';

export const M_WorkListSearchBarStack = chakra(Stack, {
  baseStyle: {
    width: '100%',
  },
});

export const M_WorkListSearchBarInput = chakra(Input, {
  baseStyle: {
    width: '100%',
    fontSize: '18px',
    padding: '8px 15px',
  },
});
