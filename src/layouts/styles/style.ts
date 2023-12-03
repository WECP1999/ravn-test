import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Layout = tw.article`bg-neutral-5 w-full h-screen p-8 box-border`;

export const Container = tw.section`flex flex-row gap-8 bg-neutral-5 w-full h-full`;

export const Nav = tw.nav`flex flex-col gap-11 items-center bg-neutral-4 w-full max-w-[232px] py-3.5 rounded-3xl`;

export const NavBody = tw.section`flex flex-col gap-2 w-[232px]`;

export const Body = tw.section`w-full flex flex-col gap-4`;

export const OutletContainer = tw.section``;

export const TopBar = tw.div`flex flex-row justify-between w-full mt-3`;

export const TopBarLink = styled(NavLink)`
  ${tw`p-2.5 rounded-[8px] hover:text-primary-4`}
  transition: all linear 0.1s;
  &.active {
    ${tw`text-primary-4 border border-primary-4`}
    background: linear-gradient(
    90deg,
    rgba(186, 37, 37, 0) 0%,
    rgba(210, 77, 77, 0.1) 100%
  );
  }
`;

export const TopBarLinkContainer = tw.div`flex flex-row`;
