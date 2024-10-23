import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../store/store";

const WishingListBtn: React.FC = () => {
  const token = useAppSelector((state: RootState) => state.auth.token);
  const numOfItems = useAppSelector(
    (state: RootState) => state.wishlist.wishListData
  );

  return (
    <>
      <div className="relative">
        <Link
          to={"/wishingList"}
          className="size-8 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white"
        >
          <FontAwesomeIcon icon={faHeart} className="fa-fw" />
        </Link>
        {token && numOfItems?.length > 0 && (
          <span className="absolute bottom-full end-0 translate-y-1/2 text-[11px] font-medium text-white bg-red-500 size-4 rounded-full flex items-center justify-center">
            {numOfItems?.length <= 9 ? numOfItems?.length : "9+"}
          </span>
        )}
      </div>
    </>
  );
};

export default WishingListBtn;
