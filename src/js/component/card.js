import React from "react";

export const Card = (character) => {

    return(
        <div className="card">
            <img src={character.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <Link
                to={`/character/${character.id}`}
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
    )
}