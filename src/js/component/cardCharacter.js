import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card_Character = (props) => {
    const { store, actions } = useContext(Context);
    //console.log(props);
   
    useEffect( () => {
            actions.addDetailsToCharacters(props.character.uid)
        },[])
        

        return(
            <div className="card">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${props.character.uid}.jpg`}className="card-img-top cardHeight" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.character.name}</h5>
                    <p>height: {props.character.properties?.height} </p>
                    <p>Hair Color: {props.character.properties?.hair_color} </p>
                    <p>Eye Color: {props.character.properties?.eye_color} </p>
                    <div className="buttonsCard">
                        <Link
                        to={`/character/${props.character.uid}`}
                        className="btn btn-primary"
                        >
                        Ver mas...
                        </Link>
                        <button
                            className="btn btn-warning"
                            onClick={() => {
                                actions.setFavorite(character);
                            }}
                        >
                            Like
                        </button>

                    </div>
                </div>
               
            </div>
        )
    

}

