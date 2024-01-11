import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  chakra,
} from '@chakra-ui/react';

export const M_NoticeBoardsListContainer = chakra(Flex, {
  baseStyle: {
    background: '#fff',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(218, 226, 237, 0.6)',
  },
});

export const M_NoticeBoardsListTabs = chakra(Tabs, {
  baseStyle: {
    width: '100%',
  },
});

export const M_NoticeBoardsListTabList = chakra(TabList, {
  baseStyle: {},
});

export const M_NoticeBoardsListTab = chakra(Tab, {
  baseStyle: {},
});

export const M_NoticeBoardsListTabPanels = chakra(
  TabPanels,
  {
    baseStyle: {},
  },
);

export const M_NoticeBoardsListTabPanel = chakra(TabPanel, {
  baseStyle: {
    padding: '20px 0 0 0',
  },
});
