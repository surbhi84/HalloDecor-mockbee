import { getProducts } from "api";
import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const ProductListContext = createContext();

export function ProductsProvider({ children }) {
  const [filteredProductList, setFilteredProductList] = useState([]);
  async function initialProductList() {
    try {
      const products = await getProducts();
      return products.data.products;
      //   setProductList(products.data.products);
    } catch (err) {
      //   setError(true);
      return [];
    }
  }

  useEffect(() => {
    (async () => {
      const initialProducts = await initialProductList();
      setFilteredProductList(initialProducts);
    })();
  }, []);

  return (
    <ProductListContext.Provider
      value={{ filteredProductList, setFilteredProductList }}
    >
      {children}
    </ProductListContext.Provider>
  );
}

export const useProducts = () => useContext(ProductListContext);
