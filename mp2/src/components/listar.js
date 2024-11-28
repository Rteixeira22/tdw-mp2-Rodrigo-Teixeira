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
  FilterContainer,
  FilterWrapper,
} from "../styles/styles";
import { Link } from "react-router-dom";
import Loader from "../components/loader";

function MealList() {
  const [category, setCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [area, setArea] = useState("");
  const [areas, setAreas] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const {
    data: meals,
    isLoading,
    error,
  } = useFetchMealsByCategoryQuery({ category, area, ingredient });

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

  useEffect(() => {
    const fetchAreas = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
      );
      const data = await response.json();
      setAreas(data.meals);
    };

    fetchAreas();
  }, []);

  useEffect(() => {
    const fetchIngredients = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
      );
      const data = await response.json();
      setIngredients(data.meals);
    };
    fetchIngredients();
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
      <h1>Search by: {category || area || ingredient}</h1>

      <FilterContainer>
        <FilterWrapper>
          <label htmlFor="category-select">Category</label>
          <MealCategorySelect
            id="category-select"
            onChange={(e) => {
              setCategory(e.target.value);
              setArea("");
              setIngredient("");
              setCurrentPage(1);
            }}
            value={category}
          >
            <option value="" disabled>
              Category
            </option>
            {categories.map((cat) => (
              <option key={cat.strCategory} value={cat.strCategory}>
                {cat.strCategory}
              </option>
            ))}
          </MealCategorySelect>
        </FilterWrapper>

        <FilterWrapper>
          <label htmlFor="area-select">Area</label>
          <MealCategorySelect
            id="area-select"
            onChange={(e) => {
              setArea(e.target.value);
              setCategory("");
              setIngredient("");
              setCurrentPage(1);
            }}
            value={area}
          >
            <option value="" disabled>
              Area
            </option>
            {areas.map((ar) => (
              <option key={ar.strArea} value={ar.strArea}>
                {ar.strArea}
              </option>
            ))}
          </MealCategorySelect>
        </FilterWrapper>

        <FilterWrapper>
          <label htmlFor="ingredient-select">Ingredient</label>
          <MealCategorySelect
            id="ingredient-select"
            onChange={(e) => {
              setIngredient(e.target.value);
              setArea("");
              setCategory("");
              setCurrentPage(1);
            }}
            value={ingredient}
          >
            <option value="" disabled>
              Ingredient
            </option>
            {ingredients.map((ing) => (
              <option key={ing.strIngredient} value={ing.strIngredient}>
                {ing.strIngredient}
              </option>
            ))}
          </MealCategorySelect>
        </FilterWrapper>
      </FilterContainer>

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
