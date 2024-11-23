"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get("http://localhost:5000/api/users")
      .then((response) => {
        setUsers(response.data); // Set users data in state
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };
  const createNewUser = () => {
    const randomName = Math.random().toString(36).substring(7);
    const request = {
      name: `User ${randomName}`,
      email: `${randomName}@example.com`,
      age: Math.floor(Math.random() * 100),
      isAdmin: Math.random() < 0.5,
    };
    axios
      .post("http://localhost:5000/api/users", request)
      .then((response) => {
        setUsers([...users, response.data.user]);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  };

  const deleteUser = async (id) => {
    const res = await axios.delete(`http://localhost:5000/api/users/${id}`);
    if (res.status === 200) setUsers(users.filter((user) => user._id !== id));
    else alert(res.data.message);
  };

  return (
    <div>
      <h1>Users List</h1>
      <button
        style={{
          marginRight: "15px",
          backgroundColor: "#4F46E5",
          color: "white",
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "0.875rem",
          letterSpacing: "0.025em",
          transition: "all 0.3s ease",
          boxShadow: "0 2px 4px rgba(79, 70, 229, 0.2)",
          ":hover": {
            backgroundColor: "#4338CA",
            transform: "translateY(-1px)",
            boxShadow: "0 4px 6px rgba(79, 70, 229, 0.3)",
          },
        }}
        onClick={getUsers}
      >
        Get Users
      </button>
      <button
        style={{
          backgroundColor: "#10B981",
          color: "white",
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "0.875rem",
          letterSpacing: "0.025em",
          transition: "all 0.3s ease",
          boxShadow: "0 2px 4px rgba(16, 185, 129, 0.2)",
          ":hover": {
            backgroundColor: "#059669",
            transform: "translateY(-1px)",
            boxShadow: "0 4px 6px rgba(16, 185, 129, 0.3)",
          },
        }}
        onClick={createNewUser}
      >
        Create New User
      </button>
      <table
        style={{
          marginTop: "20px",
          border: "1px solid #e0e0e0",
          borderCollapse: "collapse",
          width: "100%",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          borderRadius: "8px",
        }}
      >
        <thead>
          <tr
            style={{
              background: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
            }}
          >
            <th
              style={{
                padding: "15px",
                color: "white",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Name
            </th>
            <th
              style={{
                padding: "15px",
                color: "white",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Email
            </th>
            <th
              style={{
                padding: "15px",
                color: "white",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Age
            </th>
            <th
              style={{
                padding: "15px",
                color: "white",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Admin
            </th>
            <th
              style={{
                padding: "15px",
                color: "white",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user._id}
              style={{
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#f8fafc",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#eef2ff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  index % 2 === 0 ? "#ffffff" : "#f8fafc")
              }
            >
              <td
                style={{
                  padding: "15px",
                  borderBottom: "1px solid #e0e0e0",
                  color: "#1e293b",
                }}
              >
                {user.name}
              </td>
              <td
                style={{
                  padding: "15px",
                  borderBottom: "1px solid #e0e0e0",
                  color: "#1e293b",
                }}
              >
                {user.email}
              </td>
              <td
                style={{
                  padding: "15px",
                  borderBottom: "1px solid #e0e0e0",
                  color: "#1e293b",
                }}
              >
                {user.age}
              </td>
              <td
                style={{ padding: "15px", borderBottom: "1px solid #e0e0e0" }}
              >
                <span
                  style={{
                    backgroundColor: user.isAdmin ? "#dcfce7" : "#fee2e2",
                    color: user.isAdmin ? "#166534" : "#991b1b",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    fontSize: "0.875rem",
                  }}
                >
                  {user.isAdmin ? "Yes" : "No"}
                </span>
              </td>
              <td
                style={{ padding: "15px", borderBottom: "1px solid #e0e0e0" }}
              >
                <button
                  style={{
                    backgroundColor: "#ef4444",
                    color: "white",
                    padding: "8px 16px",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 4px rgba(239, 68, 68, 0.2)",
                    ":hover": {
                      backgroundColor: "#dc2626",
                      transform: "translateY(-1px)",
                      boxShadow: "0 4px 6px rgba(239, 68, 68, 0.3)",
                    },
                  }}
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
