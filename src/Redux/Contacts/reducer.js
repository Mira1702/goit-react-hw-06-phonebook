import { combineReducers } from 'redux';
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";

console.log(actions)

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]


const contacts = createReducer(initialState, {  
'contact/add': (state, {payload}) => [...state, payload],
'contact/delete': (state, {payload}) =>
  state.filter((contact) => contact.id !== payload),
});


const filter = createReducer("", {
  'contact/filter': (state, {payload}) => payload,
});


export default combineReducers({
  contacts,
  filter
});