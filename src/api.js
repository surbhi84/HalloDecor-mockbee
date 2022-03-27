import axios from "axios";

const BASEURL = "";

export function postUserSignup({ firstName, lastName, email, password }) {
  return axios.post(BASEURL + "/api/auth/signup", {
    firstName,
    lastName,
    email,
    password,
  });
}
