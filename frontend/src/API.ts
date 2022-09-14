import { HouseholdWith } from "./models";
import axios from "axios";
import cookies from "js-cookie";

//const rootUrl = "http://127.0.0.1:3333";
//const rootUrl = "http://127.0.0.1:7071";
const rootUrl = "http://158.101.21.143:3333";

const token = cookies.get("token");

const API = {
  fetchHouseholds: async () => {
    const endpoint = `${rootUrl}/api/household`;
    return await (
      await fetch(endpoint, {
        credentials: "include",
      })
    ).json();
  },
  updateHousehold: async (household: HouseholdWith, changes: Object) => {
    const endpoint = `${rootUrl}/api/household?id=${household._id}`;

    return await (
      await fetch(endpoint, {
        method: "PATCH",
        credentials: "include",
        body: JSON.stringify(changes),
      })
    ).json();
  },
  deleteHousehold: async (id: string) => {
    const endpoint = `${rootUrl}/api/household?&id=${id}`;
    return await fetch(endpoint, {
      method: "DELETE",
      credentials: "include",
    });
  },
  login: async (username: string, password: string) => {
    return axios.post(
      `${rootUrl}/api/login`,
      {
        username: username,
        password: password,
      },
      {
        withCredentials: true,
      }
    );
  },
  logout: async () => {
    const endpoint = `${rootUrl}/api/logout`;
    return await fetch(endpoint);
  },
  verify: async () => {
    const endpoint = `${rootUrl}/api/check`;
    return await fetch(endpoint, {
      credentials: "include",
    });
  },
};

export default API;
