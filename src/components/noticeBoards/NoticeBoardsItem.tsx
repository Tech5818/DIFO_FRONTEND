import { useNavigate } from 'react-router-dom';
import {
  M_NoticeBoardsItem,
  M_NoticeBoardsItemDate,
  M_NoticeBoardsItemTitle,
  M_NoticeBoardsItemWriter,
  M_NoticeBoardsItemWriterDate,
} from '../../style/noticeBoards/noticeBoardsLists.style';

interface NoticeBoardItemProps {
  id: number;
  title: string;
  writer: string;
  date: string;
}

export const NoticeBoardItem = ({
  id,
  title,
  writer,
  date,
}: NoticeBoardItemProps) => {
  const navigation = useNavigate();

  const handleToBoard = (boardId: number) => {
    navigation(`/boards/board?${boardId}`);
  };

  return (
    <>
      <M_NoticeBoardsItem
        onClick={() => {
          handleToBoard(id);
        }}
      >
        <M_NoticeBoardsItemTitle>
          {title}
        </M_NoticeBoardsItemTitle>
        <M_NoticeBoardsItemWriterDate>
          <M_NoticeBoardsItemWriter>
            {writer}
          </M_NoticeBoardsItemWriter>
          <M_NoticeBoardsItemDate>
            {date}
          </M_NoticeBoardsItemDate>
        </M_NoticeBoardsItemWriterDate>
      </M_NoticeBoardsItem>
    </>
  );
};
