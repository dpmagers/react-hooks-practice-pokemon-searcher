import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const [frontImage, setFrontImage] = useState(true)

  const toggleImage = (e) => {
    setFrontImage(frontImage => !frontImage )
    console.log(e)
  }


  return (
    <Card>
      <div onClick={toggleImage}>
        <div className="image">
          <img alt="oh no!" src={frontImage ? pokemon.sprites.front : pokemon.sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

// 0:
// hp: 60
// id: 2
// name: "ivysaur"
// sprites:
// back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
// front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
// [[Prototype]]: Object


















































//SOLUTION 
// import React, {useState} from "react";
// import { Card } from "semantic-ui-react";

// function PokemonCard({pokemon}) {

//     const [showFront, setShowFront] = useState(true)

//     const handleSprites = () => {
//       setShowFront(showFront => !showFront)
//     }



//   return (
//     <Card>
//       <div onClick={handleSprites}>
//         <div className="image">
//           <img alt="oh no!" src={showFront ? pokemon.sprites.front : pokemon.sprites.back } />
//         </div>
//         <div className="content">
//           <div className="header">{pokemon.name}</div>
//         </div>
//         <div className="extra content">
//           <span>
//             <i className="icon heartbeat red" />
//             {pokemon.hp} hp
//           </span>
//         </div>
//       </div>
//     </Card>
//   );
// }

// export default PokemonCard;
