import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Table = () => {

  const [data, setData] = useState([])
 
  useEffect(() => {
    async function FetchData() {
      try {
        const fetchUser = await axios.get('http://localhost:5000/api/read')
        const response = fetchUser.data
        setData(response)
      } catch (error) {
        console.log(error)
      }
    }
    FetchData();
  }, [data])

  return (
    <>
      {/* table start */}
      <table className="table table-light table-striped text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Landmark</th>
            <th>Address</th>
            <th colSpan={'2'}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.user?.map((elem, index) => {
            return (
              <tr>
                <td>{elem.name}</td>
                <td>{elem.dob}</td>
                <td>{elem.email}</td>
                <td>{elem.mobile}</td>
                <td>{elem.landmark}</td>
                <td>{elem.address}</td>
                <td><button className='btn btn-warning' data-bs-toggle="modal" data-bs-target="#Edit-modalopen">Edit</button></td>
                <td><button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#Delete-modalopen">Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* table end */}
    </>
  )
}
