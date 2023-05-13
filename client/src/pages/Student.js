import React, {useState} from 'react';
import {Navigate} from 'react-router-dom';

const Student = () => {
const [choice, setChoice] = useState('');

// function addStudent() {
//     return (
//     <Navigate to="/add-student" />
//     );
    
// }
if(choice==='add-student') {
    return (
        <Navigate to="/add-student" />
     );
}
else if(choice==='delete-student') {
    return (
        <Navigate to="/delete-student" />
     );
}
if(choice==='update-student') {
    return (
        <Navigate to="/update-student" />
     );
}

return (
    <div className="page">
        <h1> Student Page </h1>
        <button onClick={() => setChoice('add-student')}> Add Student </button>
        <button onClick={() => setChoice('delete-student')}> Remove Student </button>
        <button onClick={() => setChoice('update-student')}> Update Student </button>
    </div>
);
}

export default Student;