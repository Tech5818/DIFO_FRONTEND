import { useNavigate } from 'react-router-dom';
import { NoticeBoardsList } from '../../../components/noticeBoards/NoticeBoardsList';
import {
  M_NoticeBoardsButton,
  M_NoticeBoardsContainer,
  M_NoticeBoardsToWrite,
  M_NoticeBoardsWriteText,
  M_NoticeBoardsWriteTextImpact,
  M_NoticeBoardsWriteTexts,
} from '../../../style/noticeBoards/noticeBoards.style';

const NoticeBoardsPage = () => {
  const navigator = useNavigate();

  const handleToWriteNoticeBoard = () => {
    navigator('/boards/write');
  };

  return (
    <>
      <M_NoticeBoardsContainer>
        <M_NoticeBoardsToWrite>
          <M_NoticeBoardsWriteTexts>
            <M_NoticeBoardsWriteText>
              전하고 싶은&nbsp;
            </M_NoticeBoardsWriteText>
            <M_NoticeBoardsWriteTextImpact>
              소식
            </M_NoticeBoardsWriteTextImpact>
            <M_NoticeBoardsWriteText>
              이 있을땐?
            </M_NoticeBoardsWriteText>
          </M_NoticeBoardsWriteTexts>
          <M_NoticeBoardsButton
            onClick={handleToWriteNoticeBoard}
          >
            글쓰기
          </M_NoticeBoardsButton>
        </M_NoticeBoardsToWrite>
        <NoticeBoardsList />
      </M_NoticeBoardsContainer>
    </>
  );
};

export default NoticeBoardsPage;
