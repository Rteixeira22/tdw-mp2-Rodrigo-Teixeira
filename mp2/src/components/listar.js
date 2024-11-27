import React, { useState } from "react";
import { useFetchMealsByCategoryQuery } from "./apiRequest";
import {
  MealCard,
  MealListContainer,
  MealTitle,
  MealImage,
  MealCategorySelect,
  ButtonLink,
} from "./styles";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function MealList() {
  const [category, setCategory] = useState("beef");
  const [categories, setCategories] = useState([]);

  const {
    data: meals,
    isLoading,
    error,
  } = useFetchMealsByCategoryQuery(category);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php",
      );
      const data = await response.json();
      setCategories(data.categories);
    };

    fetchCategories();
  }, []);

  if (isLoading) return <p>Loading meals...</p>;
  if (error)
    return <p>Error fetching meals: {error.data?.message || error.error}</p>;

  return (
    <MealListContainer>
      <h1>Meals in Category: {category}</h1>
      <MealCategorySelect
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        {categories.map((cat) => (
          <option key={cat.strCategory} value={cat.strCategory}>
            {cat.strCategory}
          </option>
        ))}
      </MealCategorySelect>

      <div className="meal-cards">
        {meals?.meals?.map((meal) => (
          <MealCard key={meal.idMeal}>
            <MealImage src={meal.strMealThumb} alt={meal.strMeal} />
            <MealTitle>{meal.strMeal}</MealTitle>

            <Link to={`/details/${meal.idMeal}`}>
              <ButtonLink>View Details</ButtonLink>
            </Link>
          </MealCard>
        ))}
      </div>
    </MealListContainer>
  );
}

export default MealList;
