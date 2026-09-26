import React, { useEffect, useState } from "react";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      });
  }, []);

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="student-list-container">

      <h2>Student List</h2>

      <table className="student-table">

        <thead>
          <tr>
            <th>S.No</th>
            <th>Roll No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>

              <td>{index + 1}</td>

              <td>{student.id}</td>

              <td>{student.name}</td>

              <td>{student.email}</td>

              <td>
                <button className="edit-btn">
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(student.id)}
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

export default StudentList;