import React from "react";
import { useSelector } from "react-redux";
import {
  MealCard,
  MealListContainer,
  MealTitle,
  MealImage,
  ButtonLink,
  PaginationContainer,
  PaginationButton,
} from "../styles/styles";
import { Link } from "react-router-dom";

const FavList = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 12;

  const totalMeals = favorites || [];
  const totalPages = Math.ceil(totalMeals.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMeals = totalMeals.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  if (totalMeals.length === 0) {
    return (
      <MealListContainer>
        <h1>Your Favorite Meals</h1>
        <p>You have no favorite meals yet. Start adding some!</p>
      </MealListContainer>
    );
  }

  return (
    <MealListContainer>
      <h1>Your Favorite Meals</h1>
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
};
export default FavList;
