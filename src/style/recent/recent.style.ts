import { Box, Flex, Text, chakra } from '@chakra-ui/react';

export const M_RecentContainer = chakra(Box, {
  baseStyle: {
    padding: '0 20px',
  },
});

export const M_RecentBox = chakra(Flex, {
  baseStyle: {
    background: '#fff',
    boxShadow: '0 0 20px -10px rgba(0, 0, 0, 0.25)',
    width: '100%',
    padding: '20px',
  },
});

export const M_RecentTitleBox = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export const M_RecentTitle = chakra(Text, {
  baseStyle: {
    fontFamily: 'medium',
    fontSize: '18px',
  },
});

export const M_RecentMore = chakra(Text, {
  baseStyle: {
    fontSize: '14px',
    color: '#1F68D4',
  },
});
