import { useProductContext } from "../context/product-context";
import { useNavigate, NavLink } from "react-router-dom";
import "../styles/wishlist.css";

export default function WishlistProductCard(item) {
  const {
    removeFromWishlist,
    state,
    findInCart,
    addToCart,
    findInWishlist,
    addToWishlist,
  } = useProductContext();

  const { _id, title, price, img } = item;

  const indexCart = findInCart(_id);

  const navigate = useNavigate();

  const handleClickForCart = () => {
    if (indexCart === -1) {
      addToCart(item);
    } else {
      navigate("/cart");
    }
  };

  const indexWishlist = findInWishlist(_id);
  const handleClickForWishlist = () => {
    if (indexWishlist === -1) {
      addToWishlist(item);
    } else {
      removeFromWishlist(item._id);
    }
  };

  return (
    <div className="wishlist-card">
      <span
        role="button"
        className="icon-background"
        onClick={() => removeFromWishlist(_id)}
      >
        <i class="fa fa-close" style={{ fontSize: "24px", color: "black" }}></i>
      </span>
      <NavLink to={`/details/${item._id}`}>
        <img src={img} style={{ width: "100%" }} />
      </NavLink>

      <p className="wishlist-title">{title}</p>
      <p className="price">Rs. {price}</p>

      <div className="wishlist-btn-container">
        <button
          className="wishlist-btn"
          onClick={handleClickForCart}
          style={{
            backgroundColor: indexCart !== -1 ? "#D3D3D3" : "",
          }}
        >
          {indexCart === -1 ? "Move To Cart" : "Already In Cart"}
        </button>
      </div>
    </div>
  );
}
