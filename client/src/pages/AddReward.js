import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';
import { ADD_REWARD, ADD_STUDENT } from '../utils/mutations';
import { QUERY_STUDENTS, QUERY_PRIZES} from '../utils/queries';


export default function AddReward(props) {
    
    const studentsQuery = useQuery(QUERY_STUDENTS);
    const students = studentsQuery.data?.students || [];

    const prizesQuery = useQuery(QUERY_PRIZES);
    const prizes = prizesQuery.data?.prizes || [];

    
    const[classData, setClassData] = useState('');
    
    function saveClass() {
        localStorage.setItem('studentClass', classData);
    }
       
    const[studentName, setStudentName] = useState('');
    const[studentList, setStudentList] = useState([]);

    const handleNameChange = (e) => {
        const { name, value } = e.target;
        setStudentName(value);
        
    }; 

       
    const handleFormSubmit = async (e) => {
      e.preventDefault();

    };
    

    return (
      <div className="page">
        <div>
          <h2 className="reward-title">Reward Student </h2>
          <h4 className= "select-title">Select Student to reward:</h4>
          <select
            className = "select-students"
            name="studentName"
            onChange={handleNameChange}>
            {students
                .map((student) => {
                return (
                <option key={student._id} value={student.studentName}>
                  {student.studentName}
                </option>
              );
            })}
          </select>
          </div>
          <h4 className= "select-title">Select Reward Category:</h4>
          <div className="prize-list">
          {prizes
                .map((prize) => {
                return (
                  <div className="prize-card">
                      <p> {prize.category}</p>
                      <p> {prize.description}</p>
                      <p> {prize.points}</p>
                  </div>);
                })}
          </div>
          <div>
          <button type="submit" className="reward-button">REWARD STUDENT</button>
          </div>
              
        
      </div>
      
    );
  }