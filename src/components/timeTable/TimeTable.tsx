import { Variants } from 'framer-motion';
import {
  M_TimeTable,
  M_TimeTableContainer,
  M_TimeTableTbody,
  M_TimeTableTh,
  M_TimeTableThead,
  M_TimeTableTheadTh,
  M_TimeTableTitle,
  M_TimeTableTr,
} from '../../style/timeTable/timetable.style';
import { Mobile } from '../../Responsive';

export const TimeTable = ({
  variants,
}: {
  variants: Variants;
}) => {
  return (
    <>
      <Mobile>
        <M_TimeTableContainer variants={variants}>
          <M_TimeTableTitle>시간표</M_TimeTableTitle>
          <M_TimeTable>
            <M_TimeTableThead>
              <M_TimeTableTr>
                <M_TimeTableTheadTh></M_TimeTableTheadTh>
                <M_TimeTableTheadTh>월</M_TimeTableTheadTh>
                <M_TimeTableTheadTh>화</M_TimeTableTheadTh>
                <M_TimeTableTheadTh>수</M_TimeTableTheadTh>
                <M_TimeTableTheadTh>목</M_TimeTableTheadTh>
                <M_TimeTableTheadTh>금</M_TimeTableTheadTh>
              </M_TimeTableTr>
            </M_TimeTableThead>
            <M_TimeTableTbody>
              <M_TimeTableTr>
                <M_TimeTableTh>1</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
              </M_TimeTableTr>
              <M_TimeTableTr>
                <M_TimeTableTh>2</M_TimeTableTh>
                <M_TimeTableTh>컴퓨터 그래픽</M_TimeTableTh>
                <M_TimeTableTh>인공지능 기초</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
              </M_TimeTableTr>
              <M_TimeTableTr>
                <M_TimeTableTh>3</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
              </M_TimeTableTr>
              <M_TimeTableTr>
                <M_TimeTableTh>4</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
              </M_TimeTableTr>
              <M_TimeTableTr>
                <M_TimeTableTh>5</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
              </M_TimeTableTr>
              <M_TimeTableTr>
                <M_TimeTableTh>6</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
              </M_TimeTableTr>
              <M_TimeTableTr>
                <M_TimeTableTh>7</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
                <M_TimeTableTh>수학</M_TimeTableTh>
              </M_TimeTableTr>
            </M_TimeTableTbody>
          </M_TimeTable>
        </M_TimeTableContainer>
      </Mobile>
    </>
  );
};
