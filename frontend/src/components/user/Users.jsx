import react from 'react';
import './User.css';
import {Postuser } from './Postuser';
import { Table } from './Table';
import { Search } from './Search';
import { Putuser } from './Putuser';
import { Deleteuser } from './Deleteuser';


export const Users = () => {
  return (
    <>
<Search/>
<Table/>
<Postuser/>
<Deleteuser/>
<Putuser/>
    </>
  )
}
