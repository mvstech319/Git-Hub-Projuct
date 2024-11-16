import React from 'react'
import './Client.css'
import { Search } from './Search'
import { GetClient } from './GetClient'
import { PostClient } from './PostClient'
import { PutClient } from './PutClient'
import { DeleteClient } from './DeleteClient'

export const Client = () => {
  return (
    <>
    <Search/>
    <GetClient/>
    <PostClient/>
    <PutClient/>
    <DeleteClient/>
    </>
  )
}
