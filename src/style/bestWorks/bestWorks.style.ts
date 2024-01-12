import {
  Flex,
  Image,
  Skeleton,
  Text,
  chakra,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const M_BestWorksContainer = chakra(motion.div, {
  baseStyle: {
    width: '100%',
    flexFlow: 'column',
  },
});

export const M_BestWorksTitle = chakra(Text, {
  baseStyle: {
    fontSize: '22px',
    fontFamily: 'medium',
  },
});

export const M_BestWorksContents = chakra(Flex, {
  baseStyle: {
    width: '100%',
    padding: '10px 0',
    overflowX: 'scroll',
    gap: '20px',
  },
});

export const M_BestWorkContent = chakra(Flex, {
  baseStyle: {
    minWidth: '300px',
    background: '#fff',
    boxShadow: '0 0 20px -10px rgba(0, 0, 0, 0.5)',
    flexFlow: 'column',
    borderRadius: '10px',
    overflow: 'hidden',
  },
});

export const M_BestWorkContentImage = chakra(Image, {
  baseStyle: {
    width: '100%',
    height: '170px',
  },
});

export const M_BestWorkContentTextArea = chakra(Flex, {
  baseStyle: {
    width: '100%',
    padding: '15px',
    flexFlow: 'column',
    gap: '5px',
  },
});

export const M_BestWorkContentTitle = chakra(Text, {
  baseStyle: {
    fontSize: '20px',
    fontFamily: 'medium',
    heigh: '30px',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    textOverflow: 'ellipsis',
  },
});

export const M_BestWorkContentWriter = chakra(Text, {
  baseStyle: {
    fontSize: '18px',
    color: '#ccc',
  },
});

export const M_BestWorkSkeletonContainer = chakra(Flex, {
  baseStyle: {
    width: '100%',
    height: '315px',
    flexFlow: 'column',
  },
});

export const M_BestWorkTitleSkeleton = chakra(Skeleton, {
  baseStyle: {
    width: '70%',
    height: '33px',
    borderRadius: '10px',
  },
});

export const M_BestWorkConents = chakra(Flex, {
  baseStyle: {
    gap: '20px',
    padding: '10px 0',
    overflow: 'hidden',
  },
});

export const M_BestWorkSkeleton = chakra(Skeleton, {
  baseStyle: {
    minWidth: '300px',
    height: '262px',
    borderRadius: '10px',
  },
});
