import { useState } from "react";
import React from "react";


const List = () =>{

    const[item,setItem]=useState(["raj","jay","jyot","parth"]);
    const[Search,setSearch]=useState("");


    const getValue = (event) =>{
        setSearch(event.target.value)
        console.log(event.target.value)
    }
    

    return(
        <>
     <input type="text" value={Search} onChange={getValue}/>
        <ul>
            {
                item.map(item =><li key={item}>{item}</li>)
            }
        </ul>
     

     
     </>
    )
}

export default List;