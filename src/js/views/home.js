import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card, Card_Character } from "../component/cardCharacter";
import { Card_Planet } from "../component/cardPlanet";
import { Card_Vehicle } from "../component/cardVehicle";

export const Home = () => {
  const { store, actions } = useContext(Context);
  
  return (
    <div className="container">
      
      <div className="row">
        <h2>Characters</h2>
        <div className="scrollFlow">
          {store.characters.map((character, index) => {
            //console.log(character)
            return (
              <div className="col-12 col-md-4 col-lg-3" key={index}>
                <Card_Character character={character} />				
              </div>
            );
          })}

        </div>
      </div>
      <div className="row">
        <h2>Planets</h2>
        <div className="scrollFlow">
          {store.planets.map((planet, index) => {
            //console.log(character)
            return (
              <div className="col-12 col-md-4 col-lg-3" key={index}>
                <Card_Planet planet={planet} />				
              </div>
            );
          })}

        </div>
      </div>
      <div className="row">
        <h2>Vehicles</h2>
        <div className="scrollFlow">
          {store.vehicles.map((vehicle, index) => {
            //console.log(vehicle)
            return (
              <div className="col-12 col-md-4 col-lg-3" key={index}>
                <Card_Vehicle vehicle={vehicle} />				
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};
