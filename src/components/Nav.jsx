import React from 'react';


function Navigation () {
    
    return (
        <div className="nav-bar">
            <header>
            <div className="header-container">
            <div className="content-header">
            <img className="eac" src ="/eaclogo.png" alt="eaclogo"/>
            <img className="general" src ="/generals.png" alt="generalslogo"/>
            <h1>Emilio Aguinaldo College</h1>
            <h1>Student Information</h1>
            </div>
            </div>
            </header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/create">New Student</a></li>
                </ul>
            </nav>

        </div>
    )
}
export default Navigation;