import { useState } from "react";


function SearchBar({onSubmit})
{


  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => 
  {
    event.preventDefault();


    onSubmit(

      //NEVER EVER DO THIS 
      //document.querySelector("input").value

      term
    );
  };

  const handleChange = (event) => 
  {
    console.log(event.target.value);
  };


  return(
    <div>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleChange}/>
      </form>
    </div>
  )
}

export default SearchBar;
