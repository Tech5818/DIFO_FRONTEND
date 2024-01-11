import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import loadable from '@loadable/component';

const HomePage = loadable(
  () => import(`./page/home/HomePage`),
);

const WorkPage = loadable(
  () => import('./page/works/WorksPage'),
);

const PortfolioPage = loadable(
  () => import('./page/portfolio/Portfolio'),
);

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
          loader={HomePage.load}
        />
        <Route
          path='/works'
          element={<WorkPage />}
          loader={WorkPage.load}
        />
        <Route
          path='/works/portfolio'
          element={<PortfolioPage />}
          loader={PortfolioPage.load}
        />
      </Routes>
    </>
  );
}

export default App;
