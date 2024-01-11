import {
  Flex,
  Image,
  Text,
  chakra,
} from '@chakra-ui/react';

export const M_NoticeBoardContainer = chakra(Flex, {
  baseStyle: {
    padding: '20px',
    flexFlow: 'column',
  },
});

export const M_NoticeBoardBox = chakra(Flex, {
  baseStyle: {
    padding: '20px',
    background: '#fff',
    boxShadow: '0 4px 8px rgba(218, 226, 237, 0.6)',
    flexFlow: 'column',
    gap: '10px',
  },
});

export const M_NoticeBoardWriter = chakra(Flex, {
  baseStyle: {
    gap: '8px',
    alignItems: 'center',
  },
});

export const M_NoticeBoardWriterImg = chakra(Image, {
  baseStyle: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
});

export const M_NoticeBoardWriterNameDate = chakra(Flex, {
  baseStyle: {
    flexFlow: 'column',
  },
});

export const M_NoticeBoardWriterName = chakra(Text, {
  baseStyle: {
    fontSize: '20px',
  },
});

export const M_NoticeBoardDate = chakra(Text, {
  baseStyle: {
    fontSize: '14px',
  },
});

export const M_NoticeBoardMain = chakra(Flex, {
  baseStyle: {
    flexFlow: 'column',
    gap: '10px',
  },
});

export const M_NoticeBoardTitle = chakra(Text, {
  baseStyle: {
    fontSize: '22px',
    fontFamily: 'medium',
  },
});

export const M_NoticeBoardText = chakra(Flex, {
  baseStyle: {
    fontSize: '16px',
  },
});
