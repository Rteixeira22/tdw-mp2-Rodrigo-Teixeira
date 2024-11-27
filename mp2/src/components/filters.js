import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "./filtersSlice";
import { FilterContainer, FilterItem } from "./styles";

function Filtros() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters || {});

  // Estado local para as opções (vindas da API ou estáticas)
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [priceRanges, setPriceRanges] = useState([
    { label: "Under 10", value: "0-10" },
    { label: "10 - 20", value: "10-20" },
    { label: "Above 20", value: "20-" },
  ]);

  useEffect(() => {
    // Supondo que a API forneça categorias, ingredientes e cozinhas
    setCategories(["Seafood", "Dessert", "Beef", "Vegetarian"]);
    setIngredients(["Chicken", "Beef", "Pasta", "Rice"]);
    setCuisines(["Italian", "Chinese", "Indian", "American"]);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    // Atualiza o filtro no Redux
    dispatch(setFilters({ ...filters, [name]: value }));
  };

  return (
    <div>
      <FilterContainer>
        <FilterItem>
          <label>
            Category:
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
            >
              <option value="">Select a Category</option>
              {categories.map((category, idx) => (
                <option key={idx} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
        </FilterItem>

        <FilterItem>
          <label>
            Ingredient:
            <select
              name="ingredient"
              value={filters.ingredient}
              onChange={handleFilterChange}
            >
              <option value="">Select an Ingredient</option>
              {ingredients.map((ingredient, idx) => (
                <option key={idx} value={ingredient}>
                  {ingredient}
                </option>
              ))}
            </select>
          </label>
        </FilterItem>

        <FilterItem>
          <label>
            Cuisine:
            <select
              name="cuisine"
              value={filters.cuisine}
              onChange={handleFilterChange}
            >
              <option value="">Select a Cuisine</option>
              {cuisines.map((cuisine, idx) => (
                <option key={idx} value={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
          </label>
        </FilterItem>

        <FilterItem>
          <label>
            Price Range:
            <select
              name="priceRange"
              value={filters.priceRange}
              onChange={handleFilterChange}
            >
              <option value="">Select Price Range</option>
              {priceRanges.map((range, idx) => (
                <option key={idx} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </label>
        </FilterItem>

        <FilterItem>
          <label>
            Search by Name:
            <input
              type="text"
              name="name"
              value={filters.name}
              onChange={handleFilterChange}
              placeholder="Search by name"
            />
          </label>
        </FilterItem>
      </FilterContainer>
    </div>
  );
}

export default Filtros;
