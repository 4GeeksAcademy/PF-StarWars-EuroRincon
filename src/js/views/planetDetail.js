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
      // <div className="col-4 mx-auto">
      //  {store.planet.result?.uid === params.planetId ? (
      //     <div className="card">
      //       <img src={params.planetId == 1 ?
      //           `https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg`
      //           :
      //           `https://starwars-visualguide.com/assets/img/planets/${params.planetId}.jpg`
      //       } className="card-img-top" alt="..." />
      //       <div className="card-body">
      //         <h5 className="card-title">{store.planet.result.properties.name}</h5>
      //         <div className="card-text">
      //           <ul>
      //               {/* <li>Gender: {store.planet.result.properties.gender}</li>
      //               <li>Eye Color: {store.planet.result.properties.eye_color}</li>
      //               <li>Hair Color: {store.planet.result.properties.hair_color}</li>
      //               <li>Descripton: {store.planet.result.description}</li> */}
      //           </ul>
      //         </div>
      //       </div>
      //     </div>
      //    ) : (
      //         <h3>Cargando...</h3>
      //       )
      //   } 
      // </div>

      <div className="container">
        <div className="card mb-3" style={{width: "100%"}}>
          
          
          {store.planet.result?.uid === params.planetId ? (
            <div className="row g-0">
              <div className="col-md-4">
              <img src={params.planetId == 1 ?
                  `https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg`
                :
                  `https://starwars-visualguide.com/assets/img/planets/${params.planetId}.jpg`
                } className="img-fluid rounded-start" style={{width: "100%"}} alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title">{store.planet.result.properties.name}</h1>
                  <p className="card-text">Name: {store.planet.result.properties.name}</p>
                  <p className="card-text">Climate: {store.planet.result.properties.climate}</p>
                  <p className="card-text">Diameter: {store.planet.result.properties.diameter}</p>
                  <p className="card-text">Terrain: {store.planet.result.properties.terrain}</p>
                  <p className="card-text">Population: {store.planet.result.properties.population}</p>
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