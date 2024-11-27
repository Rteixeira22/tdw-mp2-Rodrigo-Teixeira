import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Listar from "../components/listar";

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <Listar />
    </div>
  );
}

export default Home;
