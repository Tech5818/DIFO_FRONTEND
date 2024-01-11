import { Box, Flex, chakra } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

/**
 * @todo 모바일 Header components
 */
export const M_Header = chakra(Flex, {
  baseStyle: {
    height: '70px',
    background: '#fff',
    boxShadow: '0 4px 20px -11px rgba(0, 0, 0, 0.25)',
    alignItems: 'center',
    padding: '0 20px',
    justifyContent: 'space-between',
    overflowX: 'hidden',
  },
});

export const M_HeaderSide = chakra(Flex, {
  baseStyle: {
    gap: '20px',
    alignItems: 'center',
  },
});

export const M_Layer = chakra(Box, {
  baseStyle: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    zIndex: 100,
  },
});

export const M_Menu = chakra(Flex, {
  baseStyle: {
    position: 'absolute',
    height: '100%',
    background: '#fff',
    width: '60vw',
    right: 0,
    boxShadow: '-2px 0px 20px -10px rgba(0, 0, 0, 0.25)',
    zIndex: 1,
    padding: '20px',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export const M_CLOSE_BTN = chakra(FontAwesomeIcon, {
  baseStyle: {
    position: 'absolute',
    top: 30,
  },
});

export const M_MENU_NAV = chakra(motion.ul, {
  baseStyle: {
    width: '100%',
    textAlign: 'center',
    padding: '0.3rem',
  },
});
