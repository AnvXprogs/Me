import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Reg({setUser}) {
    const navigate = useNavigate();
    const [data, setData] = useState('')
    const regHandler = (e) => {
        e.preventDefault()
        setUser({name:e.target[0].value})
        navigate('/')
        document.cookie = `userName=${e.target[0].value}; path='/'; max-age=${60 * 2}`
    }
    const changeHandler = (e) =>{
        if(/[а-яА-Я]+/g.test(e.nativeEvent.data)){
            setData(e.target.value)
        }
    };
  return (
    <div>
      <form style={{
            display:'flex',
            flexDirection: 'column'
        }}
        onSubmit={regHandler}
        >
        <input type="text" placeholder='Введите имя' onChange={changeHandler} value={data}/>
        <button>Регистрация</button>
      </form>
    </div>
  )
}
