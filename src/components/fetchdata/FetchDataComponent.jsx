import React from "react";

const FetchDataComponent = (props) => {
  return (
    <div className="singleContainer">
      <div className="">
        <h1 className="mt-12 ml-4 text-3xl mb-4">{props.heading}</h1>
        <hr />
        <div className="flex m-4">
          <p className="text-lg ml-2 mr-16"></p>
        </div>
        <hr />
        <div className="flex m-4">
          <p className="text-lg ml-2 mr-16"></p>
        </div>
      </div>
    </div>
  );
};

export default FetchDataComponent;
