import { Error } from "./Error";
import { useState, useEffect } from "react";
import axios from "axios";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryError, setCategoryError] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        let categories = await axios.get("/api/categories");
        setCategories(categories.data.categories);
      } catch (err) {
        setCategoryError(true);
        console.log(err);
      }
    })();
  }, []);
  return (
    <>
      {categoryError && <Error err={"Categories can't be loaded"} />}

      {categories.map(({ category, link }) => {
        return (
          <a key={category} href={link} className="text-link text-dec-none ">
            {category}
          </a>
        );
      })}
    </>
  );
};
