import {
  M_CommentItem,
  M_CommentMain,
  M_CommentText,
  M_CommentWriterDate,
  M_CommentWriterInfo,
  M_CommentWriterName,
  M_CommentWriterNameDate,
  M_CommnetWriterImg,
} from '../../style/comment/comentItem.style';

interface CommentItemProps {
  writer: string;
  date: string;
  text: string;
}

export const CommnetItem = ({
  writer,
  date,
  text,
}: CommentItemProps) => {
  return (
    <>
      <M_CommentItem>
        <M_CommentWriterInfo>
          <M_CommnetWriterImg />
          <M_CommentWriterNameDate>
            <M_CommentWriterName>
              {writer}
            </M_CommentWriterName>
            <M_CommentWriterDate>
              {date}
            </M_CommentWriterDate>
          </M_CommentWriterNameDate>
        </M_CommentWriterInfo>
        <M_CommentMain>
          <M_CommentText>{text}</M_CommentText>
        </M_CommentMain>
      </M_CommentItem>
    </>
  );
};
