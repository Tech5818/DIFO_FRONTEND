import { Flex, Text, chakra } from '@chakra-ui/react';

export const M_CommentContainer = chakra(Flex, {
  baseStyle: {
    padding: '20px',
    background: '#fff',
    boxShadow: '0 4px 8px rgba(218, 226, 237, 0.6)',
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
    maxHeight: '500px',
    overflow: 'scroll',
    marginBottom: '10px',
  },
});
