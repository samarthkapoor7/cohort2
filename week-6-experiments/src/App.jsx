import React, { Fragment, useState } from 'react';

function App() {
  const [title, setTitle] = useState("my name is samarth");

  function updateTitle() {
    setTitle("my name is " + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="samarth2"></Header>
      <Header title="samarth3"></Header>
      <Header title="samarth4"></Header>
      <Header title="samarth5"></Header>
      <Header title="samarth6"></Header>
    </div>
  )
}

function Header({title}) {
  return <div>
    {title}
  </div>
}
 
export default App