import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Favourite from "../pages/Favourite";
import Navbar from "../components/Navbar";



const AppRoutes = () => {
   
  
  
  return (

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        
      </Routes>
    </BrowserRouter>


  );
}


export default AppRoutes;