import './Mainchat.css'
import { TotalMessage } from './TotalMessage'
import { ListOfItems } from './ListOfItems'
import { ProfilePage } from './ProfilePage'
import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import ContactDetails from './ContactDetails'
export function MainChat()
{
        const[Contactprofile,Setcontactprofile]=useState(0);
        let Contactid;
        function profilecontactid(contactid)
        {
                Setcontactprofile(contactid);
                // Contactid=contactid;
        }
        console.log(ContactDetails);
        return(
                <div className="Main-Chat">
                        <ListOfItems/>
                        <TotalMessage profilecontactid={profilecontactid}/>
                        <ProfilePage contactid={Contactprofile}/> 
                </div>
        )
}