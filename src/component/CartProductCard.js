import { useNavigate } from "react-router-dom";
import { useProductContext } from "../context/product-context";

export default function CartProductCard(item) {
  const {
    removeFromCart,
    incrementProductQty,
    decremnetProductQty,
    findInWishlist,
    addToWishlist,
  } = useProductContext();

  const { _id, title, price, qty } = item;
  const indexWishlist = findInWishlist(_id);
  const navigate = useNavigate();

  const handleClickForWishlist = () => {
    if (indexWishlist === -1) {
      addToWishlist(item);
    } else {
      navigate("/wishlist");
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{price}</p>
      <button onClick={() => incrementProductQty(_id)}>+</button>
      {qty}
      <button onClick={() => decremnetProductQty(_id)}>-</button>
      <br></br>
      <button onClick={() => removeFromCart(_id)}>Remove</button>
      <button onClick={handleClickForWishlist}>
        {" "}
        {indexWishlist === -1 ? "move to wishlist" : "already in wishlist"}
      </button>
    </div>
  );
}
