import React, { useEffect, useState } from "react";
import { Customer } from "../../Components/Customer";
import { getAllCustomers } from "../../slices/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../Components/Loader";
import { Link } from "react-router-dom";
import { Modal } from "../../Components/Modal";
import axios from "../../utils/axios";
import downArrow from "../../assets/downArrow.svg";
import upArrow from "../../assets/upArrow.svg";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { customers, pending } = useSelector((state) => state.customers);
  const [isOpen, setIsOpen] = useState(false);
  const [customerId, setCustomerId] = useState(null);
  const [sorting, setSorting] = useState({
    key: "username",
    type: -1,
  });

  useEffect(() => {
    dispatch(getAllCustomers(sorting));
  }, [dispatch, sorting]);

  const handleDeleteConfirmation = (id) => {
    setIsOpen(true);
    setCustomerId(id);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  const handleDelete = async () => {
    const { data, status } = await axios.delete(`/customer/${customerId}`);
    console.log(data, status);
    setCustomerId(null);
    setIsOpen(false);
    dispatch(getAllCustomers(sorting));
  };
  const sortingPatterns = ["username", "name", "email"];
  return (
    <div>
      <Modal
        isOpen={isOpen}
        handleCancel={handleCancel}
        handleDelete={handleDelete}
      />

      <div className="dashboard-heading">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-customers-container">
        <Link to={"createCustomer"}>
          <button className="add-customer-button">Add New Customer</button>
        </Link>
        <div className="sorting-bar">
          <div></div>

          {sortingPatterns.map((pattern, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  cursor: "pointer",
                  userSelect: "none",
                  gap: 5,
                }}
                onClick={() => {
                  setSorting({
                    key: pattern,
                    type: sorting.type === 1 ? -1 : 1,
                  });
                }}
              >
                <p style={{ textTransform: "capitalize" }}>{pattern}</p>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  <img src={upArrow} alt="" />
                  <img src={downArrow} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        {pending && <Loader />}
        {customers.length !== 0
          ? customers.map((customer, i) => {
              return (
                <Customer
                  key={i}
                  username={customer?.username}
                  name={customer?.name}
                  email={customer?.email}
                  profilePicture={customer?.profilePicture}
                  id={customer?._id}
                  handleDelete={handleDeleteConfirmation}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Dashboard;
