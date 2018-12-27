const cellsReducerDefaultState = [
  ["", "A", "B", "C"],
  [1, null, null, null],
  [2, null, null, null],
  [3, null, null, null],
  [4, null, null, null],
  [5, null, null, null],
  [6, null, null, null],
  [7, null, null, null],
  [8, null, null, null],
  [9, null, null, null],
  [10, null, null, null],
  [11, null, null, null],
  [12, null, null, null],
  [13, null, null, null],
  [14, null, null, null],
  [15, null, null, null],
  [16, null, null, null],
  [17, null, null, null],
  [18, null, null, null],
  [19, null, null, null],
  [20, null, null, null]
];

export default (state = cellsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_CELLS":
      return action.payload;
    case "UPDATE_CELL":
      const { row, column, value } = action.payload;
      state[row][column] = value;
      return [...state];
    default:
      return state;
  }
};
