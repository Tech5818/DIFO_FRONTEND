import {
  M_WorkLists,
  M_WorkListsContainer,
  M_WorkListsSelect,
  M_WorkListsTime,
  M_WorkListsTitle,
  M_WorkListsWriter,
  M_WorkListsWriterTime,
} from '../../style/workList/workLists.style';

export const WorkLists = () => {
  return (
    <>
      <M_WorkListsContainer>
        <M_WorkListsSelect icon={<></>}>
          <option>최근</option>
          <option>인기</option>
        </M_WorkListsSelect>
        <M_WorkLists>
          <M_WorkListsTitle>
            제목임. 암튼 제목임
          </M_WorkListsTitle>
          <M_WorkListsWriterTime>
            <M_WorkListsWriter>신권호</M_WorkListsWriter>
            <M_WorkListsTime>5분전</M_WorkListsTime>
          </M_WorkListsWriterTime>
        </M_WorkLists>
        <M_WorkLists>
          <M_WorkListsTitle>
            제목임. 암튼 제목임
          </M_WorkListsTitle>
          <M_WorkListsWriterTime>
            <M_WorkListsWriter>신권호</M_WorkListsWriter>
            <M_WorkListsTime>5분전</M_WorkListsTime>
          </M_WorkListsWriterTime>
        </M_WorkLists>
        <M_WorkLists>
          <M_WorkListsTitle>
            제목임. 암튼 제목임
          </M_WorkListsTitle>
          <M_WorkListsWriterTime>
            <M_WorkListsWriter>신권호</M_WorkListsWriter>
            <M_WorkListsTime>5분전</M_WorkListsTime>
          </M_WorkListsWriterTime>
        </M_WorkLists>
      </M_WorkListsContainer>
    </>
  );
};
