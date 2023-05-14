import React from 'react';

const TeacherList = ({ rewards, title }) => {
//   if (!teachers.length) {
//     return <h3>No Teachers found</h3>;
//   }

//   return (
//     <div className="homepage-rewards">
//       <h2 className="title">{title}</h2>
//       <div>
//         {teachers &&
//           teachers.map((teacher) => (
//             <div key={teacher._id} >
//               <div className="teacher-card">
//                 <h3>
//                   {teacher.name} <br />
//                 </h3>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

if (!rewards.length) {
  return <h3>No Rewards found</h3>;
}

return (
  <div className="homepage-rewards">
    <h2 className="title">{title}</h2>
    <div>
      {rewards &&
        rewards.map((reward) => (
          <div key={reward._id} >
            <div className="teacher-card">
              <p>`{reward.teacher.name} rewarded {reward.student.studentName} 
              with {reward.prize.points} points for <b>{reward.prize.description}</b></p>
            </div>
          </div>
        ))}
    </div>
  </div>
);
};
export default TeacherList;