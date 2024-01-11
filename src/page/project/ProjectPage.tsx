import { Comment } from '../../components/comment/Comment';
import { CommnetItem } from '../../components/comment/CommentItem';
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

const ProjectPage = () => {
  return (
    <>
      <M_ProjectContainer>
        <M_ProjectBox>
          <M_ProjectWriter>
            <M_ProjectWriterImg />
            <M_ProjectWriterNameDate>
              <M_ProjectWriterName>
                신권호
              </M_ProjectWriterName>
              <M_ProjectDate>5분전</M_ProjectDate>
            </M_ProjectWriterNameDate>
          </M_ProjectWriter>
          <M_ProjectMain>
            <M_ProjectTitle>제목이다 하하</M_ProjectTitle>
            <M_ProjectStacks>
              <M_ProjectStack>프론트엔드</M_ProjectStack>
              <M_ProjectStack>프론트엔드</M_ProjectStack>
              <M_ProjectStack>프론트엔드</M_ProjectStack>
              <M_ProjectStack>
                프론트엔드 및 AWS
              </M_ProjectStack>
              <M_ProjectStack>프론트엔드</M_ProjectStack>
              <M_ProjectStack>프론트엔드</M_ProjectStack>
            </M_ProjectStacks>
          </M_ProjectMain>
        </M_ProjectBox>
        <Recommend />
        <Comment>
          <CommnetItem
            writer='이선우'
            date='5분전'
            text='나 이선우 인데 개추 눌렀다 ㅋㅋ'
          />
          <CommnetItem
            writer='이선우'
            date='5분전'
            text='나 이선우 인데 개추 눌렀다 ㅋㅋ'
          />
          <CommnetItem
            writer='이선우'
            date='5분전'
            text='나 이선우 인데 개추 눌렀다 ㅋㅋ'
          />
          <CommnetItem
            writer='이선우'
            date='5분전'
            text='나 이선우 인데 개추 눌렀다 ㅋㅋ'
          />
          <CommnetItem
            writer='이선우'
            date='5분전'
            text='나 이선우 인데 개추 눌렀다 ㅋㅋ'
          />
          <CommnetItem
            writer='이선우'
            date='5분전'
            text='나 이선우 인데 개추 눌렀다 ㅋㅋ'
          />
        </Comment>
      </M_ProjectContainer>
    </>
  );
};

export default ProjectPage;
