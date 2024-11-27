import React from "react";
import { useFetchMealByIdQuery } from "../components/apiRequest";
import { useParams } from "react-router-dom";
import {
  ContainerDetails,
  MealImageDetails,
  DetailsWrapper,
  IngredientsList,
  Instructions,
} from "../components/styles";

function MealDetails() {
  const { mealId } = useParams();
  const { data: meal, isLoading, error } = useFetchMealByIdQuery(mealId);

  if (isLoading) return <p>Loading details...</p>;
  if (error)
    return <p>Error fetching details: {error.data?.message || error.error}</p>;

  if (!meal) return <p>No meal details available</p>;

  return (
    <ContainerDetails>
      {meal.meals?.map((meal) => (
        <div key={meal.idMeal}>
          <DetailsWrapper>
            <MealImageDetails src={meal.strMealThumb} alt={meal.strMeal} />
            <div>
              <h1>{meal.strMeal}</h1>
              <p>Category: {meal.strCategory}</p>
              <p>Area: {meal.strArea}</p>
              <p>Ingredients:</p>
              <IngredientsList>
                {Object.keys(meal)
                  .filter((key) => key.startsWith("strIngredient") && meal[key])
                  .map((key) => (
                    <li key={key}>
                      {meal[key]} - {meal[`strMeasure${key.slice(13)}`]}
                    </li>
                  ))}
              </IngredientsList>
            </div>
          </DetailsWrapper>
          <Instructions>
            <h2>Instructions</h2>
            <p>{meal.strInstructions}</p>
          </Instructions>
        </div>
      ))}
    </ContainerDetails>
  );
}

export default MealDetails;
