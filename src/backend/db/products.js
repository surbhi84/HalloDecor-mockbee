import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    // 1
    id: uuid(),
    category: "#1Bestseller",
    brand: "Vinaya Beauty",
    product: "Handmade soap set",
    productImg: process.env.PUBLIC_URL + "assets/images/stackedSoap.webp",
    productAlt: "handmade soap set",
    discPrice: 749,
    price: 999,
    discount: 25,
    inStock: true,
    rating: 1,
    quantity: 0,
  },
  {
    // 2
    id: uuid(),
    category: "Trending",
    brand: "Vilas dining",
    product: "Designer kitchen plate",
    productImg: "assets/images/plates.webp",
    productAlt: "plates",
    discPrice: 1349,
    price: 2139,
    discount: 35,
    inStock: false,
    rating: 2,
    quantity: 0,
  },
  {
    // 3
    id: uuid(),
    category: "#1Bestseller",
    brand: "Nature jewels",
    product: "Storage basket",
    productImg: "assets/images/basket1.webp",
    productAlt: "handmade woven storage basket",
    discPrice: 1299,
    price: 1699,
    discount: 23,
    inStock: true,
    rating: 1,
    quantity: 0,
  },
  {
    // 4
    id: uuid(),
    category: "Trending",
    brand: "Windbox Decor",
    product: "Set of wall portraits",
    productImg: "assets/images/whitebase.webp",
    productAlt: "wall portraits",
    discPrice: 749,
    price: 999,
    discount: 25,
    inStock: true,
    rating: 4,
    quantity: 0,
  },
  {
    // 5
    id: uuid(),
    category: "",
    brand: "Nature jewels",
    product: "Wooden Handmade toy",
    productImg: "/assets/images/toy.webp",
    productAlt: "wooden toy",
    discPrice: 895,
    price: 1489,
    discount: 40,
    inStock: false,
    rating: 5,
    quantity: 0,
  },

  {
    // 6
    id: uuid(),
    category: "Handcrafted",
    brand: "Mansa creations",
    product: "Ceramic vase",
    productImg: "/assets/images/artanddecor.webp",
    productAlt: "mustard ceramic vase",
    discPrice: 1456,
    price: 1799,
    discount: 40,
    inStock: false,
    rating: 4.5,
    quantity: 0,
  },

  {
    // 3 - 7
    id: uuid(),
    category: "#1Bestseller",
    brand: "Nature jewels",
    product: "Storage basket",
    productImg: "/assets/images/basket1.webp",
    productAlt: "handmade woven storage basket",
    discPrice: 1699,
    price: 1699,
    discount: 0,
    inStock: true,
    rating: 2,
    quantity: 0,
  },
  {
    // 4 - 8
    id: uuid(),
    category: "Trending",
    brand: "Windbox Decor",
    product: "Set of wall portraits",
    productImg: "/assets/images/whitebase.webp",
    productAlt: "wall portraits",
    discPrice: 999,
    price: 999,
    discount: 0,
    inStock: true,
    rating: 3,
    quantity: 0,
  },
  //  {
  //    {
  //   id: uuid(),
  //   category: ,
  //   brand: ,
  //   product: ,
  //   productImg: ,
  //   productAlt: ,
  //   discPrice: 1349,
  //   price: 2139,
  //   discount: 35,
  //   inStock: true,
  //   rating: 4,
  //   quantity: 0,
  // },
];
