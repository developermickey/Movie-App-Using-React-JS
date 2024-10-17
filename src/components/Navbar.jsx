import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex gap-4 space-x-8 items-center px-10 border-b-2 py-4">
      <h3 className="text-2xl bold">MyMovie</h3>
      <Link className="text-lg text-blue-500" to="/">
        Movie
      </Link>
      <Link className="text-lg text-blue-500" to="/watchlist">
        Watchlist
      </Link>
    </div>
  );
};

export default Navbar;
