import {
  Flex,
  Image,
  Text,
  chakra,
} from '@chakra-ui/react';

export const M_CommentItem = chakra(Flex, {
  baseStyle: {
    flexFlow: 'column',
    gap: '5px',
    borderBottom: '0.5px solid #ccc',
  },
});

export const M_CommentWriterInfo = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
    gap: '8px',
  },
});

export const M_CommnetWriterImg = chakra(Image, {
  baseStyle: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
});

export const M_CommentWriterNameDate = chakra(Flex, {
  baseStyle: {
    flexFlow: 'column',
  },
});

export const M_CommentWriterName = chakra(Text, {
  baseStyle: {
    fontSize: '18px',
  },
});

export const M_CommentWriterDate = chakra(Text, {
  baseStyle: {
    fontSize: '14px',
  },
});

export const M_CommentMain = chakra(Flex, {
  baseStyle: {
    paddingBottom: '8px',
  },
});

export const M_CommentText = chakra(Text, {
  baseStyle: {},
});
