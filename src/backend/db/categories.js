import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    category: "Art & Decor",
    imgSrc: "/assets/images/artanddecor.webp",
    imgAlt: "vase and portraits",
    link: "/productList",
  },
  {
    _id: uuid(),
    category: "Lamps & lighting",
    imgSrc: "/assets/images/lampbed.webp",
    imgAlt: "bedside lamp",
    link: "/productList",
  },
  {
    _id: uuid(),
    category: "Kitchen & Dining",
    imgSrc: "/assets/images/plates.webp",
    imgAlt: "kitchenware, plates",
    link: "/productList",
  },
  {
    _id: uuid(),
    category: "Bath",
    imgSrc: "/assets/images/stackedSoap.webp",
    imgAlt: "handmade soaps",
    link: "/productList",
  },
  {
    _id: uuid(),
    category: "Bed Linen",
    imgSrc: "/assets/images/bed1.webp",
    imgAlt: "bedroom decor",
    link: "/productList",
  },
  {
    _id: uuid(),
    category: "Furnishings",
    imgSrc: "/assets/images/decor.webp",
    imgAlt: "hanging light and chair",
    link: "/productList",
  },
];
