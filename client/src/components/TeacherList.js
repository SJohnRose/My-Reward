import React from 'react';

const TeacherList = ({ teachers, title }) => {
  if (!teachers.length) {
    return <h3>No Teachers found</h3>;
  }

  return (
    <div>
      <h2 className="homepage-title">{title}</h2>
      <div>
        {teachers &&
          teachers.map((teacher) => (
            <div key={teacher._id} >
              <div className="teacher-card">
                <h3>
                  {teacher.name} <br />
                  {/* <span style={{ fontSize: '1rem' }}>
                    currently has {teacher.password}
                    password
                    
                  </span> */}
                </h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeacherList;