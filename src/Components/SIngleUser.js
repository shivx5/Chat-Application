import './SIngleuser.css'
import { SingleChat } from './SingleChat'
import { useState } from 'react';
export function SingleUser(props)
{

        const[enable,SetEnable]=useState(false);
        function Enabledescription()
        {
                props.description(props.id);
                SetEnable(true);
        }
        return(
                <div onClick={Enabledescription} className="display-single-user">
                        <img src={props.img}></img>
                        <p >{props.name}</p>
                       
                </div>
        )
}