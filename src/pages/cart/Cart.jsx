import { cart, products } from "..";
import { v4 as uuid } from "uuid";
import { useEffect } from "react/cjs/react.production.min";

export function Cart() {
  // temporary setup will edit when working on features
  // const cartList = [
  //   {
  //     // 5
  //     id: uuid(),
  //     category: "",
  //     brand: "Nature jewels",
  //     product: "Wooden Handmade toy",
  //     productImg: "/assets/images/toy.webp",
  //     productAlt: "wooden toy",
  //     discPrice: 895,
  //     price: 1489,
  //     discount: 40,
  //     inStock: true,
  //     rating: 4.5,
  //     quantity: 0,
  //   },
  //   {
  //     // 5
  //     id: uuid(),
  //     category: "",
  //     brand: "Nature jewels",
  //     product: "Wooden Handmade toy",
  //     productImg: "/assets/images/toy.webp",
  //     productAlt: "wooden toy",
  //     discPrice: 895,
  //     price: 1489,
  //     discount: 40,
  //     inStock: true,
  //     rating: 4.5,
  //     quantity: 0,
  //   },
  // ];

  useEffect(() => {});

  return (
    <>
      <div className="parting flex-row">
        <h2 className="text-link">My Cart</h2>
      </div>
      <div className={`${cart["main-cart"]} `}>
        {/* hrz card for product display*/}

        <div className="flex-col">
          {cartList.map((item) => {
            return (
              <div
                className={`${cart["card-ecom-hrz"]} flex-row`}
                key={item.id}
              >
                <img
                  src={item.productImg}
                  alt={item.productImg}
                  className="responsive-img"
                />
                {/* product details*/}

                <div
                  className={`${products["product-details"]} flex-col gap-sm`}
                >
                  <h4 className="marg-un">{item.brand}</h4>
                  <p className="marg-un">{item.product}</p>
                  <strong> ₹{item.discPrice}</strong> <s>₹{item.price}</s>
                  <div>{item.discount}% OFF</div>
                  <div>
                    Quantity:
                    <button className={`${cart["short-btn"]} mg-xs`}>-</button>
                    <span>{item.quantity}</span>
                    <button className={`${cart["short-btn"]} mg-xs`}>+</button>
                  </div>
                  <button className="cart-btn full-width">
                    Remove from cart
                  </button>
                  <button className="cart-btn full-width">
                    Move to wishlist
                  </button>
                </div>
                {/* end of product details*/}
              </div>
            );
          })}
        </div>

        {/* amount details div*/}
        <div className={`${cart["amt-detail"]}`}>
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
