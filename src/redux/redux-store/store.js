import { configureStore } from "@reduxjs/toolkit";
import photoSlice from "../redux-slice/photoSlice";
import modalSlice from "../redux-slice/modalSlice";

const rootReducer = {
  photos: photoSlice,
  modals: modalSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
