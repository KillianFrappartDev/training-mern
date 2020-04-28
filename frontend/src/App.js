import React, { useState } from 'react';
import CreateNote from './components/CreateNote';
import ListNote from "./components/ListNote";

function App() {

  return (
  <div>
    <CreateNote />
    <ListNote />
  </div>)

}

export default App;
