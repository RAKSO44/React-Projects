import dayjs from 'dayjs';
import './ChatMessage.css';
import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import MyProfileImage from '../assets/me.jpg'

export function ChatMessage({ message, sender, time }){ //destructuring 

  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;  
  /*
  if(sender === 'robot'){
    return(
      <div>
        <img src="robot.png" width="50"/>
        {message}
      </div>
    );
  }
  */

  return(
    <div className={
      sender === 'user' 
        ? 'chat-message-user' 
        : 'chat-message-robot'
    }>
      {sender === 'robot' && (
        <img src={RobotProfileImage}
        className="chat-message-profile"
        />
      )}
      <div className="chat-message-text">
        {message}
        {time && (
          <div className='chat-message-time'>
            {dayjs(time).format('h:mma')}
          </div>
        )}
      </div>
      {sender === 'user' && (
        <img src={MyProfileImage}
        className="chat-message-profile"
        />
      )}
    </div>
  );
}