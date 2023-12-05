import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/users/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const numsItemsInCart = useSelector(
    (state) => state.cartState.numItemsInCart
  );

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="items-center hidden text-3xl lg:flex btn btn-primary"
          >
            C
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="w-6 h-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className=" menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* THEME */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />

            <BsSunFill className="w-4 h-4 swap-on" />
            <BsMoonFill className="w-4 h-4 swap-off" />
          </label>
          {/* CART */}
          <NavLink to="/cart" className="ml-4 btn btn-ghost btn-circle btn-md">
            <div className="indicator">
              <BsCart3 className="w-6 h-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numsItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
