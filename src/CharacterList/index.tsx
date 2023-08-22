import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.scss";
import Header from "../Header";

interface Character {
  name: string;
  url: string;
}

const characterImageMap: Record<string, string> = {
  "Luke Skywalker": "../../../luke.jpg",
  "C-3PO": "../../../c3po.jpg",
  "R2-D2": "../../../r2d2.jpg",
  "Darth Vader": "../../../darth_vader.jpg",
  "Leia Organa": "../../../leia.jpg",
  "Owen Lars": "../../../owen_lars.jpg",
  "Beru Whitesun lars": "../../../beru_lars.jpg",
  "R5-D4": "../../../r5d4.jpg",
  "Biggs Darklighter": "../../../biggs_darklighter.jpg",
  "Obi-Wan Kenobi": "../../../obi_wan.jpg",
};

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [activeCharacter, setActiveCharacter] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, []);

  return (
    <div
      className="character-list-container"
      style={{ backgroundImage: `url('../../../fundo_lista.jpg')` }}
    >
      <Header />
      <div className="row mt-5 pt-5">
        {characters.map((character) => (
          <div
            key={character.url}
            className={`col-md-3 mb-4 ${
              activeCharacter === character.url ? "active" : ""
            }`}
          >
            <div
              className={`card ${
                activeCharacter === character.url ? "expanded" : ""
              }`}
            >
              <div className="card-img-container">
                <img
                  src={characterImageMap[character.name] || ""}
                  alt={character.name}
                  className="card-img-top"
                />
              </div>
              <div className="card-body d-flex justify-content-between">
                <h5 className="card-title">{character.name}</h5>
                <Link
                  to={`/character-details/${encodeURIComponent(character.url)}`}
                  state={{ actorImage: characterImageMap[character.name] }}
                  className="btn btn-primary"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CharacterList;
