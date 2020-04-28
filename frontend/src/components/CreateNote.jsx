import React, { useState } from "react";
import axios from "axios";

function CreateNote() {

    const [userName, setName] = useState("")
    const [userAge, setAge] = useState("")

    function handleChangeName() {
        setName(document.getElementById("name").value);
    };

    function handleChangeAge() {
        setAge(document.getElementById("age").value);
    };

    function onSubmit(e) {
        e.preventDefault();
    }

    function sendNew() {
        axios.post('http://localhost:5000/add', {
            name: userName,
            age: userAge
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="name" id="name" onChange={handleChangeName} value={userName} type="text" placeholder="Name" />
                <input name="age" id="age" onChange={handleChangeAge} value={userAge} type="text" placeholder="Age" />
                <input type="submit" onClick={sendNew} />
            </form>
        </div>
    );
};

export default CreateNote;