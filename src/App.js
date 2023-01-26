import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Userdetails from "./pages/UserDetails/Userdetails";
import Login from "./pages/Login/Login";
import Attendance from "./pages/AttendanceDetails/Attendance";
import Student_Analysis from "./pages/StudentAnalysis/Studentanalysis";
import StudentDetails from "./pages/StudentDetailsPagebackendDetails/Studentdetails";
import Header1 from "./components/Header/Header1";
export default function App() {
  return (
    <>
      <Router>
        <Header1 />

        <Routes>
          {/* <Route path="/" element={<StudentDetails />} /> */}

          <Route path="/" element={<Login />} />
          <Route path="/userdetails" element={<Userdetails />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/studentanalysis" element={<Student_Analysis />} />
          <Route path="/studentdetails" element={<StudentDetails />} />
        </Routes>
      </Router>
    </>
  );
}
