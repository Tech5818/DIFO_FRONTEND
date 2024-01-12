import { useEffect, useState } from 'react';
import {
  M_BestWorkConents,
  M_BestWorkContent,
  M_BestWorkContentImage,
  M_BestWorkContentTextArea,
  M_BestWorkContentTitle,
  M_BestWorkContentWriter,
  M_BestWorkSkeleton,
  M_BestWorkSkeletonContainer,
  M_BestWorkTitleSkeleton,
  M_BestWorksContainer,
  M_BestWorksContents,
  M_BestWorksTitle,
} from '../../style/bestWorks/bestWorks.style';
import { bestWorks } from '../../types/BestWorks.type';
import { getPortfoliosByRecommend } from '../../apis/Portfolio';
import { getProjectByRecommend } from '../../apis/Project';
import { Link } from 'react-router-dom';
import { Mobile } from '../../Responsive';

interface BestWorksProps {
  title: string;
  type: 'portfolio' | 'project';
}

export const BestWorks = ({
  title,
  type,
}: BestWorksProps) => {
  const [data, setData] = useState<bestWorks[]>();

  useEffect(() => {
    const getRecommendData = async () => {
      let res = null;
      if (type === 'portfolio') {
        res = await getPortfoliosByRecommend();
      } else {
        res = await getProjectByRecommend();
      }

      setData(res.data);
    };

    getRecommendData();
  }, [data]);

  return (
    <>
      <Mobile>
        {!data && (
          <M_BestWorkSkeletonContainer>
            <M_BestWorkTitleSkeleton />
            <M_BestWorkConents>
              <M_BestWorkSkeleton />
              <M_BestWorkSkeleton />
            </M_BestWorkConents>
          </M_BestWorkSkeletonContainer>
        )}
        {!!data && (
          <M_BestWorksContainer
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '30%', opacity: 0 }}
          >
            <M_BestWorksTitle>{title}</M_BestWorksTitle>
            {type === 'portfolio' ? (
              <M_BestWorksContents>
                {data.length === 0 && (
                  <h3>아직 데이터가 없어요...</h3>
                )}
                {data.length !== 0 &&
                  data.map((portfolio, idx) => {
                    return (
                      <M_BestWorkContent key={idx}>
                        <M_BestWorkContentImage />
                        <M_BestWorkContentTextArea>
                          <M_BestWorkContentTitle>
                            {portfolio.portfolioTitle}
                          </M_BestWorkContentTitle>
                          <M_BestWorkContentWriter>
                            신권호
                          </M_BestWorkContentWriter>
                        </M_BestWorkContentTextArea>
                      </M_BestWorkContent>
                    );
                  })}
              </M_BestWorksContents>
            ) : (
              <M_BestWorksContents>
                {data.length === 0 && (
                  <h3>아직 데이터가 없어요...</h3>
                )}
                {data.length !== 0 &&
                  data.map((project, idx) => {
                    return (
                      <Link
                        to={`/works/project/${project.projectId}`}
                        key={idx}
                      >
                        <M_BestWorkContent>
                          <M_BestWorkContentImage
                            src={project.thumbnail}
                          />
                          <M_BestWorkContentTextArea>
                            <M_BestWorkContentTitle>
                              {project.projectName}
                            </M_BestWorkContentTitle>
                            <M_BestWorkContentWriter>
                              {`#${project.projectId}`}
                            </M_BestWorkContentWriter>
                          </M_BestWorkContentTextArea>
                        </M_BestWorkContent>
                      </Link>
                    );
                  })}
              </M_BestWorksContents>
            )}
          </M_BestWorksContainer>
        )}
      </Mobile>
    </>
  );
};
