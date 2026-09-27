import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const [std, setStd] = useState([]);
  useEffect(() => {
    axios
      .get("/api/student")
      .then((res) => {
        setStd(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <h1>React.js Tutorial</h1>
      <p>Total lenght : {std.length}</p>

      {std.map((s, index) => (
        <div className="" key={index}>
          <h3>{s.id}</h3>
          <h4>{s.name}</h4>
          <h5>{s.age}</h5>
        </div>
      ))}
    </div>
  );
};

export default App;
