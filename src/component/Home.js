import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Home = () => {
const[formdata,setFormData]=useState([])
    const fetchApiData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            console.log(res)
            const data=res?.data?.address;
            const apidata=data.map((ele)=>{
                return{
                    label:ele?.name,
                    value:ele?.id
                }
            })
            setFormData(apidata)
        }).catch((err)=>{
            toast.error(err?.response?.data?.message?err?.response?.data?.message:"Something went wrong")
        })
    }

    useEffect(()=>{
        fetchApiData()
    },[])
  return (
   <>
   <select>
   <option hidden>--choose--</option>
   {formdata.map((ele,index)=>(
    <option key={index} value={ele?.value}>{ele?.name}</option>
   ))}
   </select>
   </>
  )
}

export default Home