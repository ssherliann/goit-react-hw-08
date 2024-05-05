import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from '../contacts/slice';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: { 
        name: contactsInitialState.filters.name,
    },
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload.inputValue;
        }
    }
});

export const { changeFilter } = filtersSlice.actions; 
export const filtersReducer = filtersSlice.reducer;
