import React from "react";
import { HalfCircleSpinner } from "react-epic-spinners";
import { LoaderContainer, LoaderText } from "../styles/styles";

function Loader() {
  return (
    <LoaderContainer>
      <HalfCircleSpinner color="#009dff" size={50} />
      <LoaderText>Loading...</LoaderText>
    </LoaderContainer>
  );
}

export default Loader;
