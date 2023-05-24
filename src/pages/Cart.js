import { useEffect } from "react";
import CartProductCard from "../component/CartProductCard";
import { useProductContext } from "../context/product-context";
import PriceDetailCard from "../component/PriceDetailCard";
import "../styles/cart-page.css";
import Loading from "../component/Loading";

export default function () {
  const { state, getCart } = useProductContext();

  console.log(state.cart);
  const cartLen = state.cart.length;

  // useEffect(() => {
  //   getCart();
  // }, []);

  return (
    <div>
      {cartLen !== 0 ? (
        <div className="cart-main">
          <div className="product-main">
            {state.cart.map((item) => {
              return <CartProductCard {...item} />;
            })}
          </div>
          <div className="price-section">
            <PriceDetailCard />
          </div>
        </div>
      ) : (
        <h1>Your Cart Is Empty!</h1>
      )}
    </div>
  );
}
