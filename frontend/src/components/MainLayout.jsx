import { Outlet } from 'react-router-dom';
import { BreadCrumb, Header } from '../components';

const MainLayout = () => {
  return (
    <>
      <Header>React Test App</Header>
      <BreadCrumb />
      <main className="d-flex justify-content-center">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;


