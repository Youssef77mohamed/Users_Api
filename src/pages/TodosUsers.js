import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




export default function UserTodo() {
    const [todo, setTodos] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
    
        fetch(`https://dummyjson.com/users/${userId}/todos`)
        .then(res => res.json())
        .then((data)=>setTodos(data.todos));

    }, [userId]);
    return (
    <div>
        <h2 className="text-center mt-4">Posts Page</h2>
        {todo.map((todo) => (
        <div className="card mb-3 mx-5 my-5 ps-3 " key={todo.id}>
            <h5 className="mb-3 mt-4">ID : {todo.id}</h5>
            <p>Todo : {todo.todo}</p>
            <p>completed : {todo.completed}</p>
            <p>UserId : {todo.userId}</p>
        </div>
        ))}
    </div>
    );
}