import React, { useEffect, useState } from "react";
import CardItem from "../components/CardItem";
import Loading from "../components/Loading";
import { getAllUsers } from "../services/api";


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
    <div className="col-3" key={user.id}>
      <CardItem users={user} />
      
    </div>
  ));

  return (
    <div className="container">
      <div className="row mt-3">
        {userList.length > 0 ? userList : <Loading />}
        
      </div>

    </div>
  );
}

