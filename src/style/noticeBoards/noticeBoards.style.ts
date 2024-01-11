import { Flex, Text, chakra } from '@chakra-ui/react';

export const M_NoticeBoardsContainer = chakra(Flex, {
  baseStyle: {
    padding: '20px',
    background: '#f6f6f6',
    minHeight: 'calc(100vh - 70px)',
    flexFlow: 'column',
    gap: '20px',
  },
});

export const M_NoticeBoardsToWrite = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export const M_NoticeBoardsWriteTexts = chakra(Flex, {
  baseStyle: {},
});

export const M_NoticeBoardsWriteText = chakra(Text, {
  baseStyle: {
    fontSize: '22px',
  },
});

export const M_NoticeBoardsWriteTextImpact = chakra(
  M_NoticeBoardsWriteText,
  {
    baseStyle: {
      color: '#4285EB',
      fontFamily: 'medium',
    },
  },
);

export const M_NoticeBoardsButton = chakra(Flex, {
  baseStyle: {
    fontSize: '16px',
    padding: '8px 15px',
    background: '#4285EB',
    color: '#fff',
    borderRadius: '10px',
    fontFamily: 'medium',
    boxShadow: '0 4px 8px rgba(218, 226, 237, 0.6)',
  },
});
