import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';
import { ADD_REWARD, ADD_STUDENT } from '../utils/mutations';
import { QUERY_STUDENTS} from '../utils/queries';


export default function AddReward(props) {
    const { loading, error, data } = useQuery(QUERY_STUDENTS);
    const students = data?.students || [];
    const ref = React.useRef([]);
    const[classData, setClassData] = useState('');
    
    useEffect(function saveClass() {
        localStorage.setItem('studentClass', classData);
    }, [classData]);
       
    const[studentName, setStudentName] = useState('');
    const[studentList, setStudentList] = useState([]);

    if (loading) return "Loading...";

    if (error) return `Error! ${error.message}`;

    const handleNameChange = (e) => {
        const { name, value } = e.target;
        setStudentName(value);
        
    }; 

    function handleClassChange(e) {
        const { name, value } = e.target;
        setClassData(value);
        const allStudents = students.filter(student => student.studentClass===localStorage.getItem('studentClass'))
                .map(student => student.studentName);
        setStudentList(allStudents);
        ref.current = allStudents;
          
    };
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();

    };
    

    return (
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
        <form className="login-form" onSubmit={handleFormSubmit}>
          <h2 className="login-title">Reward Student </h2>
          Select Student Class:
          <select
            
            name="studentClass"
            onChange={handleClassChange}>
             {students.map((student) => {
             return (
                <option key={student._id} value={student.studentClass}>
                  {student.studentClass}
                </option>
              );
            })}
          </select>
          Select Student to reward:
          <select
            ref = {ref}
            name="studentName"
            onChange={handleNameChange}>
            {/* {students.filter(student => student.studentClass===localStorage.getItem('studentClass'))
                .map(student => {
                return (
                <option key={student._id} value={student.studentName}>
                  {student.studentName}
                </option>
              );
            })} */}
          </select>
          <button type="submit">REWARD STUDENT</button>
        </form>
        )}
        
      </div>
      
    );
  }