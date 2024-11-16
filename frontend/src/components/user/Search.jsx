import React from 'react'
import {jsPDF} from 'jspdf';
import 'jspdf-autotable'

export const Search = () => {


  // export to pdf

  const exportToPdf=()=>{
    const doc=new jsPDF();
    doc.text('user data',20,10);

    // define columns and table
    const columns =['name','dob','email','mobile','landmark','address']

    const rows =users.map(user=>[
      user.name,dob,email,mobile,landmark,address
    ]);

    //  genrate the table in pdf

    doc.autoTable({
      startY:20,
      head:[columns],
      body:rows,
    });
    doc.save('userData.pdf');
  }
  return (
    <>
        <div className='user-section'>
            <input type="search" placeholder='Search Hear...' />
           <botton className='btn btn-warning'onClick={exportToPdf}>Export to Pdf</botton>
            <button data-bs-toggle="modal" data-bs-target="#modalopen">Add User</button>
    </div>
    </>
  )
}
