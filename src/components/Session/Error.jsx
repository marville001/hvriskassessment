import React from "react";

const Error = ({error}) => {
  return (
    <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }}>
      <h3>{error}</h3>
    </div>
  );
};

export default Error;
