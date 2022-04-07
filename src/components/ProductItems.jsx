import { deleteWishlist, postWishlist, postCart } from "api";
import { useUserData } from "hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "pages";
import { MdStar } from "react-icons/md";

export function ProductItems({
  id,
  category,
  productImg,
  productAlt,
  brand,
  product,
  discPrice,
  price,
  discount,
  inStock,
  rating,
  quantity,
  error,
  setError,
}) {
  const [hover, setHover] = useState([false, ""]);
  const navigate = useNavigate();
  const { userData, userDataDispatch, isAuth } = useUserData();
  const [isWishlist, setIsWishlist] = useState(() =>
    !isAuth() ? false : userData.user.wishlist.some((i) => i.id === id)
  );

  async function likeDislikeHandler() {
    if (!isAuth()) navigate("/login");
    else {
      const productItem = {
        id,
        category,
        productImg,
        productAlt,
        brand,
        product,
        discPrice,
        price,
        discount,
        inStock,
        rating,
      };
      try {
        if (userData.user.wishlist.some((i) => i.id === id)) {
          userDataDispatch({ type: "REMOVEWISHLIST", payload: id });
          deleteWishlist(id, userData.encodedToken);
          setError("");
        } else {
          userDataDispatch({
            type: "ADDWISHLIST",
            payload: productItem,
          });
          postWishlist(productItem, userData.encodedToken);
          setError("");
        }
        setIsWishlist((p) => !p);
      } catch (err) {
        setError(err.response.data.message);
      }
    }
  }

  async function addToCartHandler() {
    const productItem = {
      id,
      category,
      productImg,
      productAlt,
      brand,
      product,
      discPrice,
      price,
      discount,
      inStock,
      rating,
      quantity,
    };
    try {
      if (!isAuth()) {
        navigate("/login");
        return;
      }
      await postCart(productItem, userData.encodedToken);
      userDataDispatch({ type: "ADDTOCART", payload: productItem });
      setError("");
    } catch (err) {
      setError(err.response.data.message);
    }
  }

  return (
    <div
      key={id}
      className={products["outer-card-div"]}
      onMouseEnter={() => setHover([true, id])}
      onMouseLeave={() => setHover([false, id])}
    >
      {!inStock && (
        <p
          className={
            hover[0] === true && hover[1] === id
              ? `${products["outStock"]} ${products["highlight"]}`
              : products["outStock"]
          }
        >
          Out Of Stock
        </p>
      )}

      {error !== "" && <Error err={error} setError={setError} />}
      <div
        className={
          inStock
            ? products["card-ecom"]
            : `${products["card-ecom"]} ${products["card-out-of-stock"]}`
        }
        key={id}
      >
        <span className={`card-badge ${products["card-badg"]}`}>
          {category !== "" ? category : ""}
        </span>

        <button
          className={products["like-btn"]}
          onClick={likeDislikeHandler}
          disabled={inStock === false}
        >
          {isWishlist ? (
            <img src="/assets/icons/redHeart.svg" alt="heart icon" />
          ) : (
            <img src="/assets/icons/heartFilled1.svg" alt="heart icon" />
          )}
        </button>

        <img src={productImg} alt={productAlt} className="responsive-img" />

        <div className={` flex-row ${products["product-details"]}`}>
          <div>
            <h4 className="marg-un">{brand}</h4>
            <p className="marg-un">{product}</p>
            <strong> ₹{discPrice} </strong> <s>{price}</s>
            <span className="mg-xs">{discount}% OFF</span>
          </div>

          <div className="rating-span">
            {rating}
            <MdStar />
          </div>
        </div>

        <button
          className="cart-btn gap-sm"
          onClick={addToCartHandler}
          disabled={inStock === false}
        >
          Add to cart
          <img src="/assets/icons/bluecart.svg" alt="cart icon" />
        </button>
      </div>
    </div>
  );
}
