import { Link } from "react-router-dom";

function NotAuthMenu() {
  return (
    <div className="z-10">
      <ul className="flex gap-x-2">
        <Link to={"/login"}>
          <button className=" bg-slate-300 rounded-md px-3 text-black">
            Sign In
          </button>
        </Link>
        <span> or </span>
        <Link to={"/register"}>
          <button className=" bg-slate-300 rounded-md px-3 text-black">
            Sign Up
          </button>
        </Link>
      </ul>
    </div>
  );
}
export default NotAuthMenu;
