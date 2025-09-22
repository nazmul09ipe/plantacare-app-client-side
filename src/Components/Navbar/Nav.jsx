import React, { useEffect, useState, useRef, useContext } from "react"; 
import Logo from '../../assets/Logo.png';
import './Nav.css';
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Layouts/AuthLayouts/AuthProvider";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { IoHomeOutline, IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const profileRef = useRef(null);
  const [showProfile, setShowProfile] = useState(false);
  const [theme, setTheme] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleLogOut = () => {
    logOut();
    setShowProfile(false);
    navigate('/auth/login');
  };

  const navLinks = (
    <>
      <NavLink to="/" className="hover:text-orange-400 transition duration-300 flex items-center gap-1">
        <IoHomeOutline size={25} /> Home
      </NavLink>
      <NavLink to="/allPlants" className="hover:text-orange-400 transition duration-300">All Plants</NavLink>
      <NavLink to="/addPlantsWrapper" className="hover:text-orange-400 transition duration-300">Add Plants</NavLink>
      <NavLink to="/myPlantsWrapper" className="hover:text-orange-400 transition duration-300">My Plants</NavLink>
    </>
  );

  return (
    <nav className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex flex-col sm:flex-row items-center gap-1">
          <img className="w-16 h-16 sm:w-20 sm:h-20 hover:scale-105 transition-transform duration-300" src={Logo} alt="Logo" />
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="font-bold primary-font text-xl">PlantaCare</h1>
            <p className="secondary-font text-sm sm:text-base">Plan your Life With Plants</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-bold text-lg primary-font">
          {navLinks}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 md:gap-5">
          {!user && (
            <>
              <NavLink to="/auth/register">
                <button className="btn hover:bg-orange-400 hover:text-white transition duration-300">Register</button>
              </NavLink>
              <NavLink to="/auth/login">
                <button className="btn hover:bg-orange-400 hover:text-white transition duration-300">Login</button>
              </NavLink>
            </>
          )}

          {user && (
            <div className="relative" ref={profileRef}>
              <img
                className="w-12 h-12 rounded-3xl cursor-pointer"
                src={user.photoURL}
                alt="user"
                data-tooltip-id="user-tooltip"
                data-tooltip-content={user?.displayName || "User"}
                onClick={() => setShowProfile(!showProfile)}
              />
              <Tooltip id="user-tooltip" place="bottom" effect="solid" />

              {showProfile && (
                <div
                  className="absolute right-0 mt-3 z-20 flex flex-col justify-center items-start gap-1 bg-[#059393] text-white p-4 rounded-xl font-semibold w-56 shadow-xl"
                  role="menu"
                >
                  <div className="text-sm opacity-90">Signed in as</div>
                  <div className="text-base">{user?.displayName || "User"}</div>
                  <div className="text-sm break-all opacity-90">{user?.email}</div>
                  <button
                    className="mt-2 btn hover:bg-orange-400 hover:text-white transition duration-300 w-full font-bold"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Theme Toggle */}
          <button onClick={() => setTheme(!theme)} className="text-2xl btn btn-circle btn-outline">
            {theme ? <GoSun /> : <FaMoon />}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl ml-2" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-4 pb-6 flex flex-col gap-4 font-bold text-lg">
          {navLinks}
          {!user && (
            <>
              <NavLink to="/auth/register">
                <button className="btn w-full hover:bg-orange-400 hover:text-white transition duration-300">Register</button>
              </NavLink>
              <NavLink to="/auth/login">
                <button className="btn w-full hover:bg-orange-400 hover:text-white transition duration-300">Login</button>
              </NavLink>
            </>
          )}
          {user && (
            <button
              className="btn w-full hover:bg-orange-400 hover:text-white transition duration-300"
              onClick={handleLogOut}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
