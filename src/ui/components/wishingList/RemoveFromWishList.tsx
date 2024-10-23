import React from "react";
import { AddToProps } from "../../../constants/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useRemoveFromWishlistMutation } from "../../../APIs/Wishlist/wishingListAPI";
import { useWishListContext } from "../../../Context/WishListContext";
import toast from "react-hot-toast";

const RemoveFromWishList: React.FC<AddToProps> = ({ id }) => {
  const [RemoveFromWishList] = useRemoveFromWishlistMutation();
  const { refetch } = useWishListContext();

  const handleRemoveItem = async () => {
    try {
      await RemoveFromWishList(id).unwrap();
      toast.success("Item removed successfully");
      refetch();
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  return (
    <button
      onClick={handleRemoveItem}
      className="p-2 size-7 md:size-9 bg-white shadow hover:bg-gray-100 flex items-center justify-center rounded-full"
    >
      <FontAwesomeIcon icon={faTrashCan} />
    </button>
  );
};

export default RemoveFromWishList;
