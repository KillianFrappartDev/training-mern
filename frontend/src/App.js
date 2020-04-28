import React, { useState } from 'react';

function App() {

  const [testData, setData] = useState([{id: 0, name: "wait", age: 1}]);

fetch("http://localhost:5000/")
.then(result => result.json())
.then(data => setData(data));

function CardItem(props) {
    return (
      <div>
        <p>{props.name}</p>
        <p>{props.age}</p>
      </div>)
};

function createCard(item) {
  return (
    <CardItem 
      key={item.id}
      name={item.name}
      age={item.age}
    />
  );
}

function CardAll() {
  return testData.map(createCard);
}

  return <CardAll />;
}

export default App;
