import { cart, products } from "..";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { deleteCart, getCart } from "api";
import { useUserData } from "hooks";

export function Cart() {
  const [cartList, setCartList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const {
    userData: { user, encodedToken },
    userDataDispatch,
    isAuth,
  } = useUserData();

  useEffect(() => {
    (async function () {
      try {
        let cart = await getCart(encodedToken);
        setCartList(cart.data.cart);
      } catch (err) {
        setError(err);
      }
    })();
  }, [cartList]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const totalItem = cartList.reduce((a, i) => a + i.quantity, 0);
  const totalAmount = cartList.reduce((a, i) => a + i.discPrice, 0);
  const totalDisc = cartList.reduce((a, i) => (a += i.price - i.discPrice), 0);

  async function removeCartHandler(id) {
    // try {
    await deleteCart(id, encodedToken);
    userDataDispatch({ type: "REMOVECART", payload: id });
    setError("");
    // } catch (err) {
    //   setError(err.response.data.message);
    // }
  }

  return (
    <>
      {isLoading ? (
        // must add a loader here
        <h2>...loading</h2>
      ) : (
        <>
          {error !== "" && <Error err={error} setError={setError} />}
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
                        <button className={`${cart["short-btn"]} mg-xs`}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button className={`${cart["short-btn"]} mg-xs`}>
                          +
                        </button>
                      </div>
                      <button
                        className="cart-btn full-width"
                        onClick={() => {
                          removeCartHandler(item.id);
                        }}
                      >
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
            {totalItem === 0 ? (
              <h1>Your cart is empty</h1>
            ) : (
              <div className={`${cart["amt-detail"]}`}>
                <h3>Amount Details</h3>
                <hr className="break" />

                <div>
                  <div className="flex-row spc-btwn">
                    <p>Amount( {totalItem} count)</p>
                    <p>₹{totalAmount}</p>
                  </div>
                  <div className="flex-row spc-btwn">
                    <p>Discount</p>
                    <p>₹{totalDisc}</p>
                  </div>
                  <div className="flex-row spc-btwn">
                    <p>Delivery charges</p>
                    <p>₹{199}</p>
                  </div>
                  <hr className="break" />
                  <div className="flex-row spc-btwn">
                    <strong></strong>
                    <strong>₹{totalAmount + 199}</strong>
                  </div>
                  <hr className="break" />
                  You will save ₹{totalDisc} on this order
                </div>
                <button className="full-width cart-btn">Place Order</button>
              </div>
            )}

            {/*  end of amount details */}
          </div>
        </>
      )}
    </>
  );
}
