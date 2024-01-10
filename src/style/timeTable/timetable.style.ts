import { Box, Flex, chakra } from '@chakra-ui/react';

export const M_TimeTableContainer = chakra(Flex, {
  baseStyle: {
    justifyContent: 'center',
    padding: '20px 20px',
  },
});

export const M_TimeTable = chakra(Flex, {
  baseStyle: {
    width: '100%',
    padding: '20px',
    background: '#fff',
    boxShadow: '0 0 20px -10px rgba(0, 0, 0, 0.6)',
    borderRadius: '10px',
  },
});

export const M_TimeTableHeader = chakra(Flex, {
  baseStyle: {
    width: '100%',
  },
});

export const M_TimeTableHeaderDay = chakra(Box, {
  baseStyle: {
    flex: '1',
    fontSize: '22px',
  },
});

export const M_TimeTableContent = chakra(Flex, {
  baseStyle: {},
});
