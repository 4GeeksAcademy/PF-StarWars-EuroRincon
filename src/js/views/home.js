import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card } from "../component/card";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container">
      <div className="row">
        <h2>Listado de personajes</h2>
        {store.characters.map((character, index) => {
          return (
            <div className="col-12 col-md-4" key={index}>
				<Card character={character} />
					
              
            </div>
          );
        })}
      </div>
    </div>
  );
};
