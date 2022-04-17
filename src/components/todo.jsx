import { useState } from "react"
import TodoList from "./todolist.jsx"
import TodoInput from "./todoinput.jsx"

//import "../App.css";
function Todo(){
  const [arr, setarr] = useState([]);
  const [completed,setCompleted]=useState([])



  function getData(val){
    console.log(val)
    setarr([...arr,{task:val,status:false}])
    //console.log(arr)
  }
  function Delete(index){
     arr.splice(index,1)
     setarr([...arr])
     let val = arr.filter((e) => {
       return e.status === true;
     });
     console.log(val);
     setCompleted([...val]);
  }
  function Update(index){
    arr[index].status=!arr[index].status
    setarr([...arr])
  }
  function showCompleted(){
    let val=arr.filter((e)=>{
      return e.status===true
    })
    console.log(val)
    setCompleted([...val])
  }
   console.log(completed);
    return (
      <div>
        <div id="todo">
          <TodoInput funct={getData} />
          <TodoList val={arr} val1={Delete} val2={Update} />
        </div>
        <div>
          <button onClick={showCompleted}>Show Completed Todo</button>
        </div>
        <div>
          <TodoList val={completed} val1={Delete} />
        </div>
      </div>
    );
}
export default Todo