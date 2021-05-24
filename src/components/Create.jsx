import  { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Create () {

    // const [ sid, setSid ] = useState('');
    const [ fname, setFname ] = useState('');
    const [ minitial, setMinitial ] = useState('');
    const [ lname, setLname ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ cnumber, setCnumber ] = useState('');
    const [ eaddress, setEaddress ] = useState('');
    const [ age, setAge ] = useState('');
    const [ birthday, setBirthday ] = useState('');
    const [ course, setCourse ] = useState('');
    const [ note, setNote ] = useState('');

    useEffect(() => {
        let now = new Date().getFullYear();
        let bday = new Date(birthday).getFullYear();
        let newAge = now-bday;
        setAge(newAge);
    })

    const history = useHistory();
    
    const handleSubmit = (e) => {

        e.preventDefault();

        const information = { 
            // sid, 
            fname,
            minitial,
            lname,
            address,
            cnumber,
            eaddress,
            age,
            birthday,
            course, 
            note 
        };

        // setIsPending(true);

        fetch('http://localhost:8000/information',{
            method: 'POST',
            headers: { "Content-type": "application/json"},
            body: JSON.stringify(information)
        }).then(() => {
            
            console.log('new student added');
           
            history.push("/");
        })
        // console.log(information);

    }

    return(

        <div className="create">
            <h2>Student Form</h2>
            <p>Please fill up the form</p>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="main-form">
                    <div className="create-input first-row">
                        <div className="input-box">
                            <label>First Name:</label><br/>
                            <input 
                            type="text"
                            required
                            value = {fname}
                            onChange={(e) => setFname(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <label>Middle Initial:</label><br/>
                            <input 
                                type="text"
                                required
                                value={minitial}
                                onChange={(e) => setMinitial(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <label>Last Name:</label><br/>
                            <input 
                                type="text"
                                required
                                value={lname}
                                onChange={(e) => setLname(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="create-input second-row">
                        <div className="input-box">
                            <label>Address:</label><br/>
                            <input 
                                className="address"
                                type="text"
                                required
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="create-input third-row">
                        <div className="input-box contacts">
                            <label>Contact Number:</label><br/>
                            <input 
                                type="number"
                                required
                                value={cnumber}
                                onChange={(e) => setCnumber(e.target.value)}
                            />
                        </div>
                        <div className="input-box emailaddress">
                            <label>Email Address:</label><br/>
                            <input 
                                type="text"
                                required
                                value={eaddress}
                                onChange={(e) => setEaddress(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="create-input fourth-row">
                        <div className="input-box">
                            <label>Age:</label><br/>
                            <input 
                                type="text"
                                required
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <label>Birthday:</label><br/>
                            <input 
                                type="date"
                                required
                                value={birthday}
                                onChange={(e) => setBirthday(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <label>Course:</label><br/>
                            <input 
                                type="text"
                                required
                                value={course}
                                onChange={(e) => setCourse(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="create-input fourth-row">
                        <div className="input-box">
                            <label>Notes:</label><br/>
                            <textarea 
                                className="notesinput"
                                required
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                            />
                        </div>
                    </div>
                    <button>Add Student</button>
                </div>
            </form>
                        {/* <input 
                            type="hidden"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        /> */}
        </div>
    )
}
export default Create;