import { Quick } from '../../components/quick/Quick';
import { Recent } from '../../components/recent/Recent';
import { TimeTable } from '../../components/timeTable/TimeTable';
import { M_HomeContent } from '../../style/home/home.style';

export const HomePage = () => {
  return (
    <>
      <M_HomeContent>
        <Quick />
        <Recent />
        <TimeTable />
      </M_HomeContent>
    </>
  );
};
