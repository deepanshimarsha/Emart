import { useProductContext } from "../context/product-context";
import WishlistProductCard from "../component/WishlistProductCard";
import "../styles/wishlist.css";
import { ToastContainer } from "react-toastify";

export default function Wishlist() {
  const { state } = useProductContext();
  const wishlistLen = state.wishlist.length;

  // useEffect(() => {
  //   getWishlist();
  // }, []);
  return (
    <div className="wishlist-main-container">
      <ToastContainer autoClose={1000} />
      {wishlistLen !== 0 ? (
        <div className="wishlist-container">
          {" "}
          {state.wishlist.map((item) => {
            return <WishlistProductCard {...item} />;
          })}
        </div>
      ) : (
        <h1>Your Wishlist Is Empty!</h1>
      )}
    </div>
  );
}
