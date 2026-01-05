import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <nav className="w-full bg-neutral-800 text-neutral-200 px-6 py-3 border-b border-neutral-800 mb-5">
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-9 w-auto" />
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="
                w-full rounded-md bg-neutral-800
                border border-neutral-700
                px-4 py-2 pr-10 text-sm
                placeholder-neutral-500
                focus:outline-none
                focus:ring-1 focus:ring-emerald-500
              "
            />
            <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-lg" />
          </div>
        </div>

        <div className="flex justify-center items-center gap-8">
          <a
            href="#"
            className="text-md text-neutral-300 hover:text-emerald-400 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-md text-neutral-300 hover:text-emerald-400 transition"
          >
            Favorites
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
