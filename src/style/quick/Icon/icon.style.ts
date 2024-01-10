import { Flex, Text, chakra } from '@chakra-ui/react';

export const IconContainer = chakra(Flex, {
  baseStyle: {
    flexFlow: 'column',
    alignItems: 'center',
    gap: '5px',
  },
});

export const IconBox = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    boxShadow: '0 0 20px -10px rgba(0, 0, 0, 0.5) inset',
  },
});

export const IconText = chakra(Text, {
  baseStyle: {
    fontFamily: 'medium',
    fontSize: '16px',
  },
});
