import {
  SearchbarWrapper,
  SearchForm,
  Button,
  ButtonLabel,
  Input,
} from './Searchbar.styled';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarWrapper>
      <SearchForm
        onSubmit={evt => {
          evt.preventDefault();
          onSubmit(evt.target.value);
          evt.target.reset();
        }}
      >
        <Button type="submit">
          <HiOutlineMagnifyingGlass />
        </Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarWrapper>
  );
};
