import {
  M_WorkListContainer,
  M_WorkListTab,
  M_WorkListTabList,
  M_WorkListTabPanel,
  M_WorkListTabPanels,
  M_WorkListTabs,
} from '../../style/workList/workList.style';
import { WorkListSearchBar } from './WorkListSearchBar';
import { WorkLists } from './WorkLists';

export const WorkList = () => {
  return (
    <>
      <M_WorkListContainer>
        <M_WorkListTabs
          variant='soft-rounded'
          colorScheme='blue'
        >
          <M_WorkListTabList>
            <M_WorkListTab>포트폴리오</M_WorkListTab>
            <M_WorkListTab>프로젝트</M_WorkListTab>
          </M_WorkListTabList>
          <M_WorkListTabPanels>
            <M_WorkListTabPanel>
              <WorkListSearchBar />
              <WorkLists />
            </M_WorkListTabPanel>
            <M_WorkListTabPanel>
              <WorkListSearchBar />
              <WorkLists />
            </M_WorkListTabPanel>
          </M_WorkListTabPanels>
        </M_WorkListTabs>
      </M_WorkListContainer>
    </>
  );
};
