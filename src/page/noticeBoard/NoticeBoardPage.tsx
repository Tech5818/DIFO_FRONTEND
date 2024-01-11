import { Comment } from '../../components/comment/Comment';
import { CommnetItem } from '../../components/comment/CommentItem';
import { Recommend } from '../../components/recommend/Recommend';
import {
  M_NoticeBoardBox,
  M_NoticeBoardContainer,
  M_NoticeBoardDate,
  M_NoticeBoardMain,
  M_NoticeBoardText,
  M_NoticeBoardTitle,
  M_NoticeBoardWriter,
  M_NoticeBoardWriterImg,
  M_NoticeBoardWriterName,
  M_NoticeBoardWriterNameDate,
} from '../../style/noticeBoard/noticeBoard.style';

const NoticeBoardPage = () => {
  return (
    <>
      <M_NoticeBoardContainer>
        <M_NoticeBoardBox>
          <M_NoticeBoardWriter>
            <M_NoticeBoardWriterImg />
            <M_NoticeBoardWriterNameDate>
              <M_NoticeBoardWriterName>
                신권호
              </M_NoticeBoardWriterName>
              <M_NoticeBoardDate>5분전</M_NoticeBoardDate>
            </M_NoticeBoardWriterNameDate>
          </M_NoticeBoardWriter>
          <M_NoticeBoardMain>
            <M_NoticeBoardTitle>
              제목이다
            </M_NoticeBoardTitle>
            <M_NoticeBoardText>본문본문</M_NoticeBoardText>
          </M_NoticeBoardMain>
        </M_NoticeBoardBox>
        <Recommend />
        <Comment>
          <CommnetItem
            writer='이선우'
            text='나 이선우 아닌데 개추 눌렀다'
            date='5분전'
          />
        </Comment>
      </M_NoticeBoardContainer>
    </>
  );
};

export default NoticeBoardPage;
