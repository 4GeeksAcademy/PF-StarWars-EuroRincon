import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const VehicleDetail = () => {
  const params = useParams();
  const { actions, store } = useContext(Context);
    
  useEffect(() => {
    actions.getVehicle(params.vehicleId);
  }, []);
console.log(store.vehicle?.result?.properties)
   return (
      

      <div className="container">
        <div className="card mb-3" style={{width: "100%"}}>
          
          
          {store.vehicle.result?.uid === params.vehicleId ? (
            <div className="row g-0">
              <div className="col-md-4">
              <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.vehicleId}.jpg`} className="img-fluid rounded-start" style={{height: "100%"}} alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title">{store.vehicle.result.properties.name}</h1>
                  <p className="card-text">Name: {store.vehicle.result.properties.name}</p>
                  <p className="card-text">Model: {store.vehicle.result.properties.model}</p>
                  <p className="card-text">Crew: {store.vehicle.result.properties.crew}</p>
                  <p className="card-text">Class: {store.vehicle.result.properties.vehicle_class}</p>
                  <p className="card-text">Manufacturer: {store.vehicle.result.properties.manufacturer}</p>
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