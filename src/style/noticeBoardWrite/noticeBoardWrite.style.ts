import {
  Button,
  Flex,
  Image,
  Input,
  Text,
  Textarea,
  chakra,
} from '@chakra-ui/react';

export const M_NoticeBoardWriteContainer = chakra(Flex, {
  baseStyle: {
    flexFlow: 'column',
    padding: '20px',
    gap: '30px',
    minHeight: 'calc(100vh - 70px)',
    background: '#f6f6f6',
  },
});

export const M_NoticeBoardWriteBox = chakra(Flex, {
  baseStyle: {
    background: '#fff',
    boxShadow: '0 4px 8px rgba(218, 226, 237, 0.6)',
    padding: '20px',
    flexFlow: 'column',
    gap: '20px',
  },
});

export const M_NoticeBoardWriterInfo = chakra(Flex, {
  baseStyle: {
    gap: '8px',
  },
});

export const M_NoticeBoardWriterImage = chakra(Image, {
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

export const M_NoticeBoardWriterDate = chakra(Text, {
  baseStyle: {
    fontSize: '14px',
  },
});

export const M_NoticeBoardWriteMain = chakra(Flex, {
  baseStyle: {
    flexFlow: 'column',
    gap: '10px',
  },
});

export const M_NoticeBoardWriteMainTitleInput = chakra(
  Input,
  {
    baseStyle: {
      fontSize: '18px',
    },
  },
);

export const M_NoticeBoardWriteMainText = chakra(Textarea, {
  baseStyle: {
    height: '500px',
    textAlign: 'start',
  },
});

export const M_NoticeBoardPostButton = chakra(Button, {
  baseStyle: {
    padding: '25px',
    color: '#fff',
    fontSize: '20px',
    borderRadius: '8px',
  },
});
