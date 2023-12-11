import { Rating } from "@mui/material"
import { Button } from "react-bootstrap"

const FilterMovies=()=>{

    return(
    
    <div>
        <input type="text"></input>
        <br></br>
        <br></br>
        <p>Rating</p>
        <Rating/>
        <br></br>
        <br></br>
        <Button>Reset</Button>
   
    </div>
    )
    
    }
    
    export default FilterMovies