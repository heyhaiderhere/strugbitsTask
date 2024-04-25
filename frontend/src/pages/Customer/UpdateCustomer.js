import React, { useEffect, useState } from "react";
import addCustomerHeader from "../../assets/addCustomer.svg";
import axios from "../../utils/axios";
import { serialize } from "object-to-formdata";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/constants";
const CreateCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const fillState = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  const updatedCustomer = async () => {
    const { status } = await axios.put(`/customer/${id}`, serialize(formData));
    if (status === 200) {
      navigate("/");
    }
  };
  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    updatedCustomer();
  };
  useEffect(() => {
    const getSingleCustomer = async () => {
      const { data, status } = await axios.get(`/customer/${id}`);
      console.log(data, status);
      setFormData({
        username: data.username,
        name: data.name,
        email: data.email,
        profilePicture: data.profilePicture,
      });
    };
    getSingleCustomer();
  }, [id]);
  return (
    <form onSubmit={handleSubmit} className="create-customer-container">
      <div className="create-customer-wrapper">
        <div className="image-container-customer">
          <img
            className="addCustomer-header"
            src={addCustomerHeader}
            alt="yup"
          />
          <h2 style={{ textAlign: "center" }}>Edit Customer</h2>
        </div>
        <input
          name="username"
          className="input"
          placeholder="Username"
          value={formData?.username}
          type="text"
          onChange={(e) => {
            fillState(e.target.name, e.target.value);
          }}
        />
        <input
          name="name"
          className="input"
          placeholder="Name"
          value={formData?.name}
          type="text"
          onChange={(e) => {
            fillState(e.target.name, e.target.value);
          }}
        />
        <input
          name="email"
          className="input"
          placeholder="Email"
          value={formData?.email}
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
          src={`${BASE_URL}/${formData.profilePicture}`}
          alt=""
        />
        <button
          type="submit"
          className="add-customer-button"
          style={{ width: "90%" }}
        >
          Edit Customer
        </button>
      </div>
    </form>
  );
};

export default CreateCustomer;
