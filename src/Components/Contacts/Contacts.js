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
      {contacts.map(({ id, name, number }) => (        
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onRemove={onRemove}
          />                  
      ))}
    </ul>
  );
}



// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: items.filter(
//     ({ name }) => name && name.toLowerCase().includes(filter.toLowerCase()),
//   ),
// });

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.contacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onRemove: (id) => dispatch(actions.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);