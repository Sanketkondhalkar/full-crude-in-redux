import { configureStore } from "@reduxjs/toolkit";
import CrudSlice from "./CrudSlice";

const store = configureStore({
  reducer: CrudSlice,
});
export default store;
