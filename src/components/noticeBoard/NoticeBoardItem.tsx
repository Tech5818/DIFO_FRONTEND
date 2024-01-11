import {
  M_NoticeBoardsItem,
  M_NoticeBoardsItemDate,
  M_NoticeBoardsItemTitle,
  M_NoticeBoardsItemWriter,
  M_NoticeBoardsItemWriterDate,
} from '../../style/noticeBoards/noticeBoardsLists.style';

interface NoticeBoardItemProps {
  title: string;
  writer: string;
  date: string;
}

export const NoticeBoardItem = ({
  title,
  writer,
  date,
}: NoticeBoardItemProps) => {
  return (
    <>
      <M_NoticeBoardsItem>
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
