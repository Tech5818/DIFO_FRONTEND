import { Flex, Text, chakra } from '@chakra-ui/react';

export const M_WorkListsContainer = chakra(Flex, {
  baseStyle: {
    flexFlow: 'column',
    gap: '20px',
    height: '400px',
    maxHeight: '400px',
    overflowY: 'scroll',
  },
});

export const M_WorkListsType = chakra(Text, {
  baseStyle: {
    fontSize: '24px',
    fontFamily: 'bold',
    padding: '20px 0',
  },
});

export const M_WorkLists = chakra(Flex, {
  baseStyle: {
    flexFlow: 'column',
    gap: '5px',
  },
});

export const M_WorkListsTitle = chakra(Text, {
  baseStyle: {
    fontSize: '22px',
    fontFamily: 'medium',
  },
});

export const M_WorkListsWriterTime = chakra(Flex, {
  baseStyle: {
    gap: '10px',
  },
});

export const M_WorkListsWriter = chakra(Text, {
  baseStyle: {
    fontSize: '16px',
  },
});
export const M_WorkListsTime = chakra(Text, {
  baseStyle: {
    fontSize: '16px',
    color: '#acacac',
  },
});
