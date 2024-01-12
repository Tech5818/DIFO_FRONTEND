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
  () =>
    import(
      './page/noticeBoard/noticeBoards/NoticeBoardsPage'
    ),
);

const NoticeBoardPage = loadable(
  () => import('./page/noticeBoard/NoticeBoardPage'),
);

const NoticeBoardWritePage = loadable(
  () =>
    import('./page/noticeBoardWrite/NoticeBoardWritePage'),
);

const MessageListPage = loadable(
  () => import('./page/messageList/MessageListPage'),
);

const MessagePage = loadable(
  () => import('./page/message/MessagePage'),
);

const PortfolioWritePage = loadable(
  () => import('./page/portfolioWrite/PortfolioWritePage'),
);

const ProjectWritePage = loadable(
  () => import('./page/projectWrite/ProjectWritePage'),
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
          path='/works/portfolio/:portfolioId'
          element={<PortfolioPage />}
          loader={PortfolioPage.load}
        />
        <Route
          path='/works/project/:projectId'
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
        <Route
          path='/messageList'
          element={<MessageListPage />}
          loader={MessageListPage.load}
        />
        <Route
          path='/messageList/message/*'
          element={<MessagePage />}
          loader={MessagePage.load}
        />
        <Route
          path='/works/portfolio/write'
          element={<PortfolioWritePage />}
          loader={PortfolioWritePage.load}
        />
        <Route
          path='/works/project/write'
          element={<ProjectWritePage />}
          loader={ProjectWritePage.load}
        />
      </Routes>
    </>
  );
}

export default App;
