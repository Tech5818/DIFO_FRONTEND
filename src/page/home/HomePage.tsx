import { Quick } from '../../components/quick/Quick';
import { Recent } from '../../components/recent/Recent';
import { TimeTable } from '../../components/timeTable/TimeTable';
import { M_HomeContent } from '../../style/home/home.style';

const containerAnimation = {
  close: { opacity: 0 },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const itemAnimation = {
  close: { opacity: 0, y: '100%' },
  open: { opacity: 1, y: 0 },
};

export const HomePage = () => {
  return (
    <>
      <M_HomeContent
        initial='close'
        animate='open'
        variants={containerAnimation}
      >
        <Quick />
        <Recent variants={itemAnimation} />
        <TimeTable variants={itemAnimation} />
      </M_HomeContent>
    </>
  );
};
