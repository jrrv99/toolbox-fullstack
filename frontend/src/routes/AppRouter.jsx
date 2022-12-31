import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loader, MainLayout } from '../components';
import { Routes as Paths } from './Routes';

const Home = lazy(() => import('../pages/Home'));
const Files = lazy(() => import('../pages/Files'));
const FileDetailView = lazy(() => import('../pages/FileDetailView'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={Paths.HOME} element={<Home />} />

            <Route path={Paths.FILES}>
              <Route index element={<Files />} />
              <Route path={`:fileName`} element={<FileDetailView />} />
            </Route>
            <Route path="*" element={<h1>Route Not Found</h1>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;

