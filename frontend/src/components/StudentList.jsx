import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:8080/students";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  // ✅ DEFINE FIRST
  const fetchStudents = async () => {
    const res = await axios.get(API);
    setStudents(res.data);
  };

  // ✅ THEN USE
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchStudents();
  };

  const handleEdit = (student) => {
    setEditStudent(student);
  };

  const handleUpdate = async () => {
    await axios.put(`${API}/${editStudent.id}`, editStudent);
    setEditStudent(null);
    fetchStudents();
  };

  return (
    <div>
      <h2>Student List</h2>

      {editStudent && (
        <div>
          <h3>Update Student</h3>

          <input
            value={editStudent.name}
            onChange={(e) =>
              setEditStudent({ ...editStudent, name: e.target.value })
            }
          />

          <input
            value={editStudent.email}
            onChange={(e) =>
              setEditStudent({ ...editStudent, email: e.target.value })
            }
          />

          <input
            value={editStudent.course}
            onChange={(e) =>
              setEditStudent({ ...editStudent, course: e.target.value })
            }
          />

          <button onClick={handleUpdate}>Update</button>
        </div>
      )}

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.course}</td>
              <td>
                <button onClick={() => handleEdit(s)}>Edit</button>
                <button onClick={() => handleDelete(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;