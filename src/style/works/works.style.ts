import { Flex, chakra } from '@chakra-ui/react';

export const M_WorksContainer = chakra(Flex, {
  baseStyle: {
    flexFlow: 'column',
    padding: '20px',
    gap: '20px',
    background: '#f6f6f6',
  },
});

export const P_WorksContainer = chakra(Flex, {
  baseStyle: {
    padding: '20px',
  },
});
