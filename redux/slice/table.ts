import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface TableState {
  tableData: any;
}

const initialState: TableState = {
  tableData: [],
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    fecthTable: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.tableData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fecthTable } = tableSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.tableData.tableData;

export default tableSlice.reducer;
