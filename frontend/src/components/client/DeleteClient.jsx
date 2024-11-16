import React from 'react'

export const DeleteClient = () => {
  return (
    <>
    {/* Modal start */}
<div class="modal fade" id="Delete-modalopen" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Delete Client</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h3>Are you Delete this data</h3>
      </div>
            <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
        <button type="Submit"class="btn btn-primary" data-bs-dismiss="modal">Yes</button>
      </div>
      
    </div>
  </div>
</div>
{/* Modal end */}
    </>
  )
}
