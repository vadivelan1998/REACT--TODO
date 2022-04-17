import {useState} from "react"
function TodoInput({funct}){
   // console.log(data)
   const [data, setData] = useState();
   
  
    return (
      <div>
        <input onChange={(e)=>{
            setData(e.target.value)
        }} placeholder="Enter Todo"></input>
        <button className="btn"
          onClick={() => {
     
            funct(data);
          }}
        >
          +
        </button>
      </div>
    );
}
export default TodoInput