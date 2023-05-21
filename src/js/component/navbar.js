import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<>
			
		
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container ">
					<Link to="/">
						<span className="navbar-brand mb-0 h1">
							<img src="https://w7.pngwing.com/pngs/441/131/png-transparent-yoda-star-wars-logo-star-wars-text-star-wars-episode-vii-desktop-wallpaper.png" alt="Logo" width="110px" height="50px" />	
						</span>
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" 
					aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNavDarkDropdown">
					<ul className="navbar-nav" aria-labelledby="dropdownMenuClickableInside">
						<li className="nav-item dropdown">
						<button className="btn btn-primary dropdown-toggle favorites align-items-center" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownMenuClickableInside" data-bs-auto-close="outside" >
							Favorites
							<div className="favoriteCount">
							{store.favorites.length }
							</div>
						</button>
						<ul className="dropdown-menu dropdown-menu-end dropdown-menu-primary " aria-labelledby="dropdownMenuClickableInside">
							{
								
								store.favorites.length == 0  ? <li className="favorite">
									<a className="dropdown-item" href="#">Empty</a></li> :
								store.favorites.map((e, index)=>{
									//console.log(e)
									return (
										<li className="favorite" key={index}>
											<div className="col-10">
												<a className="dropdown-item" href="#">{e.name}</a>
											</div>
											<div className="col-2">
												<span><i className="fas fa-trash-alt"
													onClick={() => {
														actions.deleteFavorite(e);							
													}}></i>
												</span>												
											</div>
										</li>
									) 
									
								})
							}
						</ul>
						</li>
					</ul>
					</div>
				</div>
			</nav>
						</>
		
	);
};
