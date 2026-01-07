import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import Navbar from "../components/Navbar";
import CharacterDetails from "../pages/CharacterDetail";
import ErrorMessage from "../components/ErrorMessage";

const AppRoutes = () => {

  return (
    <BrowserRouter>
      <div className="bg-neutral-800 min-h-screen">
        <Navbar  />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/favorite" element={<Favorite  />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
          <Route path="*" element={<ErrorMessage />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
