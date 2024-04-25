import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";

const initialState = {
  pending: false,
  customers: [],
};

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCustomers.pending, (state) => {
        state.pending = true;
      })
      .addCase(getAllCustomers.fulfilled, (state, action) => {
        state.pending = false;
        state.customers = action.payload;
      });
  },
});

export const getAllCustomers = createAsyncThunk(
  "customer/getAllCustomers",
  async (requestData) => {
    console.log(requestData);
    const { data, status } = await axios.get(
      `/customer?key=${requestData.key}&type=${requestData.type}`
    );
    if (status === 200) {
      return data;
    }
  }
);

// export const addNewCustomer = createAsyncThunk(
//   "customer/addNewCustomer",
//   async (requestData) => {
//     const { status } = await axios.post("/customer/create", requestData);
//     return status;
//   }
// );

export default customerSlice.reducer;
