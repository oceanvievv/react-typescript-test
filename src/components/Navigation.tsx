import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white pl-10 pr-10">
      <span className="font-bold">Products App</span>

      <span>
        <Link className="mr-6" to="/">
          Products
        </Link>
        <Link className="mr-6" to="/about">
          About
        </Link>
        <Link to="/test">Test</Link>
      </span>
    </nav>
  );
}
