import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
      });
  }, []);

  return (
    <div className="user-container">
      <h2 className="user-title">User List</h2>

      <div className="user-boxes">
        {users.map((user, index) => (
          <div className="user-box" key={index}>

            <img
              className="user-image"
              src={user.picture.large}
              alt={user.name.first}
            />

            <h3 className="user-name">
              {user.name.first} {user.name.last}
            </h3>

            <p className="user-data">Email: {user.email}</p>
            <p className="user-data">Phone: {user.phone}</p>
            <p className="user-data">City: {user.location.city}</p>
            <p className="user-data">Country: {user.location.country}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;