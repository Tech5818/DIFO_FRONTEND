import { Route, Routes } from 'react-router-dom';
import { HomePage } from './page/home/HomePage';
import { WorksPage } from './page/works/WorksPage';
import { Header } from './components/header/Header';
import { Portfolio } from './page/portfolio/Portfolio';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/works' element={<WorksPage />} />
        <Route
          path='/works/portfolio/*'
          element={<Portfolio />}
        />
      </Routes>
    </>
  );
}

export default App;
