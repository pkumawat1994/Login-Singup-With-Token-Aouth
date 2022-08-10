import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./userComponent/Login";
import Navbar from "./userComponent/Navbar";
import Service from "./userComponent/Service";
import Singup from "./userComponent/Singup";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
}

export default App;
