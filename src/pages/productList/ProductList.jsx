import "./productList.css";
import { categories } from "../home/Home";
import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import axios from "axios";

export function ProductList() {
  return (
    <>
      <div className="parting flex-row">
        {categories.map(({ category, link }) => {
          return (
            <a key={category} href={link} className="text-dec-none text-link ">
              {category}
            </a>
          );
        })}
      </div>

      <main className="main-content">
        <div className="filter">
          <div className="flex-row filter-head">
            <h4 className="marg-un">Filters</h4>
            <div>
              <i className="fas fa-times"></i>
            </div>
          </div>

          <div>
            <h4>Price</h4>
            <div className="display-wrap">
              <div className="input-range-div">
                <input type="range" className="money-slider" />
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

        <div className="flex-row-wrap pd-m gap-xl flex-center product-display">
          {productList.map((prod) => {
            return (
              <div className="card-ecom" key={prod.id}>
                <span className="card-badge">
                  {prod.category !== "" ? prod.category : ""}
                </span>
                <button className="like-btn">
                  <img src="/assets/icons/redHeart.svg" alt="heart icon" />
                </button>
                <img
                  src={prod.productImg}
                  alt={prod.productAlt}
                  className="responsive-img"
                />
                <div className="product-details">
                  <h4 className="marg-un">{prod.brand}</h4>
                  <p className="marg-un">{prod.product}</p>
                  <strong> ₹{prod.discPrice} </strong> <s>{prod.price}</s>
                  <span className="mg-xs">{prod.discount}% OFF</span>
                </div>
                <button className="cart-btn gap-sm">
                  Add to cart
                  <img src="/assets/icons/bluecart.svg" alt="cart icon" />
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
