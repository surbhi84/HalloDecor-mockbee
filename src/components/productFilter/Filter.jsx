import filter from "./filter.module.css";
import {
  filterSort,
  filterBestseller,
  filterTrending,
  filterHandcrafted,
  filterOutOfStock,
  filterDiscount,
  filterRating,
  filterRange,
  ClearFilters,
} from "reducers/filterReducer/actions";

export const Filter = ({
  filterDispatch,
  sortBy,
  outOfStock,
  showBestseller,
  showTrending,
  showHandcrafted,
  withDiscount,
  ratingSelected,
  rangePrice,
}) => {
  return (
    <div className={filter.filter}>
      <div className={`flex-row ${filter["filter-head"]}`}>
        <h4 className="marg-un">Filters</h4>
        <div
          onClick={() => {
            filterDispatch(ClearFilters());
          }}
        >
          Clear <i className="fas fa-times"></i>
        </div>
      </div>

      <div>
        <h4>Price</h4>
        <div className={filter["display-wrap"]}>
          <div className={filter["input-range-div"]}>
            <input
              type="range"
              className={filter["money-slider"]}
              min={500}
              max={2000}
              step={100}
              value={rangePrice}
              onChange={(e) => {
                filterDispatch(filterRange(e.target.value));
              }}
            />
            <ul className="range-values flex-row marg-un">
              <li className="bold-text">₹500</li>
              <li className="bold-text">₹{rangePrice}</li>
              <li className="bold-text">₹2000 </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CATEGORY */}

      <div className="flex-col gap-sm">
        <h4>Category</h4>
        {[
          {
            name: "Bestsellers",
            action: filterBestseller,
            check: showBestseller,
          },
          { name: "Trending", action: filterTrending, check: showTrending },
          {
            name: "Handcrafted",
            action: filterHandcrafted,
            check: showHandcrafted,
          },
        ].map(({ name, check, action }) => {
          return (
            <label key={name}>
              <input
                type="checkbox"
                onChange={() => {
                  filterDispatch(action());
                }}
                checked={check}
              />
              {name}
            </label>
          );
        })}
      </div>

      {/* FILTER BY  */}

      <div className="flex-col gap-sm">
        <h4>Filter By</h4>

        {[
          {
            filter: "Show Discounted",
            action: filterDiscount,
            check: withDiscount,
          },
          {
            filter: "Remove Out of Stock",
            action: filterOutOfStock,
            check: !outOfStock,
          },
        ].map(({ filter, action, check }) => {
          return (
            <label key={filter}>
              <input
                type="checkbox"
                onChange={() => {
                  filterDispatch(action());
                }}
                checked={check}
              />
              {filter}
            </label>
          );
        })}
      </div>

      {/* RATING */}

      <div className="flex-col gap-sm">
        <h4>Rating</h4>
        {[
          {
            star: 4,
            payload: 4,
            check: ratingSelected === 4,
          },
          {
            star: 3,
            payload: 3,
            check: ratingSelected === 3,
          },
          {
            star: 2,
            payload: 2,
            check: ratingSelected === 2,
          },
          {
            star: 1,
            payload: 1,
            check: ratingSelected === 1,
          },
        ].map(({ star, payload, check }) => {
          return (
            <label key={star} name="rating">
              <input
                type="checkbox"
                checked={check}
                onChange={() => {
                  filterDispatch(filterRating(payload));
                }}
              />
              {star} stars and above
            </label>
          );
        })}
      </div>

      {/* SORT BY */}

      <div className="flex-col gap-sm">
        <h4>Sort by</h4>
        {[
          {
            sort: "Price High to Low",
            action: filterSort,
            payload: "PRICE_HIGH_TO_LOW",
            check: sortBy === "PRICE_HIGH_TO_LOW",
          },
          {
            sort: "Price Low to High",
            action: filterSort,
            payload: "PRICE_LOW_TO_HIGH",
            check: sortBy === "PRICE_LOW_TO_HIGH",
          },
        ].map(({ sort, payload, check }) => {
          return (
            <label key={sort}>
              <input
                type="radio"
                name="sortbyprice"
                checked={check}
                onChange={() => {
                  filterDispatch(filterSort(payload));
                }}
              />
              {sort}
            </label>
          );
        })}
      </div>
    </div>
  );
};
