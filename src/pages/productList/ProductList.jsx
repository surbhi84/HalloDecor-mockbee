import { products } from "..";
import { Filter, Categories, Error } from "components";
import { useState, useEffect } from "react";
import axios from "axios";

export function ProductList() {
  const [productList, setProductList] = useState([]);

  const [error, setError] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        let products = await axios.get("/api/products");
        setProductList(products.data.products);
      } catch (err) {
        setError(true);
      }
    })();
  }, []);

  return (
    <>
      {error && <Error err={"Products can't be loaded"} />}

      <div className="parting flex-row">
        <Categories nav={"nav"} />
      </div>

      <main className={products["main-content"]}>
        <Filter />

        <div className="flex-row-wrap pd-m gap-xl flex-center product-display">
          {productList.map(
            ({
              id,
              category,
              productImg,
              productAlt,
              brand,
              product,
              discPrice,
              price,
              discount,
            }) => {
              return (
                <div className={products["card-ecom"]} key={id}>
                  <span className={`card-badge ${products["card-badg"]}`}>
                    {category !== "" ? category : ""}
                  </span>
                  <button className={products["like-btn"]}>
                    <img src="/assets/icons/redHeart.svg" alt="heart icon" />
                  </button>
                  <img
                    src={productImg}
                    alt={productAlt}
                    className="responsive-img"
                  />
                  <div className={products["product-details"]}>
                    <h4 className="marg-un">{brand}</h4>
                    <p className="marg-un">{product}</p>
                    <strong> ₹{discPrice} </strong> <s>{price}</s>
                    <span className="mg-xs">{discount}% OFF</span>
                  </div>
                  <button className="cart-btn gap-sm">
                    Add to cart
                    <img src="/assets/icons/bluecart.svg" alt="cart icon" />
                  </button>
                </div>
              );
            }
          )}
        </div>
      </main>
      <div class="pagination flex-center pd-m">
        {["<", 1, 2, 3, 4, ">"].map((item) => {
          return (
            <a href="#" class="footer-link pd-xs">
              {item}
            </a>
          );
        })}
      </div>
    </>
  );
}
