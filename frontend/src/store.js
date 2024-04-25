import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/customerSlice";
export default configureStore({
  reducer: {
    customers: customerReducer,
  },
});
