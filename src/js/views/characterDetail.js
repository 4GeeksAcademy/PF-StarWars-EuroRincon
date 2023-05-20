import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const CharacterDetail = () => {
  const params = useParams();
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getCharacter(params.characterId);
  }, []);

  return (
    <div className="col-4 mx-auto">
      {store.character?.result.uid === params.characterId ? (
        <div className="card">
          <img src={`https://starwars-visualguide.com/assets/img/characters/${params.characterId}.jpg`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{store.character.result.properties.name}</h5>
            <div className="card-text">
              <ul>
                <li>Gender: {store.character.result.properties.gender}</li>
                <li>Eye Color: {store.character.result.properties.eye_color}</li>
                <li>Hair Color: {store.character.result.properties.hair_color}</li>
                <li>Descripton: {store.character.result.description}</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <h3>Cargando...</h3>
      )}
    </div>
  );
};