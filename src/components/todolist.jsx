import "../App.css"
function TodoList({val,val1,val2}){
    //console.log(val)
    return (
        <div id="list">
           {val.map((e,index)=>{
               return (
                 <div className="item">
                   <div  >
                     <input type="checkbox"></input>
                   </div>
                   <div className={e.status?"strike":"notstrike"} onClick={()=>{
                     val2(index)
                   }} key={index}>{e.task}</div>
                   <div onClick={()=>{
                     val1(index)
                   }}>
                     <button>Del</button>
                   </div>
                 </div>
               );   
           })}
            
        </div>
    )
}
export default TodoList