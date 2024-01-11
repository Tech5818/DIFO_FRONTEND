import {
  Flex,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  chakra,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const M_TimeTableContainer = chakra(motion.div, {
  baseStyle: {
    justifyContent: 'center',
    marginTop: '20px',
    padding: '15px',
    background: '#fff',
    boxShadow: '0 4px 8px rgba(218, 226, 237, 0.6)',
    borderRadius: '10px',
    flexFlow: 'column',
  },
});

export const M_TimeTable = chakra(Table, {
  baseStyle: {
    width: '100%',

    flexFlow: 'column',
  },
});

export const M_TimeTableTitle = chakra(Flex, {
  baseStyle: {
    fontSize: '28px',
    fontFamily: 'medium',
    padding: '0 10px 15px 10px',
    justifyContent: 'center',
  },
});

export const M_TimeTableThead = chakra(Thead, {
  baseStyle: {},
});

export const M_TimeTableTr = chakra(Tr, {
  baseStyle: {},
});

export const M_TimeTableTh = chakra(Th, {
  baseStyle: {
    fontSize: '14px',
    padding: '10px 3px',
    textAlign: 'center',
    width: 'calc(100% / 6)',
    letterSpacing: '-0.15rem',
  },
});

export const M_TimeTableTheadTh = chakra(M_TimeTableTh, {
  baseStyle: {
    fontSize: '20px',
  },
});

export const M_TimeTableTbody = chakra(Tbody, {
  baseStyle: {},
});
