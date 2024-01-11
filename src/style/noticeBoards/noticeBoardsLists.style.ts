import { Flex, Text, chakra } from '@chakra-ui/react';

export const M_NoticeBoardsListsContainer = chakra(Flex, {
  baseStyle: {
    flexFlow: 'column',
    gap: '20px',
    height: '600px',
    overflowY: 'scroll',
  },
});

export const M_NoticeBoardsItem = chakra(Flex, {
  baseStyle: {
    width: '100%',
    flexFlow: 'column',
    gap: '5px',
  },
});

export const M_NoticeBoardsItemTitle = chakra(Text, {
  baseStyle: {
    fontSize: '22px',
    fontFamily: 'medium',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '100%',
  },
});

export const M_NoticeBoardsItemWriterDate = chakra(Flex, {
  baseStyle: {
    gap: '10px',
  },
});

export const M_NoticeBoardsItemWriter = chakra(Text, {
  baseStyle: {
    fontSize: '16px',
  },
});

export const M_NoticeBoardsItemDate = chakra(Text, {
  baseStyle: {
    fontSize: '16px',
    color: '#acacac',
  },
});
