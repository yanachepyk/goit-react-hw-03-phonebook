import { Input, Label } from 'components/Shared.styled';
import PropTypes from 'prop-types';

const Filter = ({ onFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={onFilter} />
    </Label>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func,
};

export default Filter;
