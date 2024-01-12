
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';
import Reg from './components/reg/Reg';
import { useState } from 'react';
import Projects from './components/Projects';
import About from './components/About';
import How from './components/How';


function App() {
  const[user,setUser] = useState({name:document.cookie.split('=')[1]});

  
  return (
    <>
   <div style={{
    display:"flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: 'center'   
   }}>
    {user.name?<NavBar/>:null}
    <Routes>
      <Route
      path='/'
      element={
      <MainPage user={user}/>
      }
      />
      <Route
      path='/reg'
      element={
      <Reg setUser={setUser}/>
      }
      />
      <Route
      path='/projects'
      element={
      <Projects/>
      }
      />
      <Route
      path='/about'
      element={
      <About/>
      }
      />
      <Route
      path='/how'
      element={
      <How/>
      }
      />

      </Routes>
    
      
    
    
    </div>
    </>
  );
}

export default App;
