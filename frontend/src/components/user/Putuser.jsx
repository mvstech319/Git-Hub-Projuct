import React from 'react'

export const Putuser = () => {
  return (
    <>
    {/* Modal start */}
<div class="modal fade" id="Edit-modalopen" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Edit User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            <label>Name:</label>
            <input type='text' className='form-control'/>
            <label>DOB:</label>
            <input type='date' className='form-control'/>
            <label>Email:</label>
            <input type='email' className='form-control'/>
            <label>Mobile:</label>
            <input type='Number' className='form-control'/>
            <label>Landmark:</label>
            <input type='text' className='form-control'/>
            <label>Address:</label>
            <textarea className='form-control'/>
            <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button"class="btn btn-primary"data-bs-dismiss="modal">Save</button>
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
