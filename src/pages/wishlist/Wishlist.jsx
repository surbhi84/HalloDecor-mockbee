import { products, wish } from "..";
import { useUserData } from "hooks/context/userDataContext";
import { useEffect, useState } from "react";
import { getWishlist, deleteWishlist } from "api";

export function Wishlist() {
  const [error, setError] = useState("");
  const {
    userData: {
      user: { wishlist },
      encodedToken,
    },
    userDataDispatch,
  } = useUserData();

  // useEffect(() => {
  //   (async () => {
  //     const userWishlist = await getWishlist(encodedToken);
  //     console.log(userWishlist);
  //     userDataDispatch({
  //       type: "SETWISHLIST",
  //       payload: userWishlist.data.products,
  //     });
  //   })();
  // }, []);

  return (
    <>
      {error !== "" && <Error err={error} setError={setError} />}
      <div className="parting flex-row">
        <h2 className="text-link">My Wishlist</h2>
      </div>
      <div className="flex-center gap-xl mg-m mg-btm flex-wrap">
        {wishlist.length === 0 ? (
          <h1> Your Wishlist is Empty</h1>
        ) : (
          wishlist.map((wishItem) => {
            console.log(wishItem);
            return (
              <div
                className={`${products["card-ecom"]} ${wish["wishlist-card"]}`}
                key={wishItem.id}
              >
                <img
                  src={wishItem.productImg}
                  alt={wishItem.productAlt}
                  className="responsive-img"
                />
                <div
                  className={`${products["product-details"]} flex-col flex-center`}
                >
                  <h4 className="marg-un">{wishItem.brand}</h4>
                  <p className="marg-un">{wishItem.product}</p>
                  <div className={wish["wish-price"]}>
                    <strong> ₹{wishItem.discPrice}</strong>
                    <s>₹{wishItem.price}</s>
                  </div>
                </div>
                <button className="cart-btn gap-sm">Move to cart</button>
                <button
                  className="cart-btn gap-sm"
                  onClick={async () => {
                    try {
                      await deleteWishlist(wishItem.id, encodedToken);
                      setError("");
                      console.log(wishItem);
                      userDataDispatch({
                        type: "REMOVEWISHLIST",
                        payload: wishItem.id,
                      });
                    } catch (err) {
                      console.log(err);
                      setError(err.response.data.message);
                    }
                  }}
                >
                  Remove from Wishlist
                </button>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
