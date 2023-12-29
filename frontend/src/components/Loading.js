import React from "react";

const Loading = () => {
  return (
    <div className="spinner-border text-danger" role="status" style={{height:"100px",width:"100px",marginTop:"100px"}}>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;
