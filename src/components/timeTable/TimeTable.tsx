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
import { useEffect, useState } from 'react';
import { getTimeTable } from '../../apis/TimeTable';

export const TimeTable = ({
  variants,
}: {
  variants: Variants;
}) => {
  const [Classes, setClasses] = useState<string[]>();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTimeTable();
      console.log(data);
      setClasses(data);
    };
    fetchData();
  }, []);
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
                <M_TimeTableTh>
                  {Classes && Classes[0]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[7]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[13]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[19]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[26]}
                </M_TimeTableTh>
              </M_TimeTableTr>
              <M_TimeTableTr>
                <M_TimeTableTh>2</M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[1]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[8]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[14]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[20]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[27]}
                </M_TimeTableTh>
              </M_TimeTableTr>
              <M_TimeTableTr>
                <M_TimeTableTh>3</M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[2]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[9]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[15]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[21]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[28]}
                </M_TimeTableTh>
              </M_TimeTableTr>
              <M_TimeTableTr>
                <M_TimeTableTh>4</M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[3]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[10]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[16]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[22]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[29]}
                </M_TimeTableTh>
              </M_TimeTableTr>
              <M_TimeTableTr>
                <M_TimeTableTh>5</M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[4]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[11]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[17]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[23]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[30]}
                </M_TimeTableTh>
              </M_TimeTableTr>
              <M_TimeTableTr>
                <M_TimeTableTh>6</M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[5]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[12]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[18]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[24]}
                </M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[31]}
                </M_TimeTableTh>
              </M_TimeTableTr>
              <M_TimeTableTr>
                <M_TimeTableTh>7</M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[6]}
                </M_TimeTableTh>
                <M_TimeTableTh></M_TimeTableTh>
                <M_TimeTableTh></M_TimeTableTh>
                <M_TimeTableTh>
                  {Classes && Classes[25]}
                </M_TimeTableTh>
                <M_TimeTableTh></M_TimeTableTh>
              </M_TimeTableTr>
            </M_TimeTableTbody>
          </M_TimeTable>
        </M_TimeTableContainer>
      </Mobile>
    </>
  );
};
