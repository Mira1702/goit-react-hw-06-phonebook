import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../Redux/Contacts/actions';

const ContactItem = ({ name, number, id, onRemove }) => {  
  return (
    <li >
      <span>{name}</span>: <span>{number}</span>
      <button        
        type="button"
        onClick={() => {onRemove(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

function Contacts ({ contacts, filter }) {
  const filterContacts = (contacts) => {
    const normalizedFilter = filter.toLowerCase();
    
      return contacts.filter(contact => {
        return contact.name.toLowerCase().includes(normalizedFilter);
      });
    
  };
  console.log(contacts)
  return (
    <ul>
      {filterContacts(contacts).map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
}

// const Contacts = ({ contacts, onRemove }) => {  
//   return (
//     <ul>
//       {contacts.map(item => (
//         <ContactItem
//           key={item.id}
//           id={item.id}
//           name={item.name}
//           number={item.number}
//           onRemove={onRemove}
//         />
//       ))}
//     </ul>
//   );
// };

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onRemove: (id) => dispatch(contactsActions.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);