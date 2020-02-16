import React from "react";
import User from "../../components/User";

const authIndexpage = props => (
  <div>
    <h1>Auth Index Page- {props.appName}</h1>
    <User name="Max" age={28}></User>
  </div>
);

authIndexpage.getInitialProps = context => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Super App(Auth)" });
    }, 2000);
  });
  return promise;
};

export default authIndexpage;
