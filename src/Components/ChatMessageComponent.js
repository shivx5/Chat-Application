import './MessegeComponent.css'
export function ChatMessageComponent(props)
{
        return(
                <div className="ChatMessageComponent">
                        <div className='display-individual-messeges'>
                        {props.messege}
                        </div>
                </div>
        )
}