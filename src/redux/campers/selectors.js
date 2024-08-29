// src/redux/campers/selectors.js

export const selectCampers = (state) => state.campers.items;

export const selectFavouritesCampers = (state) => state.campers.favourites;

export const selectIsLoading = (state) => state.campers.isLoading;

export const selectError = (state) => state.campers.error;
