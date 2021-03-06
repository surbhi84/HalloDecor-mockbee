import { products, wish } from "..";
import { useUserData } from "hooks/context/userDataContext";
import { useEffect, useState } from "react";
import { getWishlist, deleteWishlist, postCart } from "api";

export function Wishlist() {
  const [error, setError] = useState("");
  const {
    userData: {
      user: { wishlist },
      encodedToken,
    },
    userDataDispatch,
  } = useUserData();

  // to be implemented later( here for reference )
  // useEffect(() => {
  //   (async () => {
  //     const userWishlist = await getWishlist(encodedToken);
  //     userDataDispatch({
  //       type: "SETWISHLIST",
  //       payload: userWishlist.data.products,
  //     });
  //   })();
  // }, []);

  async function removeWishlistHandler(id) {
    try {
      await deleteWishlist(id, encodedToken);
      setError("");
      userDataDispatch({
        type: "REMOVEWISHLIST",
        payload: id,
      });
    } catch (err) {
      setError(err.response.data.message);
    }
  }

  async function wishlistToCartHandler(product) {
    try {
      await deleteWishlist(product.id, encodedToken);
      await postCart(product, encodedToken);
      setError("");
      userDataDispatch({ type: "ADDTOCART", payload: product });
      userDataDispatch({
        type: "REMOVEWISHLIST",
        payload: product.id,
      });
    } catch (err) {
      setError(err.response.data.message);
    }
  }

  return (
    <>
      {error !== "" && <Error err={error} setError={setError} />}
      <div className="parting flex-row">
        <h2 className="text-link">My Wishlist</h2>
      </div>

      <div className="flex-center gap-xl mg-m mg-btm flex-wrap">
        {wishlist.length === 0 ? (
          <div>
            <img
              src="/assets/images/wishlist.svg"
              alt="wishlist image"
              style={{ height: "15rem" }}
            />
            <h3>Ooops...Your Wishlist is empty!</h3>
          </div>
        ) : (
          wishlist.map((wishItem) => {
            return (
              <div
                key={wishItem.id}
                className={`${products["card-ecom"]} ${wish["wishlist-card"]}`}
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
                    <strong> ???{wishItem.discPrice}</strong>
                    <s>???{wishItem.price}</s>
                  </div>
                </div>

                <button
                  className="cart-btn gap-sm"
                  onClick={() => {
                    wishlistToCartHandler(wishItem);
                  }}
                >
                  Move to cart
                </button>

                <button
                  className="cart-btn gap-sm"
                  onClick={() => {
                    removeWishlistHandler(wishItem.id);
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
