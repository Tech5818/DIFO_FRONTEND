import { Flex, chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const colors = [
  '#FF008C',
  '#D309E1',
  '#9C1AFF',
  '#7700FF',
  '#4400FF',
];

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItemStyle = chakra(motion.li, {
  baseStyle: {
    marginBottom: '50px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
});

const MenuInnerPlaceholder = chakra(Flex, {
  baseStyle: {
    borderRadius: '5px',
    width: '300px',
    height: '50px',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const MenuItem = ({
  i,
  title,
}: {
  i: number;
  title: string;
}) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <MenuItemStyle
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MenuInnerPlaceholder style={style}>
        {title}
      </MenuInnerPlaceholder>
    </MenuItemStyle>
  );
};
