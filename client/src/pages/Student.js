import React from 'react';

const Student = () => {

function addStudent() {
    alert("New Student added");
}

function removeStudent() {
    alert("Student deleted");
}

function updateStudent() {
    alert("Student updated");
}


return (
    <div className="page">
        <h1> Student Page </h1>
        <button onClick={addStudent}> Add Student </button>
        <button onClick={removeStudent}> Remove Student </button>
        <button onClick={updateStudent}> Update Student </button>
    </div>
);
}

export default Student;