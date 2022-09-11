import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import cookies from "js-cookie";

import API from "./API";

interface Props {}

const AdminLogin: React.FC<Props> = (props) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const response = await API.login(e.target[0].value, e.target[1].value);

    response.status === 200 && setLoggedIn(true);

    console.log(response);

    //cookies.set("token", response.data.token);
  };

  useEffect(() => {
    API.verify().then((response) => {
      console.log(response);
      response.status === 201 && setLoggedIn(true);
    });
  }, []);

  return loggedIn ? (
    <Admin setLoggedIn={setLoggedIn} />
  ) : (
    <div className="admin_login_container">
      <h1>Admin Login</h1>
      <form onSubmit={(e) => handleLogin(e)}>
        <div>
          <label>Username</label>
          <input type="text" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
