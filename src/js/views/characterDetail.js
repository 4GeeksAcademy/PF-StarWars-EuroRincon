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
    // <div className="col-4 mx-auto">
    //   {store.character?.result.uid === params.characterId ? (
    //     <div className="card">
    //       <img src={`https://starwars-visualguide.com/assets/img/characters/${params.characterId}.jpg`} className="card-img-top" alt="..." />
    //       <div className="card-body">
    //         <h5 className="card-title">{store.character.result.properties.name}</h5>
    //         <div className="card-text">
    //           <ul>
    //             <li>Gender: {store.character.result.properties.gender}</li>
    //             <li>Eye Color: {store.character.result.properties.eye_color}</li>
    //             <li>Hair Color: {store.character.result.properties.hair_color}</li>
    //             <li>Descripton: {store.character.result.description}</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   ) : (
    //     <h3>Cargando...</h3>
    //   )}
    // </div>

    <div className="container">
      <div className="card mb-3" style={{width: "100%"}}>
        
        {store.character?.result.uid === params.characterId ? (
          <div className="row g-0">
            <div className="col-md-4">
              <img src={`https://starwars-visualguide.com/assets/img/characters/${params.characterId}.jpg`} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">{store.character.result.properties.name}</h1>
                <p className="card-text">Name: {store.character.result.properties.name}</p>
                <p className="card-text">Gender: {store.character.result.properties.gender}</p>
                <p className="card-text">Skin: {store.character.result.properties.skin_color}</p>
                <p className="card-text">height: {store.character.result.properties.height}</p>
                <p className="card-text">Eye Color: {store.character.result.properties.eye_color}</p>
                <p className="card-text">History: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                  dolore eu fugiat nulla pariatur. </p>
                
              </div>
            </div>
          </div>
        ) : (
            <h3>Cargando...</h3>
            )
        }

      </div>
    </div>
  );
};