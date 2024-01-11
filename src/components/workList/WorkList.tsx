import { Mobile } from '../../Responsive';
import {
  M_WorkListContainer,
  M_WorkListTab,
  M_WorkListTabList,
  M_WorkListTabPanel,
  M_WorkListTabPanels,
  M_WorkListTabs,
} from '../../style/workList/workList.style';
import { SearchBar } from '../searchBar/WorkListSearchBar';
import { WorkLists } from './WorkLists';
import { WorkListsItem } from './WorkListsItem';

export const WorkList = () => {
  return (
    <>
      <Mobile>
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
                <SearchBar />
                <WorkLists>
                  <WorkListsItem
                    id='1'
                    title='제목이당당당당당당당한 대통령 홍준표'
                    writer='신권호'
                    date='5분전'
                    stacks={[
                      '프론트엔드',
                      '백엔드',
                      '리액트',
                      'express',
                      'awt',
                      'nextjs',
                    ]}
                    type='portfolio'
                  />
                  <WorkListsItem
                    id='1'
                    title='제목이당'
                    writer='신권호'
                    date='5분전'
                    stacks={['프론트엔드', '백엔드']}
                    type='portfolio'
                  />
                  <WorkListsItem
                    id='1'
                    title='제목이당'
                    writer='신권호'
                    date='5분전'
                    type='portfolio'
                    stacks={['프론트엔드', '백엔드']}
                  />
                  <WorkListsItem
                    id='1'
                    title='제목이당'
                    writer='신권호'
                    date='5분전'
                    stacks={['프론트엔드', '백엔드']}
                    type='portfolio'
                  />
                  <WorkListsItem
                    id='1'
                    title='제목이당'
                    writer='신권호'
                    date='5분전'
                    stacks={['프론트엔드', '백엔드']}
                    type='portfolio'
                  />
                  <WorkListsItem
                    id='1'
                    title='제목이당'
                    writer='신권호'
                    date='5분전'
                    stacks={['프론트엔드', '백엔드']}
                    type='portfolio'
                  />
                </WorkLists>
              </M_WorkListTabPanel>
              <M_WorkListTabPanel>
                <SearchBar />
                <WorkLists>
                  <WorkListsItem
                    id='1'
                    title='제목이당'
                    writer='신권호'
                    date='5분전'
                    stacks={['프론트엔드', '백엔드']}
                    type='project'
                  />
                  <WorkListsItem
                    id='1'
                    title='제목이당'
                    writer='신권호'
                    date='5분전'
                    stacks={['프론트엔드', '백엔드']}
                    type='project'
                  />
                  <WorkListsItem
                    id='1'
                    title='제목이당'
                    writer='신권호'
                    date='5분전'
                    stacks={['프론트엔드', '백엔드']}
                    type='project'
                  />
                  <WorkListsItem
                    id='1'
                    title='제목이당'
                    writer='신권호'
                    date='5분전'
                    stacks={['프론트엔드', '백엔드']}
                    type='project'
                  />
                  <WorkListsItem
                    id='1'
                    title='제목이당'
                    writer='신권호'
                    date='5분전'
                    stacks={['프론트엔드', '백엔드']}
                    type='project'
                  />
                  <WorkListsItem
                    id='1'
                    title='제목이당'
                    writer='신권호'
                    date='5분전'
                    stacks={['프론트엔드', '백엔드']}
                    type='project'
                  />
                </WorkLists>
              </M_WorkListTabPanel>
            </M_WorkListTabPanels>
          </M_WorkListTabs>
        </M_WorkListContainer>
      </Mobile>
    </>
  );
};
