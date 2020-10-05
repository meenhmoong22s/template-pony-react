import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: "modals",
  initialState: {
    layoutMode: "light",
  },
  reducers: {
    setModal: (state, action) => {
      state.layoutMode = action.payload;
    },
  },
});

const { reducer, actions } = modal;
export const { setModal } = actions;
export default reducer;
