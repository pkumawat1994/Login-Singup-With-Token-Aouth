import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./userComponent/Login";
import Navbar from "./userComponent/Navbar";
import Singup from "./userComponent/Singup";
const cl = require("./index");

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
      </Routes>
    </>
  );
}

export default App;
