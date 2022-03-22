import cart from "./cart.module.css";
import prodList from "../productList/productList.module.css";
import { Categories } from "../../components";
export function Cart() {
  return (
    <>
      <div className={`${prodList["parting"]} flex-row`}>
        <Categories />
      </div>
      <div className={`${cart["main-cart"]} flex-center`}>
        {/* hrz card for product display*/}
        <div className={`${cart["card-ecom-hrz"]} flex-row`}>
          <img
            src="/media/images/toy.webp"
            alt="wooden toy"
            className="responsive-img"
          />
          {/* product details*/}
          <div className={`${prodList["product-details"]} flex-col gap-sm`}>
            <h4 className="marg-un">Nature jewels</h4>
            <p className="marg-un">Wooden Handmade toy</p>
            <strong> ₹ 895 </strong> <s>1489</s>
            <div>40% OFF</div>
            <div>
              Quantity: <button className={cart["short-btn"]}>-</button>{" "}
              <span>1</span>
              <button className={cart["short-btn"]}>+</button>
            </div>
            <button className="cart-btn full-width">Remove from cart</button>
            <button className="cart-btn full-width">Move to wishlist</button>
          </div>
          {/* end of product details*/}
        </div>
        {/* end of hrz card*/}
        {/* amount details div*/}
        <div className="amt-detail pd-sm">
          <h3>Amount Details</h3>
          <hr className="break" />

          <div>
            <div className="flex-row spc-btwn">
              <p>Amount(2 count)</p>
              <p>₹1790</p>
            </div>
            <div className="flex-row spc-btwn">
              <p>Discount</p>
              <p>₹1188</p>
            </div>
            <div className="flex-row spc-btwn">
              <p>Delivery charges</p>
              <p>₹199</p>
            </div>
            <hr className="break" />
            <div className="flex-row spc-btwn">
              <strong>Total Amount</strong>
              <strong>₹1989</strong>
            </div>
            <hr className="break" />
            You will save ₹1188 on this order
          </div>
          <button className="full-width cart-btn">Place Order</button>
        </div>

        {/*  end of amount details */}
      </div>
    </>
  );
}
