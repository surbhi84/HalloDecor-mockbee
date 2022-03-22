import product from "../productList/productList.module.css";
import wish from "./wishlist.module.css";
import { wishData } from "./wishlistData";

export function Wishlist() {
  return (
    <>
      <div className={`${product["parting"]} flex-row`}>
        <h2 className="text-link">My Wishlist</h2>
      </div>
      <div className="flex-center gap-xl mg-m mg-btm">
        {wishData.map((wishItem) => {
          return (
            <div
              className={`${product["card-ecom"]} ${wish["wishlist-card"]}`}
              key={wishItem.id}
            >
              <img
                src={wishItem.productImg}
                alt={wishItem.productAlt}
                className="responsive-img"
              />
              <div
                className={`${product["product-details"]} flex-col flex-center`}
              >
                <h4 className="marg-un">{wishItem.brand}</h4>
                <p className="marg-un">{wishItem.product}</p>
                <div className={wish["wish-price"]}>
                  <strong> ₹{wishItem.discPrice}</strong>
                  <s>₹{wishItem.price}</s>
                </div>
              </div>
              <button className="cart-btn gap-sm">Move to cart</button>
              <button className="cart-btn gap-sm">Remove from Wishlist</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
