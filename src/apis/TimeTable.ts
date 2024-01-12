import axios from 'axios';

export const getTimeTable = async () => {
  const data = await axios.get(
    `https://open.neis.go.kr/hub/hisTimetable?KEY=${
      import.meta.env.VITE_TIMETABLE_KEY
    }&Type=json&pIndex=1&sSize=100&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010572&TI_FROM_YMD=20240108&TI_TO_YMD=20240112&GRADE=1&CLASS_NM=3`,
  );
  let response: string[] = [];
  data.data.hisTimetable[1].row.map((element: any) =>
    response.push(
      element.ITRT_CNTNT.replace(/\*\s*/g, '').replace(
        '동아리활동',
        '음악',
      ),
    ),
  );
  return response;
};
