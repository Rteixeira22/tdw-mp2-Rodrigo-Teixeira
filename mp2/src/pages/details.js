import React from "react";
import { useFetchMealByIdQuery } from "../components/apiRequest";

function MealDetails({ mealId }) {
  const { data: meal, isLoading, error } = useFetchMealByIdQuery(mealId);

  if (isLoading) return <p>Loading meal details...</p>;
  if (error)
    return (
      <p>Error fetching meal details: {error.data?.message || error.error}</p>
    );

  const mealDetails = meal?.meals?.[0];

  console.log("Meal Details:", mealDetails);

  return (
    <div>
      <h1>{mealDetails?.strMeal}</h1>
      <img
        src={mealDetails?.strMealThumb}
        alt={mealDetails?.strMeal}
        style={{ width: "300px" }}
      />
      <h3>Category: {mealDetails?.strCategory}</h3>
      <h3>Area: {mealDetails?.strArea}</h3>
      <p>{mealDetails?.strInstructions}</p>
    </div>
  );
}

export default MealDetails;
