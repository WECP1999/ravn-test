import { Outlet, Link } from 'react-router-dom';
import { Body, Layout, Nav } from './styles/style';

const DashboardLayout = () => {
  return (
    <Layout>
      <Nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/my-tasks">My tasks</Link>
      </Nav>
      <Body>
        <Outlet />
      </Body>
    </Layout>
  );
};

export default DashboardLayout;
