import styled from "styled-components";

export const Bar = styled.nav`
  font-size: 18px;

  box-shadow: 0 4px 2px -2px gray;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 0;
    height: 100px;
    align-items: center;
  }
`;

export const MainNav = styled.ul`
  list-style-type: none;
  flex-direction: column;
  text-decoration: none;
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
  color: #009bff;
  text-decoration: none;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 0px 10px;
  }
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;

  transition:
    transform 0.3s ease,
    color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #0056b3;
  }
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

export const MealCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 15px;
  padding: 15px;
  width: 200px;
  height: 350px;
  display: inline-block;
  position: relative;

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
  margin-top: 15px;
  color: #333;
  font-weight: bold;
`;
export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 50px;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const MealImageDetails = styled.img`
  width: 400px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

export const IngredientsList = styled.ul`
  margin-top: 10px;
  padding-left: 20px;
  list-style-type: disc;
  li {
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    padding-left: 10px;
    font-size: 0.9rem;
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

  @media (max-width: 768px) {
    h2 {
      font-size: 1.3rem;
    }
    p {
      font-size: 0.95rem;
    }
  }
`;

export const VideoSection = styled.div`
  margin-top: 30px;
  text-align: center;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  iframe {
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    padding-bottom: 75%;
  }
`;

export const ButtonLink = styled.button`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  display: inline-block;
  padding: 8px 16px;
  background-color: #009dff;
  opacity: 0.9;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 3px 5px rgba(0, 123, 255, 0.3);
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translate(-50%, -2px);
    box-shadow: 0 5px 10px rgba(0, 86, 179, 0.3);
  }

  &:active {
    background-color: #004085;
    transform: translate(-50%, 0);
    box-shadow: 0 3px 5px rgba(0, 64, 133, 0.3);
  }
`;

export const ButtonBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  margin-top: 30px;
  margin-left: 10vw;
  background-color: #009dff;
  opacity: 0.9;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 3px 5px rgba(0, 123, 255, 0.3);
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 86, 179, 0.3);
  }

  &:active {
    background-color: #004085;
    transform: translateY(0);
    box-shadow: 0 3px 5px rgba(0, 64, 133, 0.3);
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

export const PaginationButton = styled.button`
  padding: 8px 16px;
  background-color: #009dff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007acc;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f9f9f9;
`;

export const LoaderText = styled.p`
  margin-top: 16px;
  font-size: 18px;
  color: #009dff;
  font-weight: bold;
`;

export const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: #555;
  margin: 5px 0;
`;

export const IconText = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  transition:
    transform 0.3s ease,
    color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #0056b3;
  }
`;

export const IconWithText = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledIcon = styled.div`
  font-size: 24px;
  color: #007bff;
  transition: color 0.3s ease;

  ${IconText}:hover & {
    color: #0056b3;
  }
`;

export const LinkStyled = styled.a`
  font-size: 16px;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
  margin-left: 10px;

  &:hover {
    color: #0056b3;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 10px 0;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 20px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  label {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
`;

export const MealCategorySelect = styled.select`
  width: 200px;
  height: 50px;
  line-height: 1.5;
  font-size: 14px;
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f9f9f9;
  border: 2px solid #007bff;
  border-radius: 5px;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    border-color: #0056b3;
    box-shadow: 0 0 5px rgba(0, 86, 179, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #0056b3;
    box-shadow: 0 0 8px rgba(0, 86, 179, 0.7);
  }

  option {
    font-size: 14px;
    color: #333;
    background-color: #fff;
  }
`;

export const MealHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition:
    transform 0.2s ease,
    color 0.3s ease;

  color: ${(props) => (props.isFavorite ? "#dc3545" : "#007bff")};

  &:hover {
    transform: scale(1.2);
    color: ${(props) => (props.isFavorite ? "#c82333" : "#0056b3")};
  }

  &:active {
    transform: scale(1);
  }

  &:focus {
    outline: none;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const Notification = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ type }) => (type === "added" ? "#28a745" : "#dc3545")};
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  z-index: 1000;
  animation: fade-in-out 3s ease-in-out;
  text-align: center;

  @keyframes fade-in-out {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(-10px);
    }
    20% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(-10px);
    }
  }
`;
