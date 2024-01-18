import { createContext,useState } from "react";

const ActionContext=createContext()

export default ActionContext;

export const ActionProvider=({children})=>{
    let [records,setRecords]=useState([])

    let sendSms=async(phoneNumber,content)=>{
        let response=await fetch('http://127.0.0.1:8000/sms/',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({'phoneNumber':`+91${phoneNumber}`, 'content':content})
        })
        if (response.status!==200) {
            alert('Action not compeleted')
        }
      
    }

    let sendWhatsapp=async(phoneNumber,content)=>{
        let response=await fetch('http://127.0.0.1:8000/whatsapp/',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },body: JSON.stringify({'phoneNumber':`+91${phoneNumber}`, 'content':content})
        })
        if (response.status!==200) {
            alert('Something went wrong')
        }
       
    }

    let sendCall = async (phoneNumber,content)=>{
        let response =await fetch('http://127.0.0.1:8000/call/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },body: JSON.stringify({'phoneNumber':`+91${phoneNumber}`, 'content':content})
        })
        if (response.status!==200) {
            
            alert('Action not compeleted')
        }
        
    }


    let getAllRecords = async ()=>{
        let response =await fetch('http://127.0.0.1:8000/records/',{
            method:'GET',
        })
        let data=await response.json()
        if (response.status===200) {
            setRecords(data)
        }
        else{
            alert('Action not compeleted')
        }
    }
   
    let contextData={
        records:records,
        sendSms:sendSms,
        sendWhatsapp:sendWhatsapp,
        sendCall:sendCall,
        getAllRecords:getAllRecords
    }

    return(
        <ActionContext.Provider value={contextData}>
            {children}
        </ActionContext.Provider>
    )
}