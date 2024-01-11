import { useNavigate } from 'react-router-dom';
import {
  M_WorkLists,
  M_WorkListsInfos,
  M_WorkListsStack,
  M_WorkListsStacks,
  M_WorkListsTime,
  M_WorkListsTitle,
  M_WorkListsWriter,
  M_WorkListsWriterTime,
} from '../../style/workList/workLists.style';

interface WorkListsItem {
  id: string;
  type: string;
  title: string;
  writer: string;
  date: string;
  stacks: string[];
}

export const WorkListsItem = ({
  id,
  type,
  title,
  writer,
  date,
  stacks,
}: WorkListsItem) => {
  const navigator = useNavigate();

  const handleToWorks = (workId: string) => {
    navigator(`/works/${type}?id=${workId}`);
  };
  return (
    <>
      <M_WorkLists
        onClick={() => {
          handleToWorks(id);
        }}
      >
        <M_WorkListsTitle>{title}</M_WorkListsTitle>
        <M_WorkListsInfos>
          <M_WorkListsStacks>
            {stacks.map((element, idx) => (
              <M_WorkListsStack key={idx}>
                {element}
              </M_WorkListsStack>
            ))}
          </M_WorkListsStacks>
          <M_WorkListsWriterTime>
            <M_WorkListsWriter>{writer}</M_WorkListsWriter>
            <M_WorkListsTime>{date}</M_WorkListsTime>
          </M_WorkListsWriterTime>
        </M_WorkListsInfos>
      </M_WorkLists>
    </>
  );
};
