import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import { Container } from './Shared.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contact'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    const isExist = this.state.contacts.some(
      contact => contact.name === name.value
    );

    if (isExist) {
      alert(`${name.value} is already in contacts.`);
    } else {
      this.setState(
        prevState => {
          return {
            ...prevState,
            contacts: [
              ...prevState.contacts,
              { name: name.value, id: nanoid(), number: number.value },
            ],
          };
        },
        () => {
          event.target.reset();
        }
      );
    }
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  handleDelete = id => {
    this.setState(prevState => ({
      ...prevState,
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.handleFormSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter onFilter={this.handleFilter} />
          <ContactList
            contacts={filteredContacts}
            onDelete={this.handleDelete}
          />
        </Section>
      </Container>
    );
  }
}
