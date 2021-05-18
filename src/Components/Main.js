import React, { useState, useEffect } from 'react';
import Table from './Table';
import API from '../Utils/API';
import "../Styles/main.css";

function Main() {
    const [userState, setUserState] = useState([]);
    const [searchState, setSearchState] = useState([]);
    
    const handleInputChange = (event) => {
        event.preventDefault();
        let match = userState.filter((user) => {
            let name = user.name.first.toLowerCase();
            let search = event.target.value.toLowerCase();
           return name.startsWith(search);
        });
        setSearchState(match);
    };
    
    useEffect(() => {
        API.getUsers().then((users) => {
            setUserState(users.data.results);
            setSearchState(users.data.results);
        });
    }, []); 
    
    return (
        <div className="main">
            <div className="searchContainer">
                <form style={{width:'80%'}} onSubmit={handleInputChange}>
                    <input type="text" className="form-control" placeholder="type to search for users..." aria-label="searchbox" onChange={handleInputChange}/>
                </form>
            </div>     
            <Table users={searchState}/>
        </div>
    )
}

export default Main
