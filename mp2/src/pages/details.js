import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MealDetails from "../components/detailsComponent";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { ButtonBack } from "../styles/styles";

function Details() {
  return (
    <div>
      <Link to={`/`} className="text-decoration-none">
        <ButtonBack>
          <IoArrowBack />
          Back
        </ButtonBack>
      </Link>
      <MealDetails />
    </div>
  );
}

export default Details;
