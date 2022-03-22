import { ProductList } from "../productList/ProductList";
import product from "../productList/productList.module.css";
export function Wishlist() {
  return (
    <>
      <div className="parting flex-row">
        <h2 className="text-link">My Wishlist</h2>
      </div>

      <main className="flex-center gap-xl mg-m mg-btm">
        {/* <!-- card-1 --> */}
        <div className="card-ecom wishlist-card">
          <img
            src="/assets/images/stackedSoap.webp"
            alt="handmade soap set"
            className="responsive-img"
          />
          <div className="product-details flex-col flex-center">
            <h4 className="marg-un">Vinaya Beauty</h4>
            <p className="marg-un">Handmade soap set</p>
            <div className="wish-price">
              <strong> ₹ 749 </strong> <s>₹999</s>
            </div>
          </div>
          <button className="cart-btn gap-sm">Move to cart</button>
          <button className="cart-btn gap-sm">Remove from Wishlist</button>
        </div>
        {/* <!-- card 2 --> */}
        <div className="card-ecom wishlist-card">
          <img
            src="/assets/images/basket1.webp"
            alt="handmade woven storage basket"
            className="responsive-img"
          />
          <div className="product-details flex-center flex-col">
            <h4 className="marg-un">Nature jewels</h4>
            <p className="marg-un">Storage basket</p>
            <div className="wish-price">
              <strong> ₹ 749 </strong> <s>₹999</s>
            </div>
          </div>
          <button className="cart-btn gap-sm">Move to cart</button>
          <button className="cart-btn gap-sm">Remove from Wishlist</button>
        </div>
      </main>
    </>
  );
}
