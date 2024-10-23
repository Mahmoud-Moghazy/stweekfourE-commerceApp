import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToggleBtn from "./ToggleBtn";
import { Link } from "react-router-dom";
import {
  faArrowRightFromBracket,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../features/user/authSlice";
import { useAppDispatch } from "../../hooks/hooks";
import { UserBtnProps } from "../../constants/interfaces";

const UserBtn: React.FC<UserBtnProps> = ({ isOpen, toggleMenu }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="relative">
      <ToggleBtn
        icon={faUser}
        className="size-8 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white"
        onClick={toggleMenu}
        ariaLabel="user button"
        role="button"
      />

      {isOpen && (
        <div className="absolute top-full end-2 py-3 px-6 mt-2 bg-black bg-opacity-60 rounded-md">
          <ul className="flex flex-col">
            <li className="text-white">
              <Link
                to={"/userProfile"}
                className="flex items-center gap-2 md:gap-3 hover:bg-red-500 rounded-md p-2"
              >
                <FontAwesomeIcon icon={faUser} className="fa-fw"/>
                <p className="whitespace-nowrap text-sm">Manage My Account</p>
              </Link>
            </li>
            <li className="text-white">
              <Link
                to={"/allorders"}
                className="flex items-center gap-2 md:gap-3 hover:bg-red-500 rounded-md p-2"
              >
                <FontAwesomeIcon icon={faBagShopping} className="fa-fw"/>
                <p className="whitespace-nowrap text-sm">My Order</p>
              </Link>
            </li>
            <li className="text-white">
              <button
                onClick={() => dispatch(logout())}
                className="flex items-center gap-2 md:gap-3 hover:bg-red-500 rounded-md w-full p-2"
              >
                <FontAwesomeIcon icon={faArrowRightFromBracket} className="fa-fw" rotation={180}/>
                <p className="whitespace-nowrap text-sm">Logout</p>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserBtn;
