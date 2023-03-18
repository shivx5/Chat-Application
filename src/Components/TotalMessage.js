import './MessageTotal.css'
import { SingleChat } from './SingleChat'
import { TotalChat } from './TotalChat'
import { Route,Routes } from 'react-router-dom'
import { Settings } from './Settings'
import Contacts from './Contacts'
import Status from './Status'
import Notification from './Notification'
import { SingleUser } from './SIngleUser'
import { useState } from 'react'
export function TotalMessage(props)
{                
        const[ContactId,SetContactId]=useState();
        function getcontactid(contactid)
        {
             SetContactId(contactid);
        //      console.log(contactid);
             props.profilecontactid(contactid);
        }

        return(
                <div className="Total-Message">

      <Routes>
             <Route  path='/notification' element={<Notification/>}></Route>
             <Route  path='/contacts' element={<Contacts/>}></Route>
             <Route  path='/settings' element={<Settings/>}></Route>
             <Route path='/status' element={<Status/>}></Route>
             <Route path='/' element={<TotalChat getcontactid={getcontactid}/>}></Route>
             {/* <Route path='/singleuser' element={<SingleUser/>}></Route> */}
       </Routes>
     
               </div>
        )
}