import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const [useName, setUsername] = useState(user ? user : null);
  useEffect(() => {
    fetch(`https://hotel-booking-api-psi.vercel.app/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("Username: ", data[0].name);
        setUsername(data[0]?.name);
      });
  }, [user?.email]);

  useEffect(() => {
    fetch("https://hotel-booking-api-psi.vercel.app/bookings", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        // console.log(data);
      });
  }, []);

  const handleLogOut = () => {
    // setUsername(null);
    LogOut();
  };

  // const hanldeLogin = () => {};

  return (
    <div>
      <div className="navbar bg-[#F7F3E8] pl-6 pr-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
              {/* <img className="h-5 w-5" stroke="currentColor" src={logo} alt="" /> */}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow font-bold bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="rooms">Rooms</Link>
              </li>
              {user && (
                <li>
                  <a>My Bookings</a>
                </li>
              )}
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          <img src={logo} alt="" className="w-16 h-16" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="rooms">Rooms</Link>
            </li>
            {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
            {user && (
              <li>
                <Link to="myBookings">My Bookings</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {useName ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost ">
                {/* <div className="w-10 rounded-full"> */}
                <h3>{useName}</h3>
                {/* </div> */}
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn bg-[#f5dad8] hover:bg-[#f8bab5]">
              Login
            </Link>
          )}
        </div>
      </div>
      <hr className="bg-blue-400 w-full h-1" />
    </div>
  );
};

export default Navbar;
