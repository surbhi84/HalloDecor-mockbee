import { Error } from "./Error";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Categories = ({ nav }) => {
  const [categories, setCategories] = useState([]);
  const [categoryError, setCategoryError] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        let categories = await axios.get("/api/categories");
        setCategories(categories.data.categories);
      } catch (err) {
        setCategoryError(true);
      }
    })();
  }, []);
  return (
    <>
      {nav === "nav" ? (
        <>
          {" "}
          {categoryError && <Error err={"Categories can't be loaded"} />}
          {categories.map(({ category, link }) => {
            return (
              <Link
                key={category}
                to={link}
                className="text-link text-dec-none "
              >
                {category}
              </Link>
            );
          })}
        </>
      ) : (
        <>
          {categories.map(({ id, category, link, imgSrc, imgAlt }) => {
            return (
              <div className="category-card" key={id}>
                <Link className="text-dec-none" to={link}>
                  <div className="inner-category-card card-scale">
                    <img src={imgSrc} alt={imgAlt} className="responsive-img" />
                    <p className="mg-xs text-center">{category}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
