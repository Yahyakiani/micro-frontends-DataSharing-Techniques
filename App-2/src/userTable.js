import React, { useCallback, useEffect, useState } from 'react'
import { Table } from "react-bootstrap";


const UserTable = () => {
    const [userData, setUserData] = useState([])

    const handleDataEvent = useCallback(event => {
      const { detail } = event;

      setUserData(oldArray => [...oldArray, detail]);
    }, []);


    useEffect(() => {
        window.addEventListener("userData",handleDataEvent);

      return () => {
        window.removeEventListener("userData",handleDataEvent);
      };

    },[handleDataEvent])
    return (
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
      {userData && userData.map((data,index) => {
          return (
            <tr key={`${index}${data.firstname}`}>
            <td>{index+1}</td>
            <td>{data.firstname}</td>
            <td>{data.lastname}</td>
            <td>{data.location}</td>
          </tr>
          );
      })}

  </tbody>
</Table>
    )
}

export default UserTable
