import { HouseholdWith } from "./models";
import axios from "axios";
import cookies from "js-cookie";

//const rootUrl = "http://127.0.0.1:3333";
//const rootUrl = "http://127.0.0.1:7071";
const rootUrl = "https://158.101.21.143:3333";
const authKeyHouse = "EFl/qjWJ48nnbZrtrvQPy0n2ZVl8HaxwrL5a1zzCMY5On301PiAHzA==";
const authKeyAuth = "Pqma5ozI2SMyS/8pJA6754Fq7aM9N5j00g9TIiv2EU52QTmASuO7gA==";

const token = cookies.get("token");

const API = {
  fetchHouseholds: async () => {
    const endpoint = `${rootUrl}/api/household?code=${authKeyHouse}`;
    return await (
      await fetch(endpoint, {
        credentials: "include",
      })
    ).json();
  },
  updateHousehold: async (household: HouseholdWith, changes: Object) => {
    const endpoint = `${rootUrl}/api/household?code=${authKeyHouse}&id=${household._id}`;

    return await (
      await fetch(endpoint, {
        method: "PATCH",
        credentials: "include",
        body: JSON.stringify(changes),
      })
    ).json();
  },
  deleteHousehold: async (id: string) => {
    const endpoint = `${rootUrl}/api/household?code=${authKeyHouse}&id=${id}`;
    return await fetch(endpoint, {
      method: "DELETE",
      credentials: "include",
    });
  },
  login: async (username: string, password: string) => {
    return axios.post(
      `${rootUrl}/api/auth/login?code=${authKeyAuth}`,
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
    const endpoint = `${rootUrl}/api/auth/logout?code=${authKeyAuth}`;
    return await fetch(endpoint);
  },
  verify: async () => {
    const endpoint = `${rootUrl}/api/auth/check?code=${authKeyAuth}`;
    return await fetch(endpoint, {
      credentials: "include",
    });
  },
};

export default API;
