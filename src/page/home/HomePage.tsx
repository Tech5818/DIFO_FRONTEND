import { Header } from '../../components/header/Header';
import { Quick } from '../../components/quick/Quick';
import { Recent } from '../../components/recent/Recent';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Quick />
      <Recent />
    </>
  );
};
