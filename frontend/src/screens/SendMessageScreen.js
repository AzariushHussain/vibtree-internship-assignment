import React from 'react'

import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import '../App.css'

import { useState } from 'react'

import ActionContext from '../context/ActionContext'
import { useContext } from 'react';

const SendMessageScreen = () => {

    let {sendSms,sendWhatsapp,sendCall}=useContext(ActionContext)
    
    const [message,setMessage]=useState({
        content:'',
        phoneNumber:''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name==="phoneNumber") {

            const currentDigit =value[value.length - 1];

            if (value.length === 1 && currentDigit <'6' ) {
            }else if (value.length >=1 && !/^\d+$/.test(currentDigit)) {
            } else if (value.length > 10) {
            } else {
              setMessage({ ...message, [name]: value });
            }
        } 
        else
        {
            setMessage({ ...message, [name]: value });
        }
      };
    const handleClearform=()=>{
      setMessage({content:'',phoneNumber:''});
    }
  return (
    <div className='register-form'>
    <div className='input-field'>
        <TextField
        helperText="Please enter the message"
        name="content"
        label="Message content"
        className='input-field'
        style={{width:"40vw"}}
        value={message.content}     
        onChange={handleChange}  
        />
    </div>

    <div className='input-field'>
        <TextField
        helperText="Please enter a valid Indian phone number"
        name="phoneNumber"
        label="Phone Number"
        className='input-field'
        style={{width:"40vw"}}
        value={message.phoneNumber}
        onChange={handleChange}
        />
    </div>
  

      <div className="input-field"  style={{marginTop:"3vh"}}>
          <Button variant='contained' style={{margin :"5px"}} onClick={()=>{message.content.trim()===''?alert("can not send empty message"):sendSms(message.phoneNumber,message.content);handleClearform()}}>Send sms</Button>
          <Button variant='contained' style={{margin :"5px"}} onClick={()=>{message.content.trim()===''?alert("can not send empty message"):sendWhatsapp(message.phoneNumber,message.content);handleClearform()}}>Send Whatsapp Message</Button>
          <Button variant='contained' style={{margin :"5px"}} onClick={()=>{message.content.trim()===''?alert("can not send empty message"):sendCall(message.phoneNumber,message.content);handleClearform()}}>Send call</Button>
        </div>
</div>
  )
}

export default SendMessageScreen
