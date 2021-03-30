import React from 'react';
import { connect } from "react-redux";
import * as actions from '../../Redux/Contacts/actions';

const Filter = ({ value, onChange }) => {  
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input        
        type="text"
        placeholder="Search contact"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const mapStateToProps = (contacts) => {
  console.log(contacts.contacts.filter)
  return {
    value: contacts.contacts.filter,    
  };
  
};



const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.filterContact(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);


// const Filter = ({ value, onChange }) => {  
//   return (
//     <div>
//       <h3>Find contacts by name</h3>
//       <input        
//         type="text"
//         placeholder="Search contact"
//         name="filter"
//         value={value}
//         onChange={onChange}
//       ></input>
//     </div>
//   );
// };