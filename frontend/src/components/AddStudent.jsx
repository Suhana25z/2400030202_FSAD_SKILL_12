import React, { useState } from "react";
import axios from "axios";

const API = "http://localhost:8080/students";

function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!student.name || !student.email || !student.course) {
      alert("All fields are required");
      return;
    }

    await axios.post(API, student);

    alert("Student Added!");

    setStudent({ name: "", email: "", course: "" });

    // Refresh page automatically
    window.location.reload();
  };

  return (
    <div>
      <h2>Add Student</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="email"
        placeholder="Email"
        value={student.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={student.course}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddStudent;