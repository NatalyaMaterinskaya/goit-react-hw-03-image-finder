import {
  SearchbarWrapper,
  SearchForm,
  Button,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarWrapper>
      <SearchForm>
        <Button type="submit">
          <ButtonLabel class="button-label">Search</ButtonLabel>
        </Button>

        <Input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarWrapper>
  );
};
