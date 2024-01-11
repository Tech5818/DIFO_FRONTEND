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
import { WorkListsItem } from './WorkListsItem';

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
              <WorkLists>
                <WorkListsItem
                  title='제목이당'
                  writer='신권호'
                  date='5분전'
                />
                <WorkListsItem
                  title='제목이당'
                  writer='신권호'
                  date='5분전'
                />
                <WorkListsItem
                  title='제목이당'
                  writer='신권호'
                  date='5분전'
                />
                <WorkListsItem
                  title='제목이당'
                  writer='신권호'
                  date='5분전'
                />
                <WorkListsItem
                  title='제목이당'
                  writer='신권호'
                  date='5분전'
                />
                <WorkListsItem
                  title='제목이당'
                  writer='신권호'
                  date='5분전'
                />
                <WorkListsItem
                  title='제목이당'
                  writer='신권호'
                  date='5분전'
                />
              </WorkLists>
            </M_WorkListTabPanel>
            <M_WorkListTabPanel>
              <WorkListSearchBar />
              <WorkLists>
                <WorkListsItem
                  title='제목이당'
                  writer='신권호'
                  date='5분전'
                />
                <WorkListsItem
                  title='제목이당'
                  writer='신권호'
                  date='5분전'
                />
                <WorkListsItem
                  title='제목이당'
                  writer='신권호'
                  date='5분전'
                />
                <WorkListsItem
                  title='제목이당'
                  writer='신권호'
                  date='5분전'
                />
                <WorkListsItem
                  title='제목이당'
                  writer='신권호'
                  date='5분전'
                />
              </WorkLists>
            </M_WorkListTabPanel>
          </M_WorkListTabPanels>
        </M_WorkListTabs>
      </M_WorkListContainer>
    </>
  );
};
