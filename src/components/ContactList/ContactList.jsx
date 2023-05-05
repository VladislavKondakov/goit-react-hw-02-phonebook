import React from "react";

class ContactList extends React.Component {
  handleDeleteContact = (id) => {
    this.props.onDeleteContact(id);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search contacts..."
          value={this.props.filter}
          onChange={this.props.onFilterChange}
        />
        <ul>
          {this.props.contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} ({contact.number})
              <button onClick={() => this.handleDeleteContact(contact.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
