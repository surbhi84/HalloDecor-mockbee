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

export function filterSort(payload) {
  return { type: SORT, payload };
}
export function filterDiscount() {
  return { type: TOGGLE_DISCOUNT };
}
export function filterBestseller() {
  return { type: TOGGLE_BESTSELLER };
}
export function filterTrending() {
  return { type: TOGGLE_TRENDING };
}
export function filterHandcrafted() {
  return { type: TOGGLE_HANDCRAFTED };
}
export function filterOutOfStock() {
  return { type: TOGGLE_OUTOFSTOCK };
}
export function filterRating(payload) {
  return { type: SET_RATING, payload };
}
export function filterRange(payload) {
  return { type: SET_RANGE, payload };
}
export function ClearFilters() {
  return { type: CLEAR_FILTERS };
}
