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
  () => import('./page/portfolio/PortfolioPage'),
);

const ProjectPage = loadable(
  () => import('./page/project/ProjectPage'),
);

const NoticeBoardsPage = loadable(
  () => import('./page/noticeBoards/NoticeBoardsPage'),
);

const NoticeBoardPage = loadable(
  () => import('./page/noticeBoard/NoticeBoardPage'),
);

const NoticeBoardWritePage = loadable(
  () =>
    import('./page/noticeBoardWrite/NoticeBoardWritePage'),
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
          path='/works/portfolio/*'
          element={<PortfolioPage />}
          loader={PortfolioPage.load}
        />
        <Route
          path='/works/project/*'
          element={<ProjectPage />}
          loader={ProjectPage.load}
        />
        <Route
          path='/boards'
          element={<NoticeBoardsPage />}
          loader={NoticeBoardsPage.load}
        />
        <Route
          path='/boards/board/*'
          element={<NoticeBoardPage />}
          loader={NoticeBoardPage.load}
        />
        <Route
          path='/boards/write'
          element={<NoticeBoardWritePage />}
          loader={NoticeBoardWritePage.load}
        />
      </Routes>
    </>
  );
}

export default App;
