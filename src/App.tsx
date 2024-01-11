import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
<<<<<<< HEAD
import { Portfolio } from './page/portfolio/Portfolio';
import { Project } from './page/project/Project';
=======
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
>>>>>>> a3eb41d520aa99a8ea52b3e5ad1c8194bd255e89

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
<<<<<<< HEAD
          path='/works/portfolio/*'
          element={<Portfolio />}
=======
          path='/works/portfolio'
          element={<PortfolioPage />}
          loader={PortfolioPage.load}
>>>>>>> a3eb41d520aa99a8ea52b3e5ad1c8194bd255e89
        />
        <Route
          path='/works/project/*'
          element={<Project />}
        />
      </Routes>
    </>
  );
}

export default App;
