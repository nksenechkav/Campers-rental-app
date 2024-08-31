// src/redux/filters/selectors.js

import { createSelector } from "@reduxjs/toolkit";
import { selectCampers } from "../campers/selectors";

export const selectLocationFilter = (state) => state.filters.location;
export const selectEquipmentFilters = (state) => state.filters.equipment;
export const selectVehicleTypeFilter = (state) => state.filters.vehicleType;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectLocationFilter, selectEquipmentFilters, selectVehicleTypeFilter],
  (campers, locationFilter, equipmentFilters, vehicleTypeFilter) => {
    const normalizedFilter = locationFilter.toLowerCase().trim();

    return campers.filter(camper => {
      const matchesLocation = normalizedFilter ? 
        camper.location.toLowerCase().includes(normalizedFilter) : 
        true;

      const matchesEquipment = Object.entries(equipmentFilters).every(([equipmentId, checked]) => {
        if (checked) {
          const key = equipmentId.replace("-checkbox", "");
          return camper.details?.[key] && camper.details[key] !== 0;
        }
        return true;
      });

      const matchesVehicleType = vehicleTypeFilter ? 
        camper.form === vehicleTypeFilter : 
        true;

      return matchesLocation && matchesEquipment && matchesVehicleType;
    });
  }
);
