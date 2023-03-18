import { MainChat } from './Components/MainChat';
import {Routes,Route} from 'react-router-dom';
import { LoginPage } from './Components/LoginPage';
import './App.css';
import { useState } from 'react';
import { ProfilePage } from './Components/ProfilePage';

function App() {
  const[EnableLogin,SetEnableLogin]=useState(false)
  function LogintoMainPage()
  {

    console.log(EnableLogin)
         SetEnableLogin(!EnableLogin);
        //  console.log(EnableLogin);
  }
  return (
    <div className="App">
      {!EnableLogin && <LoginPage logintoPage={LogintoMainPage}/>}
      {EnableLogin && <MainChat/>}
      <Routes>
        <Route path='/profile' element={<ProfilePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
