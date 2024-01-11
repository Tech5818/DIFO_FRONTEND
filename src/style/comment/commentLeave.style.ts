import { Flex, Input, chakra } from '@chakra-ui/react';

export const M_CommentLeaveContainer = chakra(Flex, {
  baseStyle: {},
});

export const M_CommentLeaveInput = chakra(Input, {
  baseStyle: {
    background: '#f7f7f7',
    borderRadius: '50px',
  },
});
