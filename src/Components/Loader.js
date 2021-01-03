import React from "react";
import { Spinner } from "react-bootstrap";
import "../Css/Loader.css";

const Loader = () => {
  return (
    <div className="loaderDisplay">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loader;
