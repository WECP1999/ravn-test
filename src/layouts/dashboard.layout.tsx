import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Body,
  Container,
  Layout,
  Nav,
  NavBody,
  OutletContainer,
  TopBar,
  TopBarLink,
  TopBarLinkContainer,
} from './styles/style';
import SidebarItem from './components/sidebarItem/';
import RavnLogo from '../assets/ravn-logo.svg';
import DashboardIcon from 'remixicon-react/DashboardLineIcon';
import MenuIcon from 'remixicon-react/MenuFillIcon';
import AddIcon from 'remixicon-react/AddLineIcon';
import { ReactSVG } from 'react-svg';
import { Button } from '../components/shared/commons';
import SearchBar from './components/searchBar';
import CreateModalContext from '../context/createModalContext/CreateModalContext';
import { Toaster } from 'react-hot-toast';

const DashboardLayout = () => {
  const modalContext = useContext(CreateModalContext);

  const handleOnClick = () => {
    if (modalContext) {
      modalContext.setShowModal(true);
    }
  };

  return (
    <Layout>
      <Container>
        <Nav>
          <ReactSVG src={RavnLogo} />
          <NavBody>
            <SidebarItem
              icon={<DashboardIcon />}
              to="/"
            >
              Dashboard
            </SidebarItem>
            <SidebarItem
              icon={<MenuIcon />}
              to="/my-tasks"
            >
              My tasks
            </SidebarItem>
          </NavBody>
        </Nav>
        <Body>
          <SearchBar placeholder="Search" />
          <TopBar>
            <TopBarLinkContainer>
              <TopBarLink to="/my-tasks">
                <MenuIcon />
              </TopBarLink>
              <TopBarLink to="/">
                <DashboardIcon />
              </TopBarLink>
            </TopBarLinkContainer>
            <Button onClick={handleOnClick}>
              <AddIcon />
            </Button>
          </TopBar>
          <OutletContainer>
            <Outlet />
          </OutletContainer>
        </Body>
        <Toaster position="bottom-right" />
      </Container>
    </Layout>
  );
};

export default DashboardLayout;
