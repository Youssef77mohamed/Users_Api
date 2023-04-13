import React from "react";
import { Link } from "react-router-dom";

export default function CardItem(props) {

  const user = props.users;

  return (
    <div className="card mt-3" style={{ width: "18rem" }}>
      <img
        src={user.image}
        style={{ height: "300px", objectFit: "cover" }}
        className="card-img-top"
        alt={user.firstName}
      />
      <div className="card-body">
        <h4 className="card-title">{user.firstName} {user.lastName}</h4>
        <p className="card-text">gender : {user.gender}</p>
        <Link to={`users/${user.id}`} className="btn btn-danger">
        more info
        </Link>

        <Link to={`users/${user.id}/posts`} className="btn btn-danger ms-4">
        Posts
        </Link>
        <Link to={`users/${user.id}/todos`} className="btn btn-danger ms-1">
        Todos 
        </Link>
      </div>
    </div>
  );
}
