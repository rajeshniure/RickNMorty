import logo from "../assets/logo.png";
import SearchBar from "../components/SearchBar";
import { Link, useLocation } from "react-router-dom";

// interface NavbarProps {
//   searchTerm: string;
//   setSearchTerm: (val: string) => void;
// }

function Navbar() {
  const location = useLocation();
  const showSearchBar = !location.pathname.startsWith("/character/");

  return (
    <nav className="w-full mx-auto sticky top-0 z-50 bg-neutral-800 text-neutral-200 py-2 border-b border-neutral-800 mb-3">
      <div className="flex justify-between items-center w-7xl mx-auto">

        <Link to="/">
        <div >
          <img src={logo} alt="Logo" className="h-10 w-auto scale-170 pt-1" />
        </div>
        </Link>

        <div className="flex flex-1">
          {showSearchBar && <SearchBar />}
        </div>

        <div className="flex justify-end items-center gap-20">
          <Link
            to="/"
            className="text-lg text-neutral-300 hover:text-emerald-400 transition"
          >
            Home
          </Link>
          <Link
            to="/favorite"
            className="text-lg text-neutral-300 hover:text-emerald-400 transition"
          >
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
