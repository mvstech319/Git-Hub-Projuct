import React from 'react'

export const Deleteuser = () => {
  return (
    <>
    {/* Modal start */}
<div class="modal fade" id="Delete-modalopen" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Delete User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h1>Are You Delete This Data</h1>
      </div>     
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
        <button type="button"class="btn btn-primary"data-bs-dismiss="modal">yes</button>
      
      </div>
      
    </div>
  </div>
</div>
{/* Modal end */}
    </>
  )
}
