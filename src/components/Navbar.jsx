import React from "react";
import { Clapperboard} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="flex flex-wrap items-center justify-between gap-3 m-5 bg-stone-100 p-3 rounded-md">
        <div className="flex items-center gap-3">
          <button>
            <Clapperboard size={30} color="skyblue" />
          </button>
        </div>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-blue-400 font-bold text-lg sm:text-xl md:text-2xl">
            Movies
          </Link>
          <Link to="/WatchList" className="text-blue-400 font-bold text-lg sm:text-xl md:text-2xl">
            WatchList
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
