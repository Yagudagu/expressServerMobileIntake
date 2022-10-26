import { HouseholdWith } from "./models";
import axios from "axios";

const rootUrl = "https://testing.jacobmartinworld.com";

const API = {
  fetchHouseholds: async () => {
    const endpoint = `${rootUrl}/api/allHouseholds`;
    return await (
      await fetch(endpoint, {
        credentials: "include",
      })
    ).json();
  },
  updateHousehold: async (household: HouseholdWith, changes: Object) => {
    const endpoint = `${rootUrl}/api/updateHousehold/${household._id}`;

    return await (
      await fetch(endpoint, {
        method: "PATCH",
        credentials: "include",
        body: JSON.stringify(changes),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
    ).json();
  },
  deleteHousehold: async (id: string) => {
    const endpoint = `${rootUrl}/api/deleteHousehold/${id}`;
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
      method: "POST",
      credentials: "include",
    });
  },
  url: () => {
    return rootUrl;
  },
};

export default API;
