import React from 'react'
import { Search } from './Search'
import { Getproduct } from './Getproduct'
import { Postproduct } from './Postproduct'
import { Putproduct } from './Putproduct'
import { Deleteproduct } from './Deleteproduct'

export const Product = () => {
  return (
    <>
    <Search/>
    <Getproduct/>
    <Postproduct/>
    <Putproduct/>
    <Deleteproduct/>
    </>
  )
}
