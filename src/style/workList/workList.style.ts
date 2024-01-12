import {
  Button,
  Skeleton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  chakra,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const M_WorkListContainer = chakra(motion.div, {
  baseStyle: {
    display: 'flex',
    width: '100%',
    flexFlow: 'column',
    padding: '20px',
    background: '#fff',
    boxShadow: '0 0 20px -10px rgba(0, 0, 0, 0.5)',
    borderRadius: '5px',
  },
});

export const M_WorkListTabs = chakra(Tabs, {
  baseStyle: {
    display: 'flex',
    flexFlow: 'column',
  },
});

export const M_WorkListTabList = chakra(TabList, {
  baseStyle: {},
});

export const M_WorkListTab = chakra(Tab, {
  baseStyle: {},
});

export const M_WorkListTabPanels = chakra(TabPanels, {
  baseStyle: {},
});

export const M_WorkListTabPanel = chakra(TabPanel, {
  baseStyle: {
    padding: '20px 0',
  },
});

export const M_WorkListItemSkeleton = chakra(Skeleton, {
  baseStyle: {
    width: '100%',
    height: '72px',
    borderRadius: '10px',
  },
});

export const M_WorkToWriteButton = chakra(Button, {
  baseStyle: {
    marginTop: '10px',
    width: '100%',
  },
});
