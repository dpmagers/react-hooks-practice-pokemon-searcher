import React from "react";

function Search({searchTerm, setSearchTerm }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;

//search pokemon by name 
//1set useState in search d
//2declare state variable in parent PPage d
//3pass down as props to search d 
//4put onChange handler on input in search d 
//MAKE SURE TO PUT VALUE ON SEARCH INPUT !!!
//5declare search handler function in Ppage (console.log) d 
//6build out search handler logic d 
//7 declare a filter variable d 
//8 fill out filter logic (console.log) d 
//9 put filter variable in map in pokemon collection (pass down filter var as props) 

















































//SOLUTION 

// import React from "react";

// function Search({searchTerm, setSearchTerm}) {
//   return (
//     <div className="ui search">
//       <div className="ui icon input">
//         <input className="prompt" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
//         <i className="search icon" />
//       </div>
//     </div>
//   );
// }

// export default Search;
