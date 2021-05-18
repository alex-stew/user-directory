import React from 'react';
import "../Styles/table.css";

function Table({ users }) {
    
    // const { user } = users;
    // let sortedUsers = [...user];
    // sortedUsers.sort((a,b) => {
    //     if (a.name < b.name) {
    //         return -1;
    //     }
    //     if (a.name > b.name) {
    //         return 1;
    //     }
    //     return 0;
    // });

    return (
        <div>
            {/* the class name sortable references the library saved in the head tag for index.html */}
            <table style={{ width: '80%', margin: 'auto', justifyContent: 'center'}} className="table sortable table-striped" id="sortTable" >
                <thead className="table-header">
                    <tr>
                        <th scope="col">PHOTO</th>
                        <th scope="col" style={{"cursor": "pointer"}}>FIRST NAME</th>
                        <th scope="col" style={{"cursor": "pointer"}}>LAST NAME</th>
                        <th scope="col">CONTACT EMAIL</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {users.map((users) => (
                        <tr key={users.email}>
                            <td>
                                <img src={users.picture.medium} alt="headshot-user" className="img-responsive rounded"/>
                                </td>
                            <td>{users.name.first}</td>
                            <td>{users.name.last}</td>
                            <td>{users.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
