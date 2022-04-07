import { useReducer } from "react";
import {
  SORT,
  TOGGLE_DISCOUNT,
  TOGGLE_BESTSELLER,
  TOGGLE_HANDCRAFTED,
  TOGGLE_OUTOFSTOCK,
  TOGGLE_TRENDING,
  SET_RANGE,
  SET_RATING,
  CLEAR_FILTERS,
} from "./types";

export const useFilter = () => {
  const initialFilterState = {
    outOfStock: true,
    sortBy: null,
    showBestseller: false,
    showTrending: false,
    showHandcrafted: false,
    withDiscount: false,
    ratingSelected: 0,
    rangePrice: 2000,
  };

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );

  function filterReducer(state, action) {
    switch (action.type) {
      case SORT:
        return { ...state, sortBy: action.payload };
      case TOGGLE_DISCOUNT:
        return { ...state, withDiscount: !state.withDiscount };
      case TOGGLE_OUTOFSTOCK:
        return { ...state, outOfStock: !state.outOfStock };
      case TOGGLE_BESTSELLER:
        return { ...state, showBestseller: !state.showBestseller };
      case TOGGLE_TRENDING:
        return { ...state, showTrending: !state.showTrending };
      case TOGGLE_HANDCRAFTED:
        return { ...state, showHandcrafted: !state.showHandcrafted };
      case SET_RATING:
        return { ...state, ratingSelected: action.payload };
      case SET_RANGE:
        return { ...state, rangePrice: action.payload };
      case CLEAR_FILTERS:
        return {
          outOfStock: true,
          sortBy: null,
          showBestseller: false,
          showTrending: false,
          showHandcrafted: false,
          withDiscount: false,
          ratingSelected: 0,
          rangePrice: 10000,
        };
      default:
        return state;
    }
  }

  return [filterState, filterDispatch];
};
