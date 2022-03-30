import axios from "axios";

const BASEURL = "";

// USER RELATED API'S
export function postUserSignup({ firstName, lastName, email, password }) {
  return axios.post(BASEURL + "/api/auth/signup", {
    firstName,
    lastName,
    email,
    password,
  });
}

export function postUserLogin({ email, password }) {
  return axios.post(BASEURL + "/api/auth/login", {
    email,
    password,
  });
}

// WISHLIST API'S
export function postWishlist(
  {
    id,
    category,
    productImg,
    productAlt,
    brand,
    product,
    discPrice,
    price,
    discount,
    inStock,
    rating,
  },
  encodedToken
) {
  return axios.post(
    BASEURL + "/api/user/wishlist",
    {
      product: {
        id,
        category,
        productImg,
        productAlt,
        brand,
        product,
        discPrice,
        price,
        discount,
        inStock,
        rating,
      },
    },
    { headers: { authorization: encodedToken } }
  );
}

export function getWishlist(encodedToken) {
  return axios.get(BASEURL + "/api/user/wishlist", {
    headers: { authorization: encodedToken },
  });
}

export function deleteWishlist(id, encodedToken) {
  return axios.delete(BASEURL + "/api/user/wishlist/" + id, {
    headers: { authorization: encodedToken },
  });
}

// CART API'S

export function postCart(
  {
    id,
    category,
    productImg,
    productAlt,
    brand,
    product,
    discPrice,
    price,
    discount,
    inStock,
    rating,
    quantity,
  },
  encodedToken
) {
  return axios.post(
    BASEURL + "/api/user/cart",
    {
      product: {
        id,
        category,
        productImg,
        productAlt,
        brand,
        product,
        discPrice,
        price,
        discount,
        inStock,
        rating,
        quantity,
      },
    },
    { headers: { authorization: encodedToken } }
  );
}
