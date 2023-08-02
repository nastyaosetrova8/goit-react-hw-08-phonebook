import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";


export  const getAllContactsThunk = createAsyncThunk(
    'contacts/getContacts',
    async (_, thunkAPI) => {
try {
    const res = await axios.get('/contacts');
    return res.data;
} catch (error) {
    return thunkAPI.rejectWithValue(error.message);
}
    }
);

export  const addContactThunk = createAsyncThunk(
    'contact/addContact',
    async (contact, thunkAPI) => {
try {
    const res = await axios.post('/contacts', contact);
    return res.data;   
} catch (error) {
    return thunkAPI.rejectWithValue(error.message);
}
    }
);

export const deleteContactThunk = createAsyncThunk(
    'contact/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const res = await axios.delete(`/contacts/${contactId}`);
    return res.data; 
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);