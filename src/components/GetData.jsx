import {useState, useEffect} from 'react';

const GetData  = (url) => {

    const [students, setStudents] = useState(null);

    useEffect (() => {

        fetch(url) 
        .then(response => {
            return response.json();
        })
        .then(data => {
            setStudents(data)
        })
        .catch(err => {console.log(err.message)});
    }, []) 
    return {students}
}
 
export default GetData;