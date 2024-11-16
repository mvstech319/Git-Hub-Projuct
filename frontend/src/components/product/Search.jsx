import React from 'react'

export const Search = () => {
  return (
    <>
    <div className='client-section'>
            <input type="search" placeholder='Search Hear...' />
            <button data-bs-toggle="modal" data-bs-target="#modalopen">Add Product</button>
    </div>
    </>
  )
}
