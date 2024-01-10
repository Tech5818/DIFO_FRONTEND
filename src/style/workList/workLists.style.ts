import {
  Flex,
  Select,
  Text,
  chakra,
} from '@chakra-ui/react';

export const M_WorkListsContainer = chakra(Flex, {
  baseStyle: {
    flexFlow: 'column',
    gap: '20px',
  },
});

export const M_WorkListsSelect = chakra(Select, {
  baseStyle: {
    width: 'auto',
    height: 'auto',
    padding: '8px 16px',
    fontSize: '20px',
    fontFamily: 'medium',
    marginTop: '20px',
    borderRadius: '50px',
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
