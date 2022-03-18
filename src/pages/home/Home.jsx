import "./home.css";

const broadCategories = [
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

export const categories = [
  {
    category: "Art & Decor",
    imgSrc: "/assets/images/artanddecor.webp",
    imgAlt: "vase and portraits",
    link: "/productList",
  },
  {
    category: "Lamps & lighting",
    imgSrc: "/assets/images/lampbed.webp",
    imgAlt: "bedside lamp",
    link: "/productList",
  },
  {
    category: "Kitchen & Dining",
    imgSrc: "/assets/images/plates.webp",
    imgAlt: "kitchenware, plates",
    link: "/productList",
  },
  {
    category: "Bath",
    imgSrc: "/assets/images/stackedSoap.webp",
    imgAlt: "handmade soaps",
    link: "/productList",
  },
  {
    category: "Bed Linen",
    imgSrc: "/assets/images/bed1.webp",
    imgAlt: "bedroom decor",
    link: "/productList",
  },
  {
    category: "Furnishings",
    imgSrc: "/assets/images/decor.webp",
    imgAlt: "hanging light and chair",
    link: "/productList",
  },
];

export const Home = () => (
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
