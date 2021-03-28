import shortid from 'shortid';
import types from './types';

const addContact = ({ name, number }) => ({
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        name,
        number
    }
});

const deleteContact = contatcId => ({
    type: types.DELETE,
    payload: contatcId
});

const filterContact = contactFilter => ({
    type: types.FILTER,
    payload: contactFilter,
})


export default { addContact, deleteContact, filterContact };