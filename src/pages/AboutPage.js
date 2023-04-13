import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { getAllUsers } from "../services/api";
import CardItemAbout from "../components/CardItemAbout";


export default function UsersPage() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data.users);
    } catch (err) {
      console.log("ERROR: " + err);
    }
  };

  useEffect(() => {
    getUsers();
  
  },[]);  

  const userList = users.map((user) => (
    <div className="col-3" >
      <CardItemAbout users={user} />
    </div>
  ));

  return (
    <div className="container">
      <h1 className="text-center mt-4">Welcome To About Page</h1>
      <div className="row mt-3">
        {userList.length > 0 ? userList : <Loading />}
      </div>
    </div>
  );
}