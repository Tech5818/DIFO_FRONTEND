import { Flex, Text, chakra } from '@chakra-ui/react';

export const M_CommentContainer = chakra(Flex, {
  baseStyle: {
    padding: '20px',
    background: '#fff',
    boxShadow: '0 0 20px -10px rgba(0, 0, 0, 0.5)',
    flexFlow: 'column',
  },
});

export const M_CommentTitle = chakra(Text, {
  baseStyle: {
    fontSize: '22px',
    fontFamily: 'medium',
  },
});

export const M_CommentList = chakra(Flex, {
  baseStyle: {
    flexFlow: 'column',
    gap: '20px',
    height: '500px',
    overflow: 'scroll',
    marginBottom: '10px',
  },
});
