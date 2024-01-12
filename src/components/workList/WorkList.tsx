import { useEffect, useState } from 'react';
import { Mobile } from '../../Responsive';
import {
  M_WorkListContainer,
  M_WorkListItemSkeleton,
  M_WorkListTab,
  M_WorkListTabList,
  M_WorkListTabPanel,
  M_WorkListTabPanels,
  M_WorkListTabs,
  M_WorkToWriteButton,
} from '../../style/workList/workList.style';
import { SearchBar } from '../searchBar/WorkListSearchBar';
import { WorkLists } from './WorkLists';
import { WorkListsItem } from './WorkListsItem';
import {
  portfolio,
  project,
} from '../../types/BestWorks.type';
import { getRecentPortfolio } from '../../apis/Portfolio';
import { Link } from 'react-router-dom';
import { getRecentProjects } from '../../apis/Project';

const containerAnimation = {
  close: { opacity: 0 },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 3,
    },
  },
};

export const WorkList = () => {
  const [recentPortfolios, setRecentPortfolios] =
    useState<portfolio[]>();
  const [recentProjects, setRecentProjects] =
    useState<project[]>();

  useEffect(() => {
    const getRecentPortfolioData = async () => {
      const res = await getRecentPortfolio();
      setRecentPortfolios(res);
    };

    const getRecentProjectData = async () => {
      const res = await getRecentProjects();
      setRecentProjects(res);
    };

    getRecentPortfolioData();
    getRecentProjectData();
  }, []);

  return (
    <>
      <Mobile>
        <M_WorkListContainer
          initial='close'
          animate='open'
          variants={containerAnimation}
        >
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
                <Link to='/works/portfolio/write'>
                  <M_WorkToWriteButton colorScheme='messenger'>
                    포트폴리오 쓰러가기
                  </M_WorkToWriteButton>
                </Link>
                <WorkLists>
                  {!recentPortfolios && (
                    <>
                      <M_WorkListItemSkeleton />
                      <M_WorkListItemSkeleton />
                      <M_WorkListItemSkeleton />
                      <M_WorkListItemSkeleton />
                      <M_WorkListItemSkeleton />
                    </>
                  )}
                  {!!recentPortfolios &&
                    recentPortfolios?.map(
                      (portfolio, idx) => {
                        return (
                          <Link
                            key={idx}
                            to={`/works/portfolio/${portfolio.portfolioId}`}
                          >
                            <WorkListsItem
                              id={portfolio.portfolioId}
                              title={
                                portfolio.portfolioTitle
                              }
                              writer={`#${portfolio.memberId}`}
                              type='portfolio'
                            />
                          </Link>
                        );
                      },
                    )}
                </WorkLists>
              </M_WorkListTabPanel>
              <M_WorkListTabPanel>
                <SearchBar />
                <Link to='/works/project/write'>
                  <M_WorkToWriteButton colorScheme='messenger'>
                    프로젝트 쓰러가기
                  </M_WorkToWriteButton>
                </Link>
                <WorkLists>
                  {!recentProjects && (
                    <>
                      <M_WorkListItemSkeleton />
                      <M_WorkListItemSkeleton />
                      <M_WorkListItemSkeleton />
                      <M_WorkListItemSkeleton />
                      <M_WorkListItemSkeleton />
                    </>
                  )}
                  {!!recentProjects &&
                    recentProjects.map((project, idx) => {
                      return (
                        <Link
                          key={idx}
                          to={`/works/project/${project.projectId}`}
                        >
                          <WorkListsItem
                            id={project.projectId}
                            title={project.projectName}
                            writer={`#${project.projectId}`}
                            type='project'
                            stacks={project.stacks}
                          />
                        </Link>
                      );
                    })}
                </WorkLists>
              </M_WorkListTabPanel>
            </M_WorkListTabPanels>
          </M_WorkListTabs>
        </M_WorkListContainer>
      </Mobile>
    </>
  );
};
