import React from "react";
import AddContactForm from "./AddContactForm/AddContactForm";
import ContactList from "./ContactList/ContactList";

 export class App extends React.Component {
  state = {
    contacts: [],
    filter: ""
  };

   deleteContact = (id) => {
  this.setState({
    contacts: this.state.contacts.filter((contact) => contact.id !== id)
  });
};
  addNewContact = (newContact) => {
    const isDuplicate = this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`Contact with name ${newContact.name} already exists!`);
    } else {
      this.setState({
        contacts: [...this.state.contacts, newContact]
      });
    }
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const filteredContacts = this.state.contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(this.state.filter.toLowerCase());
    });

    return (
      <div>
        <AddContactForm onAddNewContact={this.addNewContact} />
       <ContactList
  contacts={filteredContacts}
  onFilterChange={this.handleFilterChange}
  filter={this.state.filter}
  onDeleteContact={this.deleteContact}
/>

      </div>
    );
  }
}


