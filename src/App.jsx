import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Netfilx from "./pages/Netfilx";
import Player from "./pages/Player";
import Signup from "./pages/Signup";
import TVshows from "./pages/TVshows";
import UserLiked from "./pages/UserLiked";

const App = () => {
  return (
    <BrowserRouter>
		<Routes>
			<Route exact path="/login" element={<Login />} />
			<Route exact path="/signup" element={<Signup />} />
			<Route exact path="/player" element={<Player />} />
			<Route exact path="/movies" element={<Movies />} />
			<Route exact path="/tv" element={<TVshows />} />
			<Route exact path="/mylist" element={<UserLiked />} />
			<Route exact path="/" element={<Netfilx />} />
		</Routes>
    </BrowserRouter>
  );
}

export default App;
