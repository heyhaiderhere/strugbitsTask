import React, { useState } from "react";
import addCustomerHeader from "../../assets/addCustomer.svg";
import axios from "../../utils/axios";
import { serialize } from "object-to-formdata";
import { useNavigate } from "react-router";
import { Loader } from "../../Components/Loader";
const CreateCustomer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [pending, setPending] = useState(false);

  const fillState = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  const addNewCustomer = async () => {
    setPending(true);
    const { status } = await axios.post(
      "/customer/create",
      serialize(formData)
    );
    if (status === 201) {
      setPending(false);
      navigate("/");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewCustomer();
  };
  return (
    <form onSubmit={handleSubmit} className="create-customer-container">
      <div className="create-customer-wrapper">
        <div className="image-container-customer">
          <img
            className="addCustomer-header"
            src={addCustomerHeader}
            alt="yup"
          />
          <h2 style={{ textAlign: "center" }}>Add new Customer</h2>
        </div>
        <input
          name="username"
          className="input"
          placeholder="Username"
          type="text"
          onChange={(e) => {
            fillState(e.target.name, e.target.value);
          }}
        />
        <input
          name="name"
          className="input"
          placeholder="Name"
          type="text"
          onChange={(e) => {
            fillState(e.target.name, e.target.value);
          }}
        />
        <input
          name="email"
          className="input"
          placeholder="Email"
          type="text"
          onChange={(e) => {
            fillState(e.target.name, e.target.value);
          }}
        />

        <label
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "90%",
          }}
        >
          <input
            type="file"
            style={{ display: "none" }}
            name="profilePicture"
            onChange={(e) => {
              console.log(e);
              fillState(e.target.name, e.target.files[0]);
            }}
          />
          <p
            style={{
              color: "#57BC90",
              textDecoration: "underline",
              cursor: "pointer",
              fontSize: 16,
            }}
          >
            Upload Photo
          </p>
        </label>
        <img
          height={100}
          src={
            formData?.profilePicture
              ? URL.createObjectURL(formData.profilePicture)
              : null
          }
          alt=""
        />
        <button
          type="submit"
          className="add-customer-button"
          style={{ width: "90%" }}
        >
          Add Customer
        </button>
        {pending && <Loader />}
      </div>
    </form>
  );
};

export default CreateCustomer;
