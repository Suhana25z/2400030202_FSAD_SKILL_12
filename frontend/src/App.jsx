import React from "react";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>🎓 Student App</h1>

      <AddStudent />
      <StudentList />
    </div>
  );
}

export default App;