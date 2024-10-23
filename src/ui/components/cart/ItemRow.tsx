import React, { useEffect, useState } from "react";
import {
  useRemoveItemFromCartMutation,
  useUpdateQuantityMutation,
} from "../../../APIs/Cart/cartAPI";
import toast from "react-hot-toast";
import { useCartContext } from "../../../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string;
  imageCover: string;
  price: number;
  count: number;
  productId: string;
}

const ItemRow: React.FC<Props> = ({
  title,
  imageCover,
  price,
  count,
  productId,
}) => {
  const [removeItemFromCart, { isLoading }] = useRemoveItemFromCartMutation();
  const [updateQuantity] = useUpdateQuantityMutation();
  const { refetch } = useCartContext();
  const [itemCount, setItemCount] = useState(count);

  const handleRemoveItem = async () => {
    try {
      await removeItemFromCart(productId).unwrap();
      toast.success("Item removed successfully");
      refetch();
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  const handleUpdateQuantity = async () => {
    if (itemCount !== count) {
      try {
        await updateQuantity({ id: productId, count: itemCount }).unwrap();
        toast.success("Item quantity updated");
        refetch();
      } catch (error) {
        console.error("Failed to update quantity:", error);
      }
    }
  };

  // Call handleUpdateQuantity when itemCount changes
  useEffect(() => {
    if (productId) {
      handleUpdateQuantity();
    }
  }, [itemCount, productId]);

  // Handle input value changes
  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemCount(Number(e.target.value));
  };

  return (
    <tr className="flex items-center justify-between px-2 py-4 shadow my-5 relative group">
      <td className="flex items-center gap-x-3 w-1/4 overflow-clip hover:overflow-visible">
        <img
          src={imageCover}
          alt={title}
          className="size-14 object-cover object-center"
        />
        <span>{title}</span>
      </td>
      <td className="flex items-center justify-center gap-x-3 w-1/4">
        $ {price}
      </td>
      <td className="flex items-center justify-center gap-x-3 w-1/4">
        <div className="border border-gray-500 rounded flex px-2 gap-2">
          <input
            type="number"
            name={productId}
            id={productId}
            className="w-8 text-center text-xs outline-none font-semibold"
            value={itemCount}
            onChange={handleCountChange}
          />
          <div className="flex flex-col">
            <button onClick={() => setItemCount((p) => p + 1)}>
              <FontAwesomeIcon icon={faAngleUp} size="xs" />
            </button>
            <button onClick={() => setItemCount((p) => (p > 0 ? p - 1 : 0))}>
              <FontAwesomeIcon icon={faAngleDown} size="xs" />
            </button>
          </div>
        </div>
      </td>
      <td className="flex items-center justify-end gap-x-3 w-1/4">
        $ {price * count}
      </td>
      <td>
        <button
          onClick={handleRemoveItem}
          className="bg-red-400 text-white p-1 rounded absolute start-full opacity-0 group-hover:start-2 group-hover:opacity-100 transition-all duration-300 ease-in-out"
        >
          {isLoading ? "Removing..." : "Remove"}
        </button>
      </td>
    </tr>
  );
};

export default ItemRow;
