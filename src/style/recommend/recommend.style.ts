import { Flex, Text, chakra } from '@chakra-ui/react';

export const M_RecommendContainer = chakra(Flex, {
  baseStyle: {
    padding: '30px',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const M_RecommendBox = chakra(Flex, {
  baseStyle: {
    flexFlow: 'column',
    alignItems: 'center',
    gap: '5px',
  },
});

export const M_RecommendButton = chakra(Flex, {
  baseStyle: {
    background: '#fff',
    borderRadius: '50%',
    flexFlow: 'column',
    padding: '15px',
    justifyContent: 'center',
    boxShadow: '0 0 20px -10px rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
  },
});

export const M_RecommendWord = chakra(Text, {
  baseStyle: {
    fontSize: '18px',
  },
});
