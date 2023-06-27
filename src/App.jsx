import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Netfilx from "./pages/Netfilx";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <BrowserRouter>
		<Routes>
			<Route exact path="/login" element={<Login />} />
			<Route exact path="/signup" element={<Signup />} />
			<Route exact path="/" element={<Netfilx />} />
		</Routes>
    </BrowserRouter>
  );
}

export default App;
