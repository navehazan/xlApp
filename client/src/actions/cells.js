export const setCells = (cells={}) => {
    return {
      type: "SET_CELLS",
      payload:cells
    };
  };
  export const updateCell = (row,column,value) => {
    return {
      type: "UPDATE_CELL",
      payload:{row,column,value}
    };
  };