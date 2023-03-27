import { Button, ContactEl } from 'components/Shared.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <ContactEl>
      {name}: {number}
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </ContactEl>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
  id: PropTypes.string,
};

export default ContactItem;
