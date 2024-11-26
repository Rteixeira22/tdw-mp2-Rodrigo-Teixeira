import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "./filtersSlice";
import { FilterContainer, FilterItem } from "./styles";

function Filtros() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters); // Aceder filtros do Redux

  // Estado local para manter as opções que virão da API
  const [genders, setGenders] = useState([]);
  const [cultures, setCultures] = useState([]);
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    // Simulação da obtenção de dados para opções
    setGenders(["Male", "Female", "Unknown"]);
    setCultures(["Northmen", "Free Folk", "Dothraki", "Unknown"]);
    setSeasons([1, 2, 3, 4, 5]);
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
            Gender:
            <select
              name="gender"
              value={filters.gender}
              onChange={handleFilterChange}
            >
              <option value="">Select a Gender</option>
              {genders.map((gender, idx) => (
                <option key={idx} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </label>
        </FilterItem>
        <FilterItem>
          <label>
            Culture:
            <select
              name="culture"
              value={filters.culture}
              onChange={handleFilterChange}
            >
              <option value="">Select a Culture</option>
              {cultures.map((culture, idx) => (
                <option key={idx} value={culture}>
                  {culture}
                </option>
              ))}
            </select>
          </label>
        </FilterItem>
        <FilterItem>
          <label>
            Seasons:
            <select
              name="seasons"
              value={filters.seasons}
              onChange={handleFilterChange}
            >
              <option value="">Select a Season</option>
              {seasons.map((season, idx) => (
                <option key={idx} value={season}>
                  Season {season}
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
