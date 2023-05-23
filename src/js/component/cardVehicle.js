import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card_Vehicle = (props) => {
    const { store, actions } = useContext(Context);
    //console.log(props);
   
    // useEffect( () => {
    //         actions.addDetailsToCharacters(props.character.uid)
    //     },[])
        

        return(
            <div className="card">
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.vehicle.uid}.jpg`}className="card-img-top cardHeight" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.vehicle.name}</h5>
                    {/* <p>height: {props.character.properties?.height} </p>
                    <p>Hair Color: {props.character.properties?.hair_color} </p>
                    <p>Eye Color: {props.character.properties?.eye_color} </p> */}
                    <div className="buttonsCard">
                        <Link
                        to={`/vehicle/${props.vehicle.uid}`}
                        className="btn btn-primary"
                        >
                        Ver mas...
                        </Link>
                        <button
                            className="btn btn-warning"
                            onClick={() => {
                                actions.setFavorites(props.vehicle);
                            }}
                        >
                            Like
                        </button>

                    </div>
                </div>
               
            </div>
        )
    

}

