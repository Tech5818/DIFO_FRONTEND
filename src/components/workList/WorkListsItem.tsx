import {
  M_WorkLists,
  M_WorkListsTime,
  M_WorkListsTitle,
  M_WorkListsWriter,
  M_WorkListsWriterTime,
} from '../../style/workList/workLists.style';

interface WorkListsItem {
  title: string;
  writer: string;
  date: string;
}

export const WorkListsItem = ({
  title,
  writer,
  date,
}: WorkListsItem) => {
  return (
    <>
      <M_WorkLists>
        <M_WorkListsTitle>{title}</M_WorkListsTitle>
        <M_WorkListsWriterTime>
          <M_WorkListsWriter>{writer}</M_WorkListsWriter>
          <M_WorkListsTime>{date}</M_WorkListsTime>
        </M_WorkListsWriterTime>
      </M_WorkLists>
    </>
  );
};
