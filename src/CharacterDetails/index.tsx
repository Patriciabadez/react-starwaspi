import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import Header from "../Header";
import "./styles.scss";

interface CharacterDetail {
  name: string;
  height: string;
  mass: string;
}

const CharacterDetails: React.FC = () => {
  const { characterUrl } = useParams<{ characterUrl?: string }>();
  const [character, setCharacter] = useState<CharacterDetail | null>(null);

  const location = useLocation();
  const selectedActorImage = location.state?.actorImage || '';

  useEffect(() => {
    if (characterUrl) {
      axios
        .get(characterUrl)
        .then((response) => {
          setCharacter(response.data);
        })
        .catch((error) => {
          console.error("Error fetching character details:", error);
        });
    }
  }, [characterUrl]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div
    className="character-list-container mt-5"
    style={{ backgroundImage: `url('../../../fundo_lista.jpg')` }}
  >
      <Header />
      <div className="container mt-5">
        <div className="card card-details">
          <div className="card-img-container-details">
            <img src={selectedActorImage} alt="Actor" className="card-img-top-details" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;