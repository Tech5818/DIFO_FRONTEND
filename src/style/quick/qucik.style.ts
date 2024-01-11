import { chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const M_Quick = chakra(motion.div, {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    padding: '30px 20px',
  },
});
