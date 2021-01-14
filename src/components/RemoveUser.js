import { useEffect, useState, Button, Form } from "react";
import facade from "../apiFacade";
export default function RemoveUser() {
    const [erasedName, setNewErasedName] = useState("Hej")
    const [status, setStatus] = useState("");


    function onChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.id;

    setNewErasedName({
        ...erasedName,
        [name]: value,
      });
    }

    const eraseUser = (evt) => {
        evt.preventDefault();
        facade.removeUser(erasedName)

        setStatus("He gone")

      };

    return (
      
    <div> 
        <h1>Denne funktionalitet skal rykkes over til admin</h1>


        <h5>{status}</h5>



        <form>
            <input type="text" id="username" onChange={onChange} />
            <button onClick={eraseUser}>Delete</button>
        </form> 
              
  
    </div>
    ); 
  }
  