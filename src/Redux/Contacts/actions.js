import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import types from './types';

export const addContact = createAction(types.ADD, (name, number) => {
    return {
        payload: {
            id: shortid.generate(),
            name,
            number
        }
    }
})

export const deleteContact = createAction(types.DELETE) 

export const filterContact = createAction(types.FILTER)

// export default { addContact, deleteContact, filterContact };