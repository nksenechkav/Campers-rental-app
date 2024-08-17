// src/redux/campers/slice.js

import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialCampers = {
    campers: {
		items: [],
    isLoading: false,
    error: null,
	},
}

const campersSlice = createSlice({
  name: "campers",
  initialState: initialCampers,

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.campers.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      // .addCase(addContact.pending, handlePending)
      // .addCase(addContact.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.contacts.items.push(action.payload);
      // })
      // .addCase(addContact.rejected, handleRejected)
      // .addCase(deleteContact.pending, handlePending)
      // .addCase(deleteContact.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   const index = state.contacts.items.findIndex(
      //     (contact) => contact.id === action.payload.id
      //   );
      //   state.contacts.items.splice(index, 1);
      // })
      // .addCase(deleteContact.rejected, handleRejected)
  }
});

export const campersReducer = campersSlice.reducer;