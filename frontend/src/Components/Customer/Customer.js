import React from "react";
import { BASE_URL } from "../../constants/constants";
import { Link } from "react-router-dom";
const Customer = ({
  username,
  name,
  email,
  profilePicture,
  id,
  handleDelete,
}) => {
  return (
    <div
      style={{
        marginTop: 20,
      }}
      className="customer-row"
    >
      <div>
        <div className="customer-row-image-container">
          <img
            className="customer-image"
            src={`${BASE_URL}/${profilePicture}`}
            alt="customer"
          />
        </div>
      </div>
      <p className="center">{username}</p>
      <p className="center">{name}</p>
      <p className="center">{email}</p>
      <Link to={`/edit/${id}`}>
        <button className="edit-button button">Edit</button>
      </Link>
      <button onClick={() => handleDelete(id)} className="delete-button button">
        Delete
      </button>
    </div>
  );
};

export default Customer;
