import { Outlet } from 'react-router-dom';
import { Body, Layout, Nav } from './styles/style';

const DashboardLayout = () => {
  return (
    <Layout>
      <Nav>Soy el nav</Nav>
      <Body>
        <Outlet />
      </Body>
    </Layout>
  );
};

export default DashboardLayout;
