import React, {useState} from 'react';
import {Navigate, useParams} from 'react-router-dom';

const Student = (props) => {
const [choice, setChoice] = useState('');
const {profileId} = useParams();

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
if(choice==='add-reward') {
    return (
        <Navigate to="/add-reward" />
     );
}

return (
    <div className="page">
        <h1> Hi {profileId} Dashboard </h1>
        <button onClick={() => setChoice('add-student')}> Add Student </button>
        <button onClick={() => setChoice('delete-student')}> Remove Student </button>
        <button onClick={() => setChoice('update-student')}> Update Student </button>
        <button onClick={() => setChoice('add-reward')}> Reward Student </button>
    </div>
);
}

export default Student;