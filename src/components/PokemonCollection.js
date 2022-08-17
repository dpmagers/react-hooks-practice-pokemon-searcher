import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons}) {
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;














































//SOLUTION 

// import React, {useState} from "react";
// import PokemonCard from "./PokemonCard";
// import { Card } from "semantic-ui-react";

// function PokemonCollection({pokemons}) {

//   // const [isFrontSprite, setIsFrontSprite] = useState(true)
//   // isFrontSprite={isFrontSprite} setIsFrontSprite={setIsFrontSprite}
//   return (
//     <Card.Group itemsPerRow={6}>
//       <h1>Hello From Pokemon Collection</h1>
//       {pokemons.map(pokemon => <PokemonCard pokemon={pokemon} /> )}
//     </Card.Group>
//   );
// }

// export default PokemonCollection;
