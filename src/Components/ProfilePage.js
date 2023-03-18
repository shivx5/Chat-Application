import './Profilepage.css'
import Contact from './Contact'
export function ProfilePage( props )
{
     // console.log(Contact);
     const ProfileDetails=Contact.find(items=>
          {
               return items.id===props.contactid;
          })
     // console.log(ProfileDetails);
        return(
                <div className="Profile-page">
                     <div className="chat-profile-picture">
                          <img src={ProfileDetails.img}></img>
                     </div>
                     <div className="contact-details">
                          <div className="contact-name">{ProfileDetails.name}</div>
                          <div className="contact-number">{ProfileDetails.id}</div>
                     </div>
                </div>
        )
}