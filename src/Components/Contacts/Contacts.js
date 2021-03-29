import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Redux/Contacts/actions';

const ContactItem = ({ id, name, number, onRemove }) => {  
  return (
    <li id={id}>
      <span>{name}</span>: <span>{number}</span>
      <button type="button" id={id} onClick={() => onRemove(id)} >Delete</button>
    </li>
  );
};

const Contacts = ({ contacts, onRemove } ) => {  
  
  return (
    <ul>
      {contacts.map((contact) => (        
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onRemove={onRemove}
          />                  
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.contacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onRemove: (id) => dispatch(actions.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);