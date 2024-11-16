import React from 'react'

export const Postproduct = () => {
  return (
    <>
    {/* Modal start */}
<div className="modal fade" id="modalopen" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Add Product</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
            <label>Product Name:</label>
            <input type='text' className='form-control'/>
            <label>Price:</label>
            <input type='number' className='form-control'/>
            <label>Description:</label>
            <textarea className='form-control'/>
            <label>Image:</label>
            <input type='file' className='form-control'/>
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
