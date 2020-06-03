import React from 'react';
import './ChatDisplay.css';
import Participant from './../Participant/Participant.js'

const ChatDisplay = React.forwardRef(({ messages, group, userTwo }, ref) => {
  const displayMessages = () => {
    return messages.map(message => {
      const isMe = userTwo !== message.sender_name ? 'user-one' : 'user-two'
      return (
        <li className={`message ${isMe}`} key={message.id}>
          <div>
            {message.sender_name}
          </div>
          <p className='text'>
            {message.message}
          </p>
        </li>
      )
    })
  }

  return (
    <section className="ChatDisplay">
      { !userTwo && <Participant group={ group } waiting={ true } /> }
      { userTwo && <Participant group={ group } userTwo={ userTwo } waiting={ false } /> }
      { userTwo && <ul> {displayMessages()} </ul> }
      <div className='empty-space' ref={ref} />
    </section>
  );
})

export default ChatDisplay;
