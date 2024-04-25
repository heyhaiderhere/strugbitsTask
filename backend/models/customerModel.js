import mongoose from "mongoose";
const customerSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      required: true,
    },
  },
  { timestemps: true }
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
