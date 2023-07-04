import React, { useState } from 'react';
import "./app.css";

// Todo 
// Add form
// Validate
// Display List
//  

const Test=()=> {
  const [todo, setTodo] = useState([]);

  console.log(todo);

  return (
    <div style={{margin:10}}>
      <center>
        <Title>TODO List</Title>
        <TodoForm todo={todo} setTodo={setTodo}/>
        <DisplayList todo={todo}/>
      </center>
    </div>
  );
}

const Title=({children})=> <h2>{children}</h2>;

const TodoForm=({todo, setTodo})=> {
  const [todoText, setTodotext] = useState({text:""});
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(todoText['text'].length>=2){
      setError(false);
      setTodo([todo.concat(todoText)]);
    }
    else{
      setError(true);
    }
  }

  return (
    <div className="app">
      {(error)?<p>No Data</p>: null}
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text"  onChange={(e)=>{setTodotext({text:e.target.value})}}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
} 


const DisplayList = ({todo}) =>{
  return <ul>{todo?.map((v,i) => <li key={i}>{v.text}</li>)}</ul>;
}




export default Test;
