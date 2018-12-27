import React from "react";
import EditWindow from "../components/EditWindow/EditWindow";
export const mapCellsToGrid = cells => {
  console.log(cells)
  return cells.map((row, rowIndex) => {
    return row.map((itemValue, itemIndex) => {
      if (rowIndex === 0 || itemIndex === 0) {
        return { value: itemValue, className: "head", readOnly: true };
      } else {
        return { value: itemValue, component: <EditWindow row={rowIndex} column={itemIndex} value={itemValue ? itemValue : ""} /> };
      }
    });
  });
};
