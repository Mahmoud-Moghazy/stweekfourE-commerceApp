import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../store/store";

const CartBtn: React.FC = () => {
  const token = useAppSelector((state: RootState) => state.auth.token);
  const numOfCartItems = useAppSelector((state: RootState) => state.cart.numOfCartItems);

  return (
    <>
      <div className="relative">
        <Link
          to={"/cart"}
          className="size-8 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white"
        >
          <FontAwesomeIcon icon={faCartShopping} className="fa-fw" />
        </Link>
        {token && numOfCartItems > 0 &&(
          <span className="absolute bottom-full end-0 translate-y-1/2 text-[11px] font-medium text-white bg-red-500 size-4 rounded-full flex items-center justify-center">
            {numOfCartItems <= 9 ? numOfCartItems : "9+"}
          </span>
        )}
      </div>
    </>
  );
};

export default CartBtn;