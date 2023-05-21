import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card_Planet = (props) => {
    const { store, actions } = useContext(Context);
    //console.log(props);
   
    // useEffect( () => {
    //         actions.addDetailsToCharacters(props.character.uid)
    //     },[])
        

        return(
            <div className="card">
                <img src={
                    props.planet.uid == 1 ?
                        `https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg`
                    :
                        `https://starwars-visualguide.com/assets/img/planets/${props.planet.uid}.jpg`
                    
                    }className="card-img-top cardHeight" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.planet.name}</h5>
                    {/* <p>height: {props.character.properties?.height} </p>
                    <p>Hair Color: {props.character.properties?.hair_color} </p>
                    <p>Eye Color: {props.character.properties?.eye_color} </p> */}
                    <div className="buttonsCard">
                        <Link
                        to={`/planet/${props.planet.uid}`}
                        className="btn btn-primary"
                        >
                        Ver mas...
                        </Link>
                        <button
                            className="btn btn-warning"
                            onClick={() => {
                                actions.setFavorites(props.planet);
                            }}
                        >
                            Like
                        </button>

                    </div>
                </div>
               
            </div>
        )
    

}

