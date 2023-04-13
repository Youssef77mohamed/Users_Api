import React from "react";

export default function CardItemAbout(props) {

  const user = props.users;

  return (
    <div className="card mt-3" style={{ width: "20rem" }}>
      <h3 className="text-center mt-3">User</h3>
      <img
        src={user.image}
        style={{ height: "300px", objectFit: "cover" }}
        className="card-img-top"
        alt={user.firstName}
      />
      <div className="card-body">
        <h4 className="card-title">{user.firstName}  {user.lastName}</h4>
        <p className="card-text">Domain : {user.domain}</p>
        <p className="card-text">Address : {user.address.address}</p>
        <p className="card-text">City : {user.address.city}</p>
      
      </div>
    </div>
  );
}
