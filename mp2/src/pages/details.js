import React from "react";
import { useFetchMealByIdQuery } from "../components/apiRequest";
import { useParams } from "react-router-dom";

function MealDetails() {
  const { mealId } = useParams();

  const { data: meal, isLoading, error } = useFetchMealByIdQuery(mealId);

  if (isLoading) return <p>Loading details...</p>;
  if (error)
    return <p>Error fetching details: {error.data?.message || error.error}</p>;

  return (
    <div>
      {console.log("Meal Details:", meal)}
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
    </div>
  );
}

export default MealDetails;
