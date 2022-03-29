import { products } from "..";
import { Filter, Categories, Error, ProductItems } from "components";
import { useFilter } from "reducers/filterReducer/reducer";
import { useState, useEffect } from "react";
import axios from "axios";

export function ProductList() {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState("");

  const [
    {
      outOfStock,
      sortBy,
      showBestseller,
      showTrending,
      showHandcrafted,
      withDiscount,
      ratingSelected,
      rangePrice,
    },
    filterDispatch,
  ] = useFilter();

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

  function getSortedProducts(products, sortBy) {
    if (sortBy === "PRICE_LOW_TO_HIGH") {
      return products.sort((a, b) => a.discPrice - b.discPrice);
    }
    if (sortBy === "PRICE_HIGH_TO_LOW") {
      return products.sort((a, b) => b.discPrice - a.discPrice);
    }
    return products;
  }

  function getFilteredProducts(
    sortedProducts,
    {
      showBestseller,
      showTrending,
      showHandcrafted,
      outOfStock,
      withDiscount,
      ratingSelected,
      rangePrice,
    }
  ) {
    return sortedProducts.filter(
      ({ inStock, discount, category, rating, discPrice }) =>
        (outOfStock ? true : inStock) &&
        (withDiscount ? discount > 0 : true) &&
        // the below condition checks if any category is selected or not, if none is selected then all items will return and if any category is selected then we check which category is selected and those item will be returned else false will return.
        (!(showBestseller || showTrending || showHandcrafted)
          ? true
          : (showBestseller ? category === "#1Bestseller" : false) ||
            (showTrending ? category === "Trending" : false) ||
            (showHandcrafted ? category === "Handcrafted" : false)) &&
        rating >= ratingSelected &&
        discPrice <= rangePrice
    );
  }

  const sortedProducts = getSortedProducts(productList, sortBy);

  const filteredProducts = getFilteredProducts(sortedProducts, {
    showBestseller,
    showTrending,
    showHandcrafted,
    outOfStock,
    withDiscount,
    ratingSelected,
    rangePrice,
  });

  return (
    <>
      {error !== "" && <Error err={error} setError={setError} />}

      <div className="parting flex-row">
        <Categories nav={"nav"} />
      </div>

      <main className={products["main-content"]}>
        <Filter
          filterDispatch={filterDispatch}
          sortBy={sortBy}
          outOfStock={outOfStock}
          showBestseller={showBestseller}
          showTrending={showTrending}
          showHandcrafted={showHandcrafted}
          withDiscount={withDiscount}
          ratingSelected={ratingSelected}
          rangePrice={rangePrice}
        />

        <div className="flex-row-wrap pd-m gap-xl flex-center product-display">
          {filteredProducts.map(
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
              inStock,
              rating,
            }) => {
              return (
                <ProductItems
                  key={id}
                  id={id}
                  category={category}
                  productImg={productImg}
                  productAlt={productAlt}
                  brand={brand}
                  product={product}
                  discPrice={discPrice}
                  price={price}
                  discount={discount}
                  inStock={inStock}
                  rating={rating}
                  setError={setError}
                />
              );
            }
          )}
        </div>
      </main>
      <div className="pagination flex-center pd-m">
        {["<", 1, 2, 3, 4, ">"].map((item) => {
          return (
            <a href="#" className="footer-link pd-xs" key={item}>
              {item}
            </a>
          );
        })}
      </div>
    </>
  );
}
