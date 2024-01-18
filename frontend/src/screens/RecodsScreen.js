import { useContext } from 'react';
import ActionContext from '../context/ActionContext';

import React from 'react'

// Table imports
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

import { useEffect } from 'react';
const RecodsScreen = () => {


    let {records,getAllRecords}=useContext(ActionContext);
    
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'Asia/Kolkata',
    };
    useEffect(()=>{
        getAllRecords()
    },[])
  return (
    <Paper >
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>From</TableCell>
          <TableCell>To</TableCell>
          <TableCell>Content</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>At</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {records && records.map((record) => (
      
      <TableRow key={record.id}>
      <TableCell>{record.fromNumber}</TableCell>
      <TableCell>{record.toNumber}</TableCell>
      <TableCell>{record.content}</TableCell>
      <TableCell>{record.type}</TableCell>
      <TableCell>{new Intl.DateTimeFormat('en-IN', options).format(new Date(record.created_at))}</TableCell>  
    </TableRow>
  ))}
      </TableBody>
    </Table>
  </Paper>
  )
}

export default RecodsScreen
