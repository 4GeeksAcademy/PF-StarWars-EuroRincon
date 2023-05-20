import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const PlanetDetail = () => {
  const params = useParams();
  const { actions, store } = useContext(Context);
    
  useEffect(() => {
    actions.getPlanet(params.planetId);
  }, []);
//console.log(store.planet.result?.uid)
   return (
     <div className="col-4 mx-auto">
       {store.planet.result?.uid === params.planetId ? (
         <div className="card">
             <img src={params.planetId == 1 ?
                            `https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg`
                        :
                            `https://starwars-visualguide.com/assets/img/planets/${params.planetId}.jpg`
                        } className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{store.planet.result.properties.name}</h5>
                <div className="card-text">
                <ul>
                    {/* <li>Gender: {store.character.result.properties.gender}</li>
                    <li>Eye Color: {store.character.result.properties.eye_color}</li>
                    <li>Hair Color: {store.character.result.properties.hair_color}</li>
                    <li>Descripton: {store.character.result.description}</li> */}
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