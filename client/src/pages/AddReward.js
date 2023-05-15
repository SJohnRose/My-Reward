import React, {useState, useEffect, useRef} from 'react';
import { Navigate, useLocation} from 'react-router-dom';

import { useMutation, useQuery } from '@apollo/client';
import { ADD_REWARD } from '../utils/mutations';
import { QUERY_STUDENTS, QUERY_PRIZES, QUERY_REWARDS} from '../utils/queries';


export default function AddReward(props) {
    
    const studentsQuery = useQuery(QUERY_STUDENTS);
    const students = studentsQuery.data?.students || [];

    const prizesQuery = useQuery(QUERY_PRIZES);
    const prizes = prizesQuery.data?.prizes || [];

    const location = useLocation();
    const {teacherId} = location.state;
    console.log(teacherId);

    const [addReward, { error, data }] = useMutation(ADD_REWARD, {
      refetchQueries: [
        QUERY_REWARDS,
        'GetRewards'
      ],
    });
    
    const[studentName, setStudentName] = useState('');
    const[studentReward, setStudentReward] = useState('');

    const handleNameChange = (e) => {
        const { name, value } = e.target;
        setStudentName(value);
        
    }; 

    const handlePrizeClick = (e) => {
        const { name, value } = e.target;
        setStudentReward(value);
         
    };  

    const handleFormSubmit = async (e) => {
      e.preventDefault();
      const studentSelected = (students.filter(student => student.studentName===studentName));
      const studentId=studentSelected[0]._id;
      console.log(studentId);
      const prizeSelected = (prizes.filter(prize => prize.description===studentReward));
      const prizeId=prizeSelected[0]._id;
      console.log(prizeId);
      
      
      console.log(teacherId);
      try {
        const { data } = await addReward({
        variables: { 
          student:studentId,
          teacher:teacherId,
          prize:prizeId,
         },
      });
      }
      catch (e) {
        console.error(e);
      }
      console.log(data);
    };
    
    

    return (
      <div className="page">
        
          <h2 className="entry-title">Reward Student </h2>
          {data ? (
              <p>
                 Success! Rewarded on {data.date} 
                <Navigate to="/student" replace={true}/>
              </p>
          ) : (
          <form className="reward-form" onSubmit={handleFormSubmit}>
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
          
          <h4 className= "select-title">Select Reward Category:</h4>
          <div className="prize-list">
          {prizes
                .map((prize) => {
                return (
                  <div className="prize-card" key={prize._id} >
                      <h3> {prize.category}</h3>
                      <button type="button" className="prize-button" onClick={handlePrizeClick} value={prize.description}> {prize.description}</button>
                      <h6> Points: {prize.points}</h6>
                  </div>);
                })}
          </div>
          <button type="submit" className="reward-button">REWARD STUDENT</button>
          </form>
          )};
          </div>
           
    );
  }