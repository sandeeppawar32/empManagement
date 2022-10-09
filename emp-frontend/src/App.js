import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { GobalProvider } from "./contextAPI/GobalState";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";

function App() {
  return (
      <GobalProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route  path="/edit/:id" element={<EditUser />} />
            <Route  path="/addUser" element={<AddUser />} />
          </Routes>
        </Router>
      </GobalProvider>
  );
}

export default App;
