// src/redux/campers/selectors.js

export const selectCampers = (state) => state.campers.campers.items;

export const selectVisibleCampers = (state) => state.campers.campers.visibleItems;

export const selectIsLoading = (state) => state.campers.isLoading;

export const selectError = (state) => state.campers.error;
