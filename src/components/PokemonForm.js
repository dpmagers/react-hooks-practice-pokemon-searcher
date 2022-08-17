//get form to work and add Bulbasaur using POST
//1grab state in Form component d
//2declare state variables for each input d 
//3give value to each input d 
//4to onChange logic to each input to set in state d 
//5put onSubmit on form with formHandler d 
//6 create formHandler function , build logic 
//7 declare newPoke variable and populate 
//8 set up post request 
//9 create addCharacter function in parent 
//10 build addCharacter logic (setPokemons w/spread operator )
//11 addCharacter(newPoke) in POST


import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokemons, addNewPoke}) {

  const [name, setName] = useState('')
  const [hp, setHp] = useState('')
  const [frontUrl, setFrontUrl] = useState('')
  const [backUrl, setBackUrl] = useState('')


  const formSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    let newPoke = {
      name: name,
      hp: hp,
      sprites: {
        frontUrl: frontUrl,
        backUrl: backUrl
      }
    }

    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {"Content-Type" : "application/json",
    },
      body: JSON.stringify(newPoke)
    })
      .then(res => res.json())
      .then(addNewPoke(newPoke))

  }

  // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     let newPoke = {
    //       name: name,
    //       hp: hp,
    //       sprites: {
    //         front: frontUrl,
    //         back: backUrl
    //       }
    //     }
    //     fetch('http://localhost:3001/pokemon', {
    //       method: "POST",
    //       headers: {"Content-Type": "application/json",
    //   },
    //       body: JSON.stringify(newPoke)
    //     })
    //       .then(res => res.json())
    //       .then(addNewPoke(newPoke))
    
    //   }







  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={e => {formSubmit(e)}}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name}
          onChange={e => setName(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp}
          onChange={e => setHp(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange={e => setFrontUrl(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backUrl}
            onChange={e => setBackUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;





















































//SOLUTION 

// import React, {useState} from "react";
// import { Form } from "semantic-ui-react";

// function PokemonForm({addNewPoke}) {

//   const [name, setName] = useState("")
//   const [hp, setHp] = useState(0)
//   const [frontUrl, setFrontUrl] = useState("")
//   const [backUrl, setBackUrl] = useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     let newPoke = {
//       name: name,
//       hp: hp,
//       sprites: {
//         front: frontUrl,
//         back: backUrl
//       }
//     }
//     fetch('http://localhost:3001/pokemon', {
//       method: "POST",
//       headers: {"Content-Type": "application/json",
//   },
//       body: JSON.stringify(newPoke)
//     })
//       .then(res => res.json())
//       .then(addNewPoke(newPoke))

//   }

//   return (
//     <div>
//       <h3>Add a Pokemon!</h3>
//       <Form
//         onSubmit={handleSubmit}
//       >
//         <Form.Group widths="equal">
//           <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} 
//           onChange={(e) => setName(e.target.value)}/>
//           <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp}
//           onChange={(e) => setHp(e.target.value)}/>
//           <Form.Input
//             fluid
//             label="Front Image URL"
//             placeholder="url"
//             name="frontUrl"
//             value={frontUrl}
//             onChange={(e) => setFrontUrl(e.target.value)}
//           />
//           <Form.Input
//             fluid
//             label="Back Image URL"
//             placeholder="url"
//             name="backUrl"
//             value={backUrl}
//             onChange={(e) => setBackUrl(e.target.value)}

//           />
//         </Form.Group>
//         <Form.Button>Submit</Form.Button>
//       </Form>
//     </div>
//   );
// }

// export default PokemonForm;
