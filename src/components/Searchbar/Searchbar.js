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
          onSubmit(evt.target.elements.query.value);
          evt.target.reset();
        }}
      >
        <Button type="submit">
          <HiOutlineMagnifyingGlass />
        </Button>

        <Input
          type="text"
          name='query'
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarWrapper>
  );
};
