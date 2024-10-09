
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([{
    title: "go to gym",
    description: "go to gym from 7-9",
    completed: false
  }, {
    title: "study DSA",
    description: "study DSA from 9-10",
    completed: true
  }, {
    title: "study DSA",
    description: "study DSA from 9-10",
    completed: true
  }]);

  function addTodo() {
    setTodos([...todos, {
      title: "new Todo",
      description: "desac of new todo"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a randopm todo</button>
      {/* <Todo title={todos[0].title}description={todos[0].description} />
      <Todo title={todos[1].title} description={todos[1].description} /> */}
      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description} />
      })}
    </div>
  )
}


function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App