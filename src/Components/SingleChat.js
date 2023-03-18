import './Singlechat.css'
import Contact from './Contact'
import {BiSend} from 'react-icons/bi'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ChatMessageComponent } from './ChatMessageComponent'
export function SingleChat(props)
{
        const[TotalMessege,SetTotalMessege]=useState([]);
        const[enable,setenable]=useState(false);
        const contactdesc=Contact.find(element=>
                {
                        return element.id===props.contactid
                })

        const[TextMesseage,SetTextMessege]=useState({profileid:0,chatid:0,messege:""});
     
                function Sendmessageinchat(event)
                {
                        setenable(false)
                      const{name,value}=event.target;
                      SetTextMessege(pre=>
                      {
                        return{
                                ...pre,
                                [name]:value
                        }
                      })
                }

                function sentfromtotalchat()
                {
                //        console.log(contactdesc.id);
                       props.idfromsinglechat(contactdesc.id);
                }
                function SeeMessageinChat()
                {
                        
                        TextMesseage.chatid=(contactdesc.id);
                        // console.log("from click"+contactdesc.id);
                        // console.log(TextMesseage);   
                        setenable(true);
                        
                                SetTotalMessege((pre)=>
                        {
                                return[...pre,TextMesseage]
                        })

                        console.log(TotalMessege);
                }

                
        return(
                <div className="Single-Chat">
                        <div className="Other-Profiles">
                               <div className="profile-info" onClick={sentfromtotalchat}><img src={contactdesc.img}></img></div> 
                                <div className="profile-more"><p>{contactdesc.name}</p></div>
                        </div>
                        <div className="display-messages">
                               <div className='scroll-message'>
                               {TotalMessege.map((items,index)=>
                               {
                                if(items.chatid==contactdesc.id)
                                {
                                return  <ChatMessageComponent key={index} messege={items.messege} id={contactdesc.id}/>
                                }

                               }) }
                               </div>

                                
                                </div>
                        <div className='display-message'>
                        
                        <div className="message-sent"><input type="text" placeholder="Type here..." name="messege" onChange={Sendmessageinchat}></input><button onClick={SeeMessageinChat}><BiSend/></button></div>
                        <div className='sent-message'></div>
                        </div>
                </div>
        )
}