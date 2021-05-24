import React from 'react';
import GetData from './GetData';

function Students () {

    const {students} = GetData('http://localhost:8000/information');

    return (
        <div className="card-container">
            
            {students && students.map(student => (

                <div className="yawa" key={student.id}>
                    <h1>{student.fname} {student.minitial} {student.lname}</h1>
                    <p>Student ID: {student.id}</p>
                    <p>Course: {student.course}</p>
                </div>

            ))}
           
        </div>
    )
}
export default Students;