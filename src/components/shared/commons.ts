import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

const ButtonCSS = css<{ typeButton?: 'primary' | 'text' }>`
  ${tw`bg-primary-4 text-white p-2.5 transition-all border-none border-0 hover:outline-0 hover:border-0 hover:bg-primary-2 target:bg-primary-3 focus:bg-primary-3 disabled:bg-neutral-2 outline-0 rounded-[8px]`}

  ${(props) =>
    props.typeButton === 'text' &&
    tw`bg-transparent hover:bg-neutral-2 focus:!bg-neutral-3 target:!bg-neutral-3 disabled:text-neutral-2`}
`;

export const Text = tw.p`text-base font-sans`;

export const Avatar = tw.img`rounded-full w-12 h-12 object-cover aspect-square cursor-pointer`;

export const Label = tw.label`text-base font-sans`;

export const Button = styled.button<{ typeButton?: 'primary' | 'text' }>`
  ${ButtonCSS}
`;

export const NavLinkButton = styled(NavLink)<{typeButton?: 'primary' | 'text';}>`
  ${ButtonCSS}
  ${tw`decoration-0 text-neutral-1 hover:text-neutral-1`}
`;

export const Checkbox = tw.input`appearance-none w-5 h-5 cursor-pointer rounded transition-colors border-2 border-neutral-1 bg-transparent duration-300 ease-in-out checked:text-neutral-1 checked:bg-primary-2`;

export const Input = styled.input`
  ${tw`w-full bg-transparent font-normal outline-0 focus:border-b focus:border-neutral-1 focus:outline-0 text-neutral-2 placeholder:text-neutral-2`}
  border-bottom: solid 0px #ffffff;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    calc(100% - 1px) calc(100% - 1px),
    calc(0% + 1px) calc(100% - 1px)
  );
  &:focus {
    border-bottom: solid 1px #ffffff;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  transition: all 0.3s linear;
`;

export const Chip = styled.div`
  ${tw`py-1 px-4 flex flex-row gap-2 text-base font-sans text-neutral-1 bg-[rgba(148, 151, 154, 0.1)]`}

  &.late {
    ${tw`bg-[rgba(218, 88, 75, 0.1)] text-primary-4`}
  }
`;

export const Skeleton = tw.div`bg-neutral-3 animate-pulse p-4 w-full`;
