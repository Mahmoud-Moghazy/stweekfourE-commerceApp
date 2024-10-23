import toast from "react-hot-toast";
import { useAddItemToCartMutation } from "../../APIs/Cart/cartAPI";
import { AddToProps, ErrorResponse } from "../../constants/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../Context/CartContext";

const AddToCart: React.FC<AddToProps> = ({ id, icon, className }) => {
  const [addItemToCart, { isLoading }] = useAddItemToCartMutation();
  const {refetch} = useCartContext();
  const handleAddToCart = async () => {
    try {
      const response = await addItemToCart(id).unwrap();
      toast.success(response?.message);
      refetch();
    } catch (error) {
      const errMsg = (error as { data: ErrorResponse }).data.message;
      toast.error(errMsg);
    }
  };
  return (
    <button
      onClick={handleAddToCart}
      className={`bg-black text-white font-medium py-1 w-full flex items-center justify-center gap-2 ${className}`}
    >
      {icon && <FontAwesomeIcon icon={faCartArrowDown} />}
      <span>{isLoading ? "Adding..." : "Add to Cart"}</span>
    </button>
  );
};

export default AddToCart;
