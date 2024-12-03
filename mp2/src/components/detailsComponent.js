import React, { useState } from "react";
import { useFetchMealByIdQuery } from "./apiRequest";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "./favouritesSlice";
import {
  ContainerDetails,
  MealImageDetails,
  DetailsWrapper,
  IngredientsList,
  Instructions,
  VideoSection,
  FavoriteButton,
  MealHeader,
  Notification,
} from "../styles/styles";
import Loader from "./loader";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

function MealDetails() {
  const { mealId } = useParams();
  const { data: meal, isLoading, error } = useFetchMealByIdQuery(mealId);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const [notification, setNotification] = useState({ message: "", type: "" });

  const isFavorite =
    meal?.meals?.[0] &&
    favorites.some((fav) => fav.idMeal === meal.meals[0].idMeal);

  const toggleFavorite = (meal) => {
    if (isFavorite) {
      dispatch(removeFavorite(meal.idMeal));
      setNotification({
        message: `${meal.strMeal} was removed from favorites`,
        type: "removed",
      });
    } else {
      dispatch(addFavorite(meal));
      setNotification({
        message: `${meal.strMeal} was added to favorites`,
        type: "added",
      });
    }
    setTimeout(() => setNotification({ message: "", type: "" }), 3000);
  };

  if (isLoading)
    return (
      <p>
        <Loader />
      </p>
    );
  if (error)
    return <p>Error fetching details: {error.data?.message || error.error}</p>;

  if (!meal) return <p>No meal details available</p>;

  return (
    <div>
      {notification.message && (
        <Notification type={notification.type}>
          {notification.message}
        </Notification>
      )}
      <ContainerDetails>
        {meal.meals?.map((meal) => (
          <div key={meal.idMeal}>
            {console.log(meal)}
            <DetailsWrapper>
              <MealImageDetails src={meal.strMealThumb} alt={meal.strMeal} />
              <div>
                <h1>
                  <MealHeader>
                    <FavoriteButton
                      isFavorite={isFavorite}
                      onClick={() => toggleFavorite(meal)}
                      aria-label={
                        isFavorite
                          ? "Remove from Favorites"
                          : "Add to Favorites"
                      }
                    >
                      {isFavorite ? <IoMdHeart /> : <IoMdHeartEmpty />}
                    </FavoriteButton>
                    {meal.strMeal}
                  </MealHeader>
                </h1>
                <p>Category: {meal.strCategory}</p>
                <p>Area: {meal.strArea}</p>
                <p>Ingredients:</p>
                <IngredientsList>
                  {Object.keys(meal)
                    .filter(
                      (key) => key.startsWith("strIngredient") && meal[key],
                    )
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
            {meal.strYoutube && (
              <VideoSection>
                <iframe
                  title="YouTube video player"
                  width="560"
                  height="315"
                  src={meal.strYoutube.replace("watch?v=", "embed/")}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </VideoSection>
            )}
          </div>
        ))}
      </ContainerDetails>
    </div>
  );
}

export default MealDetails;
