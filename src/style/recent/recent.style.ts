import { Box, Flex, Text, chakra } from '@chakra-ui/react';

export const M_RecentContainer = chakra(Box, {
  baseStyle: {
    padding: '0 20px',
  },
});

export const M_RecentBox = chakra(Flex, {
  baseStyle: {
    background: '#fff',
    boxShadow: '0 0 20px -10px rgba(0, 0, 0, 0.6)',
    width: '100%',
    padding: '20px',
    gap: '20px',
    flexFlow: 'column',
    borderRadius: '10px',
  },
});

export const M_RecentTitleBox = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export const M_RecentTitle = chakra(Text, {
  baseStyle: {
    fontFamily: 'medium',
    fontSize: '22px',
  },
});

export const M_RecentMore = chakra(Text, {
  baseStyle: {
    fontSize: '16px',
    color: '#1F68D4',
  },
});

export const M_RecentPostBox = chakra(Flex, {
  baseStyle: {
    background: '#fff',
    flexFlow: 'column',
  },
});

export const M_RecentPostTitle = chakra(Text, {
  baseStyle: {
    fontSize: '18px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: '27px',
  },
});

export const M_RecentPostTime = chakra(Text, {
  baseStyle: {
    fontSize: '14px',
    color: '#777',
  },
});
