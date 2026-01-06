import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import Navbar from "../components/Navbar";
import CharacterDetails from "../pages/CharacterDetail";

const AppRoutes = () => {
    const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <div className="bg-neutral-800 min-h-screen">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/favorite" element={<Favorite searchTerm={searchTerm} />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
