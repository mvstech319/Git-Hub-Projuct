import React from 'react'

export const PostClient = () => {
  return (
    <>
    {/* Modal start */}
<div className="modal fade" id="modalopen" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Add Client</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
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
            <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button"className="btn btn-primary" data-bs-dismiss="modal">Save</button>
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
