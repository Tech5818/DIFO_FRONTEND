import {
  Button,
  Flex,
  Image,
  Input,
  Text,
  chakra,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const M_PortfolioContainer = chakra(Flex, {
  baseStyle: {
    flexFlow: 'column',
    padding: '20px',
    background: '#f6f6f6',
  },
});

export const M_PortfolioBox = chakra(Flex, {
  baseStyle: {
    background: '#fff',
    boxShadow: '0 4px 8px rgba(218, 226, 237, 0.6)',
    padding: '20px',
    flexFlow: 'column',
    gap: '10px',
  },
});

export const M_PortfolioWriter = chakra(Flex, {
  baseStyle: {
    gap: '8px',
    alignItems: 'center',
  },
});

export const M_PortfolioWriterImg = chakra(Image, {
  baseStyle: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
});

export const M_PortfolioWriterNameDate = chakra(Flex, {
  baseStyle: {
    flexFlow: 'column',
  },
});

export const M_PortfolioWriterName = chakra(Text, {
  baseStyle: {
    fontSize: '20px',
  },
});

export const M_PortfolioDate = chakra(Text, {
  baseStyle: {
    fontSize: '14px',
  },
});

export const M_PortfolioMain = chakra(Flex, {
  baseStyle: {
    flexFlow: 'column',
    gap: '10px',
  },
});

export const M_PortfolioTitle = chakra(Text, {
  baseStyle: {
    fontSize: '22px',
    fontFamily: 'medium',
  },
});

export const M_PortfolioStacks = chakra(Flex, {
  baseStyle: {
    gap: '5px',
    flexWrap: 'wrap',
  },
});

export const M_PortfolioStack = chakra(Text, {
  baseStyle: {
    padding: '5px 8px',
    background: '#4285EB',
    color: '#fff',
    borderRadius: '50px ',
    fontSize: '12px',
  },
});

export const PortfolioWriteContainer = chakra(Flex, {
  baseStyle: {
    padding: '20px',
    flexFlow: 'column',
    gap: '20px',
  },
});

export const PortfolioWriteBox = chakra(motion.div, {
  baseStyle: {
    background: '#fff',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(218, 226, 237, 0.6)',
    flexFlow: 'column',
    gap: '20px',
    display: 'flex',
  },
});

export const PortfolioWriteTitle = chakra(Text, {
  baseStyle: {
    fontSize: '32px',
    fontFamily: 'medium',
  },
});

export const PortfolioWriteMain = chakra(Flex, {
  baseStyle: {
    flexFlow: 'column',
    gap: '10px',
  },
});

export const PortfolioWriteTitleInput = chakra(Input, {
  baseStyle: {
    fontSize: '18px',
  },
});

export const PortfolioWriteButton = chakra(Button, {
  baseStyle: {
    fontSize: '22px',
    padding: '30px',
    width: '20%',
    alignSelf: 'end',
  },
});

export const M_PortfolioWriteButton = chakra(Button, {
  baseStyle: {
    fontSize: '20px',
    padding: '30px',
  },
});
