import React from 'react'
import { Table } from "react-bootstrap";


const UserTable = () => {
    return (
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
      {window.store && `${window.store.getState().counter.users[0]}-${window.store.getState().counter.value}`}
      {window.store && window.store.getState().counter.users.map((data,index) => {
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
