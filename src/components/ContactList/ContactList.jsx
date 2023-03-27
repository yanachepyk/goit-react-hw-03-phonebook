import { Contacts } from 'components/Shared.styled';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <Contacts>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
        />
      ))}
    </Contacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};

export default ContactList;
