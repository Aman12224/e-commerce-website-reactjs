import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { logoutUser } from "../features/user/userSlice";
import { logoutUser } from "../features/users/userSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useQueryClient } from "@tanstack/react-query";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
    queryClient.removeQueries();
  };
  return (
    <header className="py-2 bg-neutral text-neutral-content">
      <div className="flex justify-center align-element sm:justify-end ">
        {user ? (
          <div className="flex items-center gap-x-2 sm:gap-x-8">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              className="btn btn-xs btn-outline btn-primary "
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-x-6">
            <Link to="/login" className="text-xs link link-hover sm:text-sm">
              Sign in / Guest
            </Link>
            <Link to="/register" className="text-xs link link-hover sm:text-sm">
              Create an Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
