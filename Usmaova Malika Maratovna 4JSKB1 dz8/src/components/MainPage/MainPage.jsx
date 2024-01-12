import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function MainPage({user}) {
    const navigate = useNavigate();
    useEffect(()=>{
        if(!user.name){
            navigate('/reg')
        }
    },[])
  return (
    <div>
      Привет {user?.name}
    </div>
  )
}
