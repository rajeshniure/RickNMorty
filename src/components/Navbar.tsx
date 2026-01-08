import logo from "../assets/logo.png";
import SearchBar from "../components/SearchBar";
import { Link, useLocation } from "react-router-dom";



function Navbar() {
  const location = useLocation();
  const showSearchBar = !location.pathname.startsWith("/character/");

  return (
    <nav className="w-full mx-auto sticky top-0 z-50 bg-neutral-800 text-neutral-200 py-2 sm:py-3 border-b border-neutral-800 mb-3">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">

        <Link to="/" className="shrink-0">
        <div >
          <img src={logo} alt="Logo" className="h-8 sm:h-10 w-auto scale-170 pt-1 pl-5" />
        </div>
        </Link>

        <div className="flex flex-1 w-full sm:w-auto order-3 sm:order-2">
          {showSearchBar && <SearchBar />}
        </div>

        <div className="flex justify-center sm:justify-end items-center gap-8 sm:gap-12 lg:gap-20 order-2 sm:order-3 shrink-0">
          <Link
            to="/"
            className="text-base sm:text-lg text-neutral-300 hover:text-emerald-400 transition whitespace-nowrap"
          >
            Home
          </Link>
          <Link
            to="/favorite"
            className="text-base sm:text-lg text-neutral-300 hover:text-emerald-400 transition whitespace-nowrap"
          >
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
