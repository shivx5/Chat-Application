import { useState } from 'react';
import './Loginpage.css';
export function LoginPage(props)
{
        const[UserDetails,SetUserDetails]=useState({username:"",password:""})
        function LogintoMainPage()
        {
                console.log(UserDetails);
                props.logintoPage();
        }
        function SettingUserDetails(event)
        {
              const{name,value}=event.target;
              SetUserDetails((pre)=>
              {
                return{
                        ...pre,
                        [name]:value
                }
              })
        }
        return(
                <div>
                
                 <input type='text' placeholder='usename' name='username' onChange={SettingUserDetails}></input>
                 <input type='password' placeholder='password' name='password' onChange={SettingUserDetails}></input>
                 <button onClick={LogintoMainPage}>Login</button>

                </div>
        )
}