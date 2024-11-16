import React from 'react'

export const Deleteproduct = () => {
  return (
    <>
      {/* Modal start */}
      <div className="modal fade" id="Delete-modalopen" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete Product</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h3>Are You Delete This Product</h3>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Yes</button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal end */}
    </>
  )
}
