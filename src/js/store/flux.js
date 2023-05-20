const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
				
			],
			characters: [],
			planets: [],
			character: null,
			planet: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
				  .then((response) => response.json())
				  .then((response) => {
					//console.log(response.results);
					setStore({ characters: response.results });
				});
			},
			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
				  .then((response) => response.json())
				  .then((response) => {
					console.log(response.results);
					setStore({ planets: response.results });
				});
			},
			getCharacter: (uid) => {
				console.log(uid);
				fetch(`https://www.swapi.tech/api/people/${uid}`)
					.then((response) => response.json())
					.then((response) => {
						//console.log(response);
						setStore({ character: response });
						
					});
				
			},
			getPlanet: (uid) => {
				//console.log(uid);
				fetch(`https://www.swapi.tech/api/planets/${uid}`)
					.then((response) => response.json())
					.then((response) => {
						//console.log(response.result.uid);
						setStore({ planet: response });
						
					});
				
			},
			addDetailsToCharacters: (uid) => {
				fetch(`https://www.swapi.tech/api/people/${uid}`)
					.then((response) => response.json())
					.then((response) => {
						//console.log(response);
						let newCharacters = getStore().characters.map(character => {
							if (character.uid === uid) {
								return Object.assign(character, response.result)
							}else return character
						})
						setStore({ characters: newCharacters });
						
					});
			}
		}
	};
};

export default getState;
