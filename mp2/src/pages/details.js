// src/pages/CharacterDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Para pegar o ID da URL

function Details() {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        `https://www.anapioficeandfire.com/api/characters/${characterId}`,
      );
      const data = await response.json();
      setCharacter(data);
    };

    fetchDetails();
  }, [characterId]);

  if (!character) return <p>Loading...</p>;

  return (
    <div>
      <h1>{character.name}</h1>
      <p>
        <strong>Gender:</strong> {character.gender}
      </p>
      <p>
        <strong>Culture:</strong> {character.culture}
      </p>
      <p>
        <strong>Born:</strong> {character.born}
      </p>
      <p>
        <strong>Died:</strong> {character.died}
      </p>
      <p>
        <strong>Titles:</strong>{" "}
        {character.titles.length ? character.titles.join(", ") : "None"}
      </p>
      <p>
        <strong>Aliases:</strong>{" "}
        {character.aliases.length ? character.aliases.join(", ") : "None"}
      </p>
      <p>
        <strong>Books:</strong> {character.books.join(", ")}
      </p>
    </div>
  );
}

export default Details;
