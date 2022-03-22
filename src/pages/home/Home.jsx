import "./home.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  useEffect(() => {
    (async function () {
      try {
        let category = await axios.get("/api/categories");
        setCategories(category.data.categories);
      } catch (err) {}
    })();
  });

  const [categories, setCategories] = useState([]);

  return (
    <>
      <main className="flex-col">
        {/* <!-- block-1 --> */}
        <div className="display-block">
          <div className="flex-row landscape-overcard">
            <img
              src="/assets/images/sofaBeige.webp"
              alt="living room decor"
              className="responsive-img"
            />
            {/* <!-- over-card --> */}
            <div className="overlay-solid-card med-text">
              Welcome to your one stop shop for elegant and chic Decor.
            </div>
          </div>
        </div>
        {/* <!-- end of block-1 --> */}

        {/* <!-- block-2 --> */}
        <div className="display-block flex-row">
          {broadCategories.map((bCategory) => {
            return (
              <div className="category-overlay-card" key={bCategory.category}>
                <div className="inner-category-overlay card-scale flex-center">
                  <img
                    src={bCategory.imgSrc}
                    alt={bCategory.imgAlt}
                    className="responsive-img opaque"
                  />
                  <a className="text-overlay-card" href={bCategory.link}>
                    {bCategory.category}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        {/* <!-- end of block-2 --> */}

        {/* <!-- block-3 --> */}
        <div className="display-block flex-row-wrap flex-center">
          {categories.map((category) => {
            return (
              <div className="category-card" key={category.category}>
                <a className="text-dec-none" href={category.link}>
                  <div className="inner-category-card card-scale">
                    <img
                      src={category.imgSrc}
                      alt={category.imgAlt}
                      className="responsive-img"
                    />
                    <p className="mg-xs text-center">{category.category}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        {/* <!-- end of block-3 --> */}
      </main>
    </>
  );
};

export const broadCategories = [
  {
    category: "Bestsellers",
    imgSrc: "/assets/images/whitemirror1.webp",
    imgAlt: "mirror on a wall and cuishons",
    link: "/productList",
  },
  {
    category: "Handcrafted",
    imgSrc: "/assets/images/basket1.webp",
    imgAlt: "basket image",
    link: "/productList",
  },
  {
    category: "Trendsetters",
    imgSrc: "/assets/images/chairtable1.webp",
    imgAlt: "chair and table decor",
    link: "/productList",
  },
];
