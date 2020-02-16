import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class Indexpage extends Component {
  static async getInitialProps(context) {
    console.log(context);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "Super App" });
      }, 2000);
    });
    return promise;
  }

  render() {
    return (
      <div>
        <h1>Main Page of {this.props.appName}</h1>
        <p>
          Go to
          <Link href="/auth">
            <a> Auth Page</a>
          </Link>
        </p>
        <button onClick={() => Router.push("/auth")}>Got to Auth</button>
      </div>
    );
  }
}

export default Indexpage;
