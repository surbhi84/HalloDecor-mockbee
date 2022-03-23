import filter from "./filter.module.css";
export const Filter = () => {
  return (
    <div className={filter.filter}>
      <div className={`flex-row ${filter["filter-head"]}`}>
        <h4 className="marg-un">Filters</h4>
        <div>
          <i className="fas fa-times"></i>
        </div>
      </div>

      <div>
        <h4>Price</h4>
        <div className={filter["display-wrap"]}>
          <div className={filter["input-range-div"]}>
            <input type="range" className={filter["money-slider"]} />
            <ul className="range-values flex-row">
              <li className="bold-text">₹100</li>
              <li className="bold-text">₹500</li>
              <li className="bold-text">₹1000</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-col gap-sm">
        <h4>Category</h4>
        {["Bestsellers", "Trending", "Handcrafted"].map((i) => {
          return (
            <label key={i}>
              <input type="checkbox" /> {i}
            </label>
          );
        })}
      </div>

      <div className="flex-col gap-sm">
        <h4>Filter By</h4>

        {["Discounted", "In Stock"].map((i) => {
          return (
            <label key={i}>
              <input type="checkbox" /> {i}
            </label>
          );
        })}
      </div>

      <div className="flex-col gap-sm">
        <h4>Rating</h4>
        {[4, 3, 2, 1].map((i) => {
          return (
            <label key={i}>
              <input type="checkbox" /> {i} stars and above
            </label>
          );
        })}
      </div>

      <div className="flex-col gap-sm">
        <h4>Sort by</h4>
        {[{ sort: "Price-High to Low" }, { sort: "Price-Low to High" }].map(
          ({ sort }) => {
            return (
              <label key={sort}>
                <input type="radio" name="sortbyprice" /> {sort}
              </label>
            );
          }
        )}
      </div>
    </div>
  );
};
