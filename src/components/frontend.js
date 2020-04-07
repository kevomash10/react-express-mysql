import React, { useState, useEffect } from "react";

const FrontEnd = () => {
  const [mydata, setMydata] = useState([]);
  //function to get data from backend
  const getData = async () => {
    const response = await fetch(`/`);
    const mydata = await response.json();
    setMydata(mydata);

    console.log(mydata);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>my data</h1>
    </div>
  );
};

export default FrontEnd;
