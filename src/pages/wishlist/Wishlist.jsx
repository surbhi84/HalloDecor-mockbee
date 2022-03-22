import product from "../productList/productList.module.css";
import wish from "./wishlist.module.css";
export function Wishlist() {
  return (
    <>
      <div className={`${product["parting"]} flex-row`}>
        <h2 className="text-link">My Wishlist</h2>
      </div>

      <main className="flex-center gap-xl mg-m mg-btm">
        {/* <!-- card-1 --> */}
        <div className={`${product["card-ecom"]} ${wish["wishlist-card"]}`}>
          <img
            src="/assets/images/stackedSoap.webp"
            alt="handmade soap set"
            className="responsive-img"
          />
          <div className={`${product["product-details"]} flex-col flex-center`}>
            <h4 className="marg-un">Vinaya Beauty</h4>
            <p className="marg-un">Handmade soap set</p>
            <div className={wish["wish-price"]}>
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
