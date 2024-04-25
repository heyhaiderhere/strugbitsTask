import Customer from "../models/customerModel.js";
import asyncHandler from "express-async-handler";

// @desc	create customer
// @route	POST /api/customer/create
// @access	public
const createCustomer = asyncHandler(async (req, res) => {
  const { username, name, email, profilePicture } = req.body;

  const customer = await Customer.create({
    username,
    name,
    email,
    profilePicture: req.file.filename,
  });

  if (customer) {
    res.status(201);
    res.json(customer);
  } else {
    res.status(500);
    throw new Error("Internal server error");
  }
});
// @desc	get all customers
// @route	GET /api/customer
// @access	public
const getAllCustomers = asyncHandler(async (req, res) => {
  const { key, type } = req.query;
  const customers = await Customer.find({}).sort({ [key]: Number(type) });
  if (customers) {
    res.status(200).json(customers);
  } else {
    throw new Error("No record found");
  }
});
// @desc	get One customers
// @route	GET /api/customer/:id
// @access	public
const getSingleCustomer = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const customers = await Customer.findById(id);
  if (customers) {
    res.status(200).json(customers);
  } else {
    throw new Error("Customer not found");
  }
});
// @desc	Delete a customer
// @route	DELETE /api/customer/:id
// @access	public
const deleteCustomer = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedCustomer = await Customer.findByIdAndDelete(id);
  if (deletedCustomer) {
    res.send("The customer is deleted").status(202);
  } else {
    throw new Error("Customer not found");
  }
});

// @desc	Update a customer
// @route	UPDATE /api/customer/:id
// @access	public
const updateCustomer = asyncHandler(async (req, res) => {
  const { id } = req.params;
  let data = req.body;

  if (req.file) {
    data = {
      ...data,
      profilePicture: req.file.filename,
    };
  }
  const updatedCustomer = await Customer.findByIdAndUpdate(
    id,
    { ...data },
    {
      new: true,
    }
  );
  if (updatedCustomer) {
    res.send("The customer is Updated").status(200);
  } else {
    throw new Error("Customer not found");
  }
});

export {
  createCustomer,
  getAllCustomers,
  deleteCustomer,
  updateCustomer,
  getSingleCustomer,
};
