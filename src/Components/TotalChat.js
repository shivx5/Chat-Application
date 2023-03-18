import './Totalchat.css'
import { SingleChat } from './SingleChat'
import Contact from './Contact'
import { SingleUser } from './SIngleUser';
import { useState } from 'react';
import { Link, Route,Routes } from 'react-router-dom'
import { ProfilePage } from './ProfilePage';

export function TotalChat(props)
{
        const[enable,setEnable]=useState(true);
        const[contactid,SetContactId]=useState(-1);
        const[execute,SetExecute]=useState(false);
       function createnewcontact()
       {
     setEnable(!enable);
       }
       function singleDescription(id)
       {

        // console.log("received  "+id);
        // props.getcontactid(id);
        SetContactId(id);
        SetExecute(true);
        
        
       }

       function idfromsinglechat(id)
       {
        props.getcontactid(id);
        console.log("from singlechat"+id);
       }

        return(
                <div className="Total-chat">

                            <div className='add-chat-search'>
                                <div>
                                        <div className='div-1'> 
                                         {!enable && <div> <input className='newcontact-input'placeholder='New Contact' type='text'></input> add</div> }
                                         {enable && <p className="add-contact" onClick={createnewcontact}>+ createnew</p>}</div>                                        
                                         <div className='div-2'>All Chats</div>
                                        <div className='div-3'><input type="text" placeholder='search Chat'></input></div>
                                </div>
                                </div>
                                <div className='scroll-bar'>
                                {
                                  Contact.map((items,index)=>
                                        {
                                           
                                                return<div key={index} className='mapped-single-users'> <SingleUser description={singleDescription} id={index} name={items.name} desc={items.desc} img={items.img}/></div>
                                        })
                                }
                                 </div>
                                 {execute &&<div> <SingleChat idfromsinglechat={idfromsinglechat} contactid={contactid}/></div>}
                                </div>
        )
}