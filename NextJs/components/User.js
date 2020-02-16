import React from "react";

const user = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <style jsx>{`
        div {
          boarder: 1px solid #eee;
          box-shadow: 0 2px 3px;
          padding: 20px;
          text-align: center;
          width: 80%;
          margin: 20px auto;
        }
      `}</style>
    </div>
  );
};

export default user;
