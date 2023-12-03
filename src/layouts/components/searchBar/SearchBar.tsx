import { useState } from 'react';
import { InputContainer, SearchContainer } from './styles/style';
import SearchIcon from 'remixicon-react/SearchLineIcon';
import NotificationIcon from 'remixicon-react/NotificationLineIcon';
import CloseIcon from 'remixicon-react/CloseCircleLineIcon';
import { Avatar, Input, Label } from '../../../components/shared/commons';
import AvatarPlaceholder from '../../../assets/avatar-placeholder.png';
import 'twin.macro';

type SearchBarProps = {
  placeholder?: string;
};

const SearchBar = ({ placeholder }: SearchBarProps) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContainer>
      <Label
        htmlFor="search"
        tw="w-5 h-5"
      >
        <SearchIcon tw="w-5 h-5" />
      </Label>
      <InputContainer>
        <Input
          id="search"
          name="search"
          aria-label="search"
          placeholder={placeholder}
          onChange={(event) => setSearch(event.target.value)}
          value={search}
          autoComplete="off"
        />
        {search.length > 0 && (
          <CloseIcon
            className="clear"
            onClick={() => setSearch('')}
            tw="absolute -top-1 cursor-pointer bottom-0 right-0"
          />
        )}
      </InputContainer>
      <div tw="w-5 h-5">
        <NotificationIcon tw="w-5 h-5" />
      </div>
      <Avatar
        tw="cursor-pointer"
        alt="placeholder-avatar"
        src={AvatarPlaceholder}
      />
    </SearchContainer>
  );
};

export default SearchBar;
