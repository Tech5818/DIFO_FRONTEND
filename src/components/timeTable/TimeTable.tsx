import {
  M_TimeTable,
  M_TimeTableContainer,
  M_TimeTableHeader,
  M_TimeTableHeaderDay,
} from '../../style/timeTable/timetable.style';

export const TimeTable = () => {
  return (
    <>
      <M_TimeTableContainer>
        <M_TimeTable>
          <M_TimeTableHeader>
            <M_TimeTableHeaderDay>
              {/**교시를 위해 비워두는 칸 */}
            </M_TimeTableHeaderDay>
            <M_TimeTableHeaderDay>월</M_TimeTableHeaderDay>
            <M_TimeTableHeaderDay>화</M_TimeTableHeaderDay>
            <M_TimeTableHeaderDay>수</M_TimeTableHeaderDay>
            <M_TimeTableHeaderDay>목</M_TimeTableHeaderDay>
            <M_TimeTableHeaderDay>금</M_TimeTableHeaderDay>
          </M_TimeTableHeader>
        </M_TimeTable>
      </M_TimeTableContainer>
    </>
  );
};
