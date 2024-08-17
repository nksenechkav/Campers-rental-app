// src/redux/filters/selectors.js

import { createSelector } from "@reduxjs/toolkit";
import { selectCampers } from "../campers/selectors";

export const selectNameFilter = (state) => state.filters.filters.name;

export const selectFilteredCampers = createSelector([selectCampers, selectNameFilter], 
    (campers, filter) => {
    return campers.filter(camper =>
           camper.name.toLowerCase().includes(filter)
    );
});
