import PropTypes from 'prop-types';

import { Btn } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <Btn type="button" onClick={onClick}>
      Load more
    </Btn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
