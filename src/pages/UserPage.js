import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteUser, getUser } from "../services/api";


export default function UserPage() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  const get1User = async () => {
    try {
      const user = await getUser(userId);
      setUser(user);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser = () => {
    fetch(`https://dummyjson.com/users/${userId}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then((data)=>console.log(data))
    alert("User Deleted  * check to console *")
  };

  useEffect(() => {
    get1User();
    
  }, [userId]);
  return (
    <div className="container ">
      <div className="card my-5" style={{width:"30rem"}}>
        <img
          src={user.image}
          style={{ height: "200px", objectFit: "contain" }}
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h3 className="card-title">{user.firstName + user.lastName }</h3> 
          <p className="card-text">MaidenName : {user.maidenName }</p>
          <p className="card-text">Age  : {user.age}</p>
          <p className="card-text">Gender : {user.gender}</p>
          <p className="card-text">Email : {user.email} </p>
          <p className="card-text">Phone : {user.phone} </p>
          <p className="card-text">BirthDate : {user.birthDate}</p> 
          <p className="card-text">Height : {user.height}</p> 
          <p className="card-text">Weight : {user.weight}</p> 
          <p className="card-text">EyeColor : {user.eyeColor}</p> 
          <p className="card-text">BloodGroup : {user.bloodGroup}</p> 
          <Link to={`.`} onClick={deleteUser}  className="btn btn-danger ms-1" >
          Delete User 
          </Link>
        </div>
      </div>
    
    </div>
  );
}
