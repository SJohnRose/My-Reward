import React, {useState} from 'react';
import {Link, Navigate, useParams} from 'react-router-dom';
import addStudentImage from '../assets/images/new-student.png';
import deleteStudentImage from '../assets/images/delete-student.png';
import updateStudentImage from '../assets/images/update-student.png';
import rewardStudentImage from '../assets/images/reward-student.png';

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
        <Navigate to="/add-reward" state={{ teacherId: profileId }}/>
     );
}

return (
    <div className="page">
        
        <h1> Hi {profileId} Dashboard </h1>
        <div className="student-buttons">
            <div className="choice">
                <img className="choice-image" src ={addStudentImage} alt="New Student Icon"/>
                <button className="single-button" onClick={() => setChoice('add-student')}> Add Student </button>
            </div>
            <div className="choice">
                <img className="choice-image" src ={deleteStudentImage} alt="Delete Student Icon"/>   
                <button className="single-button" onClick={() => setChoice('delete-student')}> Remove Student </button>
            </div>
            <div className="choice">
                <img className="choice-image" src ={updateStudentImage} alt="Update Student Icon"/>   
                <button className="single-button" onClick={() => setChoice('update-student')}> Update Student </button>
            </div>
            <div className="choice">
                <img className="choice-image" src ={rewardStudentImage} alt="Reward Student Icon"/>   
                <button className="single-button" onClick={() => setChoice('add-reward')}> Reward Student </button>
            </div>
        </div>
    </div>
);
}

export default Student;