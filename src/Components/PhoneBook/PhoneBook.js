import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import styles from './PhoneBook.module.css';
import contactsActions from '../../Redux/Contacts/actions';


class PhoneBook extends Component  {
    
    state = {        
        contacts: [],
        name: '',
        number: '',        
    }

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({
            [name]:value
        })        
    }    
    
    handleSubmit = event => {
        event.preventDefault();        

        this.props.onSubmit(this.state);
        this.reset();
    }
    reset = () => {
        this.setState({
            name: '',
            number: ''
        });
    }

    formSubmitHandler = ({name, number}) => {
        const contact = {
            id: shortid.generate(),
            name,
            number
        };

        const inContacts = this.state.contacts.find(
            item => item.name === contact.name,
        );
        if (inContacts !== undefined) {
            alert(`${contact.name} is already in contacts`);        
        return;
        } 
        this.setState(({ contacts }) => ({
            contacts: [contact, ...contacts],
        }));     
    }
    
        
    render() {        
        return (            
                <form onSubmit={this.handleSubmit}  className="form">
                   <label className={styles.label} htmlFor={this.nameInputId}>Name
                       <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange} 
                        id={this.nameInputId}
                       ></input>
                   </label>
                   <label className={styles.label} htmlFor={this.numberInputId}>Number   
                       <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        id={this.numberInputId}
                       ></input>
                    </label>
                    <button 
                        type="submit"
                        className={styles.button}                        
                    >Add contact</button>
                </form>            
        )
    }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = dispatch => ({
    onSubmit: ({ name, number }) => dispatch(contactsActions.addContact({ name, number }))
})

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);