import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = tw.div`w-fit`;

export const CustomSelectWrapper = tw.div`relative select-none w-fit`;

export const Select = tw.div`relative cursor-pointer w-fit`;

export const SelectBody = tw.div`w-fit rounded flex flex-row gap-2 py-1 bg-[rgba(148, 151, 154, 0.1)] px-4 relative cursor-pointer`;

export const SelectLabel = tw.span`font-sans text-[15px] text-white font-bold`;

export const SelectOptionsContainer = styled.div<{ isOpen?: boolean }>`
  ${tw`absolute flex top-full flex-col gap-1 left-0 right-0 w-max transition-all opacity-0 px-2 invisible pointer-events-none z-10 py-2 border border-neutral-2 bg-neutral-3 text-neutral-2`}
  ${(props) =>
    props.isOpen &&
    `opacity: 1;
    visibility: visible;
    pointer-events: all;
    margin-top: 8px;
    box-shadow: -1px 1px 2px rgba(67, 70, 74, 0.0001),
      -2px 2px 5px rgba(67, 86, 100, 0.123689);
    border-radius: 8px;`}
`;

export const SelectOption = styled.div<{ selected?: boolean }>`
  ${tw`flex py-1 flex-row w-fit gap-2 cursor-pointer items-center px-2 justify-center rounded text-neutral-1 hover:bg-neutral-2`}

  ${(params) => params.selected && tw`bg-neutral-2`}

  &.has-avatar {
    ${tw`!w-full justify-start`}
  }
`;
