import "./home.css";
import { Categories } from "components";
import { Link } from "react-router-dom";

export const Home = () => {
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
          {broadCategories.map(({ category, imgSrc, imgAlt, link }) => {
            return (
              <div className="category-overlay-card" key={category}>
                <div className="inner-category-overlay card-scale flex-center">
                  <img
                    src={imgSrc}
                    alt={imgAlt}
                    className="responsive-img opaque"
                  />
                  <Link className="text-overlay-card" to={link}>
                    {category}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        {/* <!-- end of block-2 --> */}

        {/* <!-- block-3 --> */}
        <div className="display-block flex-row-wrap flex-center">
          <Categories />
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
    link: "/products",
  },
  {
    category: "Handcrafted",
    imgSrc: "/assets/images/basket1.webp",
    imgAlt: "basket image",
    link: "/products",
  },
  {
    category: "Trendsetters",
    imgSrc: "/assets/images/chairtable1.webp",
    imgAlt: "chair and table decor",
    link: "/products",
  },
];
