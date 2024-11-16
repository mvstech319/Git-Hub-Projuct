import React, { useState } from 'react'
import axios from 'axios'
export const Postuser = () => {

  const [value, setValue] = useState({ name: '', dob: '', email: '', mobile: '', landmark: '', address: '' })
  
  const handleChange = (e) => {
    setValue({
      ...value, [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const adduser = await axios.post('http://localhost:5000/api/user', value)
      const response = adduser.data
      console.log(response)
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {/* Modal start */}
      <div className="modal fade" id="modalopen" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add User</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type='text' className='form-control' name='name' value={value.name} onChange={handleChange} />
                <label>DOB:</label>
                <input type='date' className='form-control' name='dob' value={value.dob} onChange={handleChange} />
                <label>Email:</label>
                <input type='email' className='form-control' name='email' value={value.email} onChange={handleChange} />
                <label>Mobile:</label>
                <input type='Number' className='form-control' name='mobile' value={value.mobile} onChange={handleChange} />
                <label>Landmark:</label>
                <input type='text' className='form-control' name='landmark' value={value.landmark} onChange={handleChange} />
                <label>Address:</label>
                <textarea className='form-control' name='address' value={value.address} onChange={handleChange} />
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary"data-bs-dismiss="modal">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal end */}
    </>
  )
}
