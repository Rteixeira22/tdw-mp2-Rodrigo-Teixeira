import styled from "styled-components";

export const Bar = styled.nav`
  font-size: 18px;

  box-shadow: 0 4px 2px -2px gray;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }
`;

export const MainNav = styled.ul`
  list-style-type: none;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
export const NavLi = styled.li`
  text-align: center;
  margin: 15px auto;
  color: #000;
  text-decoration: none;
`;
export const NavA = styled.a`
  display: flex;
  color: #000;
  text-decoration: none;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 0px 10px;
  }
  cursor: pointer;
`;

export const NavBarToggle = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
`;

export const Hamburger = styled.img`
  /* add your menu icon here i.e. */
  /* content: url('../static/Hamburger_icon.svg'); */
  content: url(data:image/svg+xml,%3Csvg%20height%3D%2232px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%2032%2032%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232px%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cpath%20d%3D%22M4%2C10h24c1.104%2C0%2C2-0.896%2C2-2s-0.896-2-2-2H4C2.896%2C6%2C2%2C6.896%2C2%2C8S2.896%2C10%2C4%2C10z%20M28%2C14H4c-1.104%2C0-2%2C0.896-2%2C2%20%20s0.896%2C2%2C2%2C2h24c1.104%2C0%2C2-0.896%2C2-2S29.104%2C14%2C28%2C14z%20M28%2C22H4c-1.104%2C0-2%2C0.896-2%2C2s0.896%2C2%2C2%2C2h24c1.104%2C0%2C2-0.896%2C2-2%20%20S29.104%2C22%2C28%2C22z%22%2F%3E%3C%2Fsvg%3E);
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  text-align: center;
  font-family: Effra, sans-serif;
  margin: 20px;
`;

export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`;

export const Card = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  flex: 1 1 250px;
  max-width: 300px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardTitle = styled.h2`
  margin: 0 0 10px;
  font-size: 1.5em;
  color: #333;
`;

export const CardText = styled.p`
  margin: 5px 0;
  font-size: 0.9em;
  color: #555;

  strong {
    color: #222;
  }
`;

export const Pagination = styled.div`
  margin-top: 20px;

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 5px;
    transition: background-color 0.2s;

    &:disabled {
      background-color: #c0c0c0;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background-color: #0056b3;
    }
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const FilterItem = styled.div`
  margin-bottom: 15px;

  label {
    font-weight: bold;
  }

  select,
  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
  }
`;

export const MealListContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const MealCategorySelect = styled.select`
  padding: 10px;
  font-size: 16px;
  margin: 20px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const MealCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 15px;
  padding: 15px;
  width: 200px;
  height: 325px;
  display: inline-block;
  vertical-align: top;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const MealImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const MealTitle = styled.h3`
  font-size: 18px;
  margin-top: 10px;
  color: #333;
  font-weight: bold;
`;

export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 100px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
`;

export const MealImageDetails = styled.img`
  width: 400px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

export const IngredientsList = styled.ul`
  margin-top: 10px;
  padding-left: 20px;
  list-style-type: disc;
  li {
    margin-bottom: 5px;
  }
`;

export const Instructions = styled.div`
  margin-top: 20px;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  p {
    line-height: 1.6;
  }
`;

export const ButtonLink = styled.button`
  display: inline-block;
  padding: 8px 16px; /* Reduzi o padding */
  margin-top: 15px;
  background-color: #009dff;
  opacity: 0.9;
  color: #fff;
  border: none;
  border-radius: 20px; /* Torna o botão mais arredondado, mas proporcional */
  font-size: 0.9rem; /* Texto menor */
  font-weight: 500; /* Peso da fonte ligeiramente reduzido */
  text-align: center;
  text-decoration: none;
  box-shadow: 0 3px 5px rgba(0, 123, 255, 0.3); /* Sombra mais discreta */
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 86, 179, 0.3); /* Sombra mais leve */
  }

  &:active {
    background-color: #004085;
    transform: translateY(0);
    box-shadow: 0 3px 5px rgba(0, 64, 133, 0.3);
  }
`;
