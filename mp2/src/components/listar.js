import React, { useState, useEffect } from "react";
import { useFetchMealsByCategoryQuery } from "./apiRequest";
import {
  MealCard,
  MealListContainer,
  MealTitle,
  MealImage,
  MealCategorySelect,
  ButtonLink,
  PaginationContainer,
  PaginationButton,
} from "./styles";
import { Link } from "react-router-dom";
import Loader from "../components/loader";

function MealList() {
  const [category, setCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

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

  if (isLoading)
    return (
      <p>
        <Loader />
      </p>
    );
  if (error)
    return <p>Error fetching meals: {error.data?.message || error.error}</p>;

  const totalMeals = meals?.meals || [];
  const totalPages = Math.ceil(totalMeals.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMeals = totalMeals.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <MealListContainer>
      <h1>Meals in Category: {category}</h1>

      <MealCategorySelect
        onChange={(e) => {
          setCategory(e.target.value);
          setCurrentPage(1);
        }}
        value={category}
      >
        {categories.map((cat) => (
          <option key={cat.strCategory} value={cat.strCategory}>
            {cat.strCategory}
          </option>
        ))}
      </MealCategorySelect>

      <div className="meal-cards">
        {currentMeals.map((meal) => (
          <MealCard key={meal.idMeal}>
            <MealImage src={meal.strMealThumb} alt={meal.strMeal} />
            <MealTitle>{meal.strMeal}</MealTitle>

            <Link to={`/details/${meal.idMeal}`}>
              <ButtonLink>View Details</ButtonLink>
            </Link>
          </MealCard>
        ))}
      </div>

      <PaginationContainer>
        <PaginationButton
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
        >
          Previous
        </PaginationButton>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <PaginationButton
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    </MealListContainer>
  );
}

export default MealList;
