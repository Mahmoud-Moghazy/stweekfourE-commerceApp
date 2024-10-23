import React from "react";
import { AddToProps, ErrorResponse } from "../../constants/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useAddToWishlistMutation } from "../../APIs/Wishlist/wishingListAPI";
import { useWishListContext } from "../../Context/WishListContext";
import toast from "react-hot-toast";

const AddToWishingList: React.FC<AddToProps> = ({ id, className }) => {
  const [AddToWishingList] = useAddToWishlistMutation();
  const { refetch } = useWishListContext();
  const handleAddToWishList = async () => {
    try {
      const response = await AddToWishingList(id).unwrap();
      toast.success(response?.message);
      refetch();
    } catch (error) {
      const errMsg = (error as { data: ErrorResponse }).data.message;
      toast.error(errMsg);
    }
  };
  return (
    <button
      onClick={handleAddToWishList}
      className={`p-2 size-7 md:size-9 bg-white shadow hover:bg-gray-100 flex items-center justify-center ${className}`}
    >
      <FontAwesomeIcon icon={faHeart} />
    </button>
  );
};

export default AddToWishingList;
