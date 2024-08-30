// src/redux/campers/selectors.js

export const selectCampers = (state) => state.campers.items;

export const selectFavouritesCampers = (state) => 
    state.campers.items.filter(camper => state.campers.favourites.includes(camper._id));

export const selectIsLoading = (state) => state.campers.isLoading;

export const selectError = (state) => state.campers.error;
