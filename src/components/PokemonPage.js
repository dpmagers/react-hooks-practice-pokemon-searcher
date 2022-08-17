import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons, setPokemons] = useState([])
  const [searchTerm, setSearchTerm] = useState("")


  useEffect(() => {
  fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then (pokemons => setPokemons(pokemons))
  }, [])

  console.log(pokemons)

  // const searchHandler = (e) => {
  //   setSearchTerm(e.target.value)
  // }

  const addNewPoke = (newPoke) => {
    setPokemons([...pokemons, newPoke])
  }

  let filteredPoke = pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  console.log(filteredPoke)

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemons={pokemons} addNewPoke={addNewPoke}/>
      <br />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <br />
      <PokemonCollection pokemons={filteredPoke}/>
    </Container>
  );
}

export default PokemonPage;


//fetch stuff to dom; get card click event in place
//1grab useState and useEffect in PokemonPage d 
//2 declare state variable d
//3fetch data with side effect (console.log) d
//4 set state in fetch d
//5 pass down props to PCollection , accept d
//6 map to pokemon card d 
//7 pass props to pokemon card and add prop elements (including toggle ) d 
















































//SOLUTION 

// //fetch pokemon collection onto page


// // hp: 60
// // id: 2
// // name: "ivysaur"
// // sprites:
// // back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
// // front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
// // [[Prototype]]: Object

// import React, {useState, useEffect} from "react";
// import PokemonCollection from "./PokemonCollection";
// import PokemonForm from "./PokemonForm";
// import Search from "./Search";
// import { Container } from "semantic-ui-react";

// function PokemonPage() {

//   const [pokemons, setPokemons] = useState([])
//   const [searchTerm, setSearchTerm] = useState("")

//   let handleToggleSprite = () => {
    
//   }


//   useEffect(() => {
//   fetch('http://localhost:3001/pokemon')
//   .then(res => res.json())
//   .then(pokemons => setPokemons(pokemons))
//   }, [])

//   console.log(pokemons.name)

//   let filteredPokemon = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
  
  
//   console.log(filteredPokemon)

//   const addNewPoke = (newPoke) => {
//     setPokemons([...pokemons, newPoke])
//   }

//   return (
//     <Container>
//       <h1>Pokemon Searcher</h1>
//       <br />
//       <PokemonForm addNewPoke={addNewPoke}/>
//       <br />
//       <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
//       <br />
//       <PokemonCollection pokemons={filteredPokemon}/>
//     </Container>
//   );
// }

// export default PokemonPage;
