import React, { useState } from "react";
import { useFetchMealsByCategoryQuery } from "./apiRequest";
import {
  MealCard,
  MealListContainer,
  MealTitle,
  MealImage,
  MealCategorySelect,
} from "./styles";
import { Link } from "react-router-dom";
import { setSelectedMealId } from "./mealSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function MealList() {
  const [category, setCategory] = useState("Seafood");
  const {
    data: meals,
    isLoading,
    error,
  } = useFetchMealsByCategoryQuery(category);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLoading) return <p>Loading meals...</p>;
  if (error)
    return <p>Error fetching meals: {error.data?.message || error.error}</p>;

  /*  const handleCardClick = (meal) => {
    dispatch(setSelectedMealId(meal.idMeal));
    navigate("/details");
  }; */

  return (
    <MealListContainer>
      <h1>Meals in Category: {category}</h1>
      <MealCategorySelect
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        <option value="Seafood">Seafood</option>
        <option value="Dessert">Dessert</option>
        <option value="Beef">Beef</option>
        <option value="Vegetarian">Vegetarian</option>
      </MealCategorySelect>

      <div className="meal-cards">
        {meals?.meals?.map((meal) => (
          <MealCard key={meal.idMeal}>
            <MealImage src={meal.strMealThumb} alt={meal.strMeal} />
            <MealTitle>{meal.strMeal}</MealTitle>
            <p>{meal.idMeal}</p>
            <Link to={`/details/${meal.idMeal}`}>View Details</Link>
          </MealCard>
        ))}
      </div>
    </MealListContainer>
  );
}

export default MealList;
