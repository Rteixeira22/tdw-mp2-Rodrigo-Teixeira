import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGetCharactersQuery } from "./apiRequest";
import { Link } from "react-router-dom";
import {
  Container,
  CardGrid,
  Card,
  CardTitle,
  CardText,
  Pagination,
} from "./styles";

function Listar() {
  const [page, setPage] = useState(1);
  const filters = useSelector((state) => state.filters);

  const { data, error, isLoading } = useGetCharactersQuery({ page, filters });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  return (
    <Container>
      <h1>Characters</h1>
      <CardGrid>
        {data.map(
          (character) => (
            console.log("Character:", character),
            (
              <Card key={character.url}>
                <CardTitle>{character.name || "Unknown Name"}</CardTitle>
                <CardText>
                  <strong>Aliases:</strong>{" "}
                  {character.aliases.length > 0
                    ? character.aliases.join(", ")
                    : "None"}
                </CardText>
                <CardText>
                  <strong>Culture:</strong> {character.culture || "Unknown"}
                </CardText>
                <CardText>
                  <strong>Gender:</strong> {character.gender || "Unknown"}
                </CardText>
                <Link to={`/details/${character.url.split("/").pop()}`}>
                  See Details
                </Link>
              </Card>
            )
          ),
        )}
      </CardGrid>
      <Pagination>
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </Pagination>
    </Container>
  );
}

export default Listar;
