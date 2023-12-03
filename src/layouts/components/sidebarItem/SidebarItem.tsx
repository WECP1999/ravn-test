import { Text } from '../../../components/shared/commons';
import { SidebarItemContainer } from './styles/style';

type SidebarItemProps = {
  icon?: React.ReactNode;
  children: string;
  to: string;
};

const SidebarItem = ({ children, icon: Icon, to }: SidebarItemProps) => {
  return (
    <SidebarItemContainer
      to={to}
      className={({ isActive }) => (isActive ? 'active' : '')}
    >
      {Icon && Icon}
      <Text>{children}</Text>
    </SidebarItemContainer>
  );
};

export default SidebarItem;
