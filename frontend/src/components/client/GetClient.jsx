import React from 'react'

export const GetClient = () => {
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
    <tr>
      <td>Vinay kumar sahu</td>
      <td>05/07/2002</td>
      <td>vinaysahu7502@gmail.com</td>
      <td>9651910152</td>
      <td>Gonda</td>
      <td>Arya Nagar</td>
      <td><button className='btn btn-warning' data-bs-toggle="modal" data-bs-target="#Edit-modalopen">Edit</button></td>
      <td><button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#Delete-modalopen">Delete</button></td>
    </tr>
  </tbody>
</table>
{/* table end */}
    </>
  )
}
