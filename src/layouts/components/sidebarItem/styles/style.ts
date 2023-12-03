import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';

export const SidebarItemContainer = styled(NavLink)`
  ${tw`flex flex-row gap-4 items-center justify-start text-base p-4 tracking-[0.75px] text-neutral-2 hover:text-primary-4 `}
  transition: all linear 0.1s;
  &.active {
    ${tw`text-primary-4 border-r-4 border-primary-4`}
    background: linear-gradient(
    90deg,
    rgba(186, 37, 37, 0) 0%,
    rgba(210, 77, 77, 0.1) 100%
  );
  }
`;
