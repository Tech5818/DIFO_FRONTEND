import { useParams } from 'react-router-dom';
import { Recommend } from '../../components/recommend/Recommend';
import {
  M_ProjectBox,
  M_ProjectContainer,
  M_ProjectDate,
  M_ProjectMain,
  M_ProjectStack,
  M_ProjectStacks,
  M_ProjectTitle,
  M_ProjectWriter,
  M_ProjectWriterImg,
  M_ProjectWriterName,
  M_ProjectWriterNameDate,
} from '../../style/project/project.style';
import {
  getProjectDetails,
  postProjectLike,
} from '../../apis/Project';
import { useEffect, useState } from 'react';

type stackProps = {
  stackId: number;
  stackName: string;
};

type userDataProps = {
  email: string;
  memberId: number;
  name: string;
};

type projectProps = {
  deployUrl: string;
  endDate: Date;
  githubUrl: string;
  likes: number;
  mainContents: string;
  projectIntroduction: string;
  projectName: string;
  stacks: stackProps[];
  startDate: Date;
  subject: string;
  thumbnailUrl: string;
  userData: userDataProps[];
};

const ProjectPage = () => {
  const { projectId } = useParams();
  const [portfolioDetails, setPortfolioDetails] =
    useState<projectProps>();

  useEffect(() => {
    const getDetailsData = async () => {
      const res = await getProjectDetails(
        parseInt(projectId!),
      );

      setPortfolioDetails(res);
    };

    getDetailsData();
  }, [portfolioDetails]);

  const likeButtonClickHandler = async () => {
    await postProjectLike(parseInt(projectId!));
  };

  return (
    <>
      <M_ProjectContainer>
        <M_ProjectBox>
          <M_ProjectWriter>
            <M_ProjectWriterImg />
            <M_ProjectWriterNameDate>
              <M_ProjectWriterName>
                {portfolioDetails?.userData[0].name}
              </M_ProjectWriterName>
              <M_ProjectDate>5분전</M_ProjectDate>
            </M_ProjectWriterNameDate>
          </M_ProjectWriter>
          <M_ProjectMain>
            <M_ProjectTitle>
              {portfolioDetails?.projectName}
            </M_ProjectTitle>
            <h3>{portfolioDetails?.mainContents}</h3>
            <M_ProjectStacks>
              {portfolioDetails?.stacks.map(
                (stack, idx) => (
                  <M_ProjectStack key={idx}>
                    {stack.stackName}
                  </M_ProjectStack>
                ),
              )}
            </M_ProjectStacks>
          </M_ProjectMain>
        </M_ProjectBox>
        <Recommend
          likes={portfolioDetails?.likes!}
          likeButtonClickHandler={likeButtonClickHandler}
        />
      </M_ProjectContainer>
    </>
  );
};

export default ProjectPage;
