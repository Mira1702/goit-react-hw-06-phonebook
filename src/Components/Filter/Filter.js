import React from 'react';
import { useState } from "react";
import { connect } from "react-redux";
import contactsActions from '../../Redux/Contacts/actions';

const Filter = ({ filterContact }) => {
  const [filterQuery, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.currentTarget.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    filterContact(String(filterQuery));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Find contacts by name</h3>
          <input        
            type="text"
            placeholder="Search contact"
            name="filter"
            value={filterQuery}
            onChange={handleChange}
          ></input>
        </label>
      </form>      
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  onChange: ({ value, onChange }) => dispatch(contactsActions.filterContact({ value, onChange }))
})

export default connect(null, mapDispatchToProps)(Filter);


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