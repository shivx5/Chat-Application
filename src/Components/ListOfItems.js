import './List.css'
import { Link } from 'react-router-dom'
import {GiRoundShield} from 'react-icons/gi'
import {BiMessageRounded} from 'react-icons/bi'
import {GrSettingsOption} from 'react-icons/gr'
import {IoIosContact} from 'react-icons/io'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import { Outlet } from 'react-router-dom'
export function ListOfItems()
{
        return(
                <div className="List-Of-Items">
                        <div className='all-items'>
                        <Link to='/status' className='status'><GiRoundShield/></Link>
                        <Link to='/' className='chat'><BiMessageRounded/></Link>
                        <Link to='/settings' className='settings'><GrSettingsOption/></Link>
                        <Link to='/contacts' className='contacts'><IoIosContact/></Link>
                        <Link to='/notification' className='notifications'><MdOutlineNotificationsNone/></Link>
                        </div>
                        <Outlet/>
                </div>
        )
}