import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import styles from './PhoneBook.module.css';
import * as actions from '../../Redux/Contacts/actions';


class PhoneBook extends Component  {
    
    state = {
        contacts: [],
        name: '',
        number: '',        
    }

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleChange = event => {
        this.setState({ [event.currentTarget.name]: event.currentTarget.value });        
    }
    
    formSubmitHandler = event => {
        event.preventDefault(); 
        this.props.onSubmit({ id: shortid.generate(), ...this.state });
        this.setState({            
            name: '',
            number: '',
        }); 
    }

    render() {        
        return (            
                <form onSubmit={this.formSubmitHandler} className="form">
                   <label className={styles.label} htmlFor={this.nameInputId} >Name
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
    contacts: state.contacts.contacts,
  };
};

const mapDispatchToProps = dispatch => ({
    onSubmit: ({ name, number  }) => dispatch(actions.addContact( name, number ))
})

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);


    