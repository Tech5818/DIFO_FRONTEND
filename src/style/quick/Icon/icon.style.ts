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
  },
});

export const IconText = chakra(Text, {
  baseStyle: {
    fontFamily: 'medium',
    fontSize: '16px',
  },
});
