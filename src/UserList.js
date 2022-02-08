import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserList = () => {
    const [usersData, setUsersData] = useState([])
    // const [error, setError] = useState(null)
    const url = "https://jsonplaceholder.typicode.com/users"

    useEffect(() => {
        
        const getUsersData = () => {
            axios
            .get(url)
            .then((response) => {
                const data = response.data
                setUsersData(data)
            })
            .catch((error) => {
                console.log(error)
            })
        };
        
        getUsersData();
    }, [])

    const userDetails = usersData.map((data) => (
        <div>
            <li>Name: {data.name}</li>
            <p>Username: {data.username}</p>
            <p>Email: {data.email}</p><br></br>
        </div>
    ))

        // useEffect(() => {
        //     getUsersData();
        // }, [])

    return (
        <div>
            <ol>{userDetails}</ol>
        </div>
    );
}
    



export default UserList;
