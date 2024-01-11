import { chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const M_HomeContent = chakra(motion.div, {
  baseStyle: {
    padding: '20px',
    background: '#f6f6f6',
    minHeight: 'calc(100vh - 70px)',
  },
});
