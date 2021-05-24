import React from 'react';
import Students from './Students'
import GetData from './GetData';
import { useState } from 'react';


function Home () { 

    const {students} = GetData('http://localhost:8000/information');
    
    console.log(students);
    
    const [searchedSid,setSearchedSid] = useState('');
    const [sid,setSid] = useState('');

    const handleSearch = (id) => {

        const newSid = students[id];
        setSearchedSid(newSid.fname + " " + newSid.lname);

        console.log("The searched student is " + searchedSid);

    }

    return(
        <div className="content">
           <h2>List of Students Stored</h2>
                <h2>Student Name:{searchedSid}</h2>
           <input 
                value={(sid)}
                onChange={(e) => setSid (e.target.value)}
                type="number"
            />
            <button onClick={() => handleSearch(sid)}>
                Search
            </button>
            <Students/>
        </div>
    )
}
export default Home;