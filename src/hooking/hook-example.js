import React, { useState, useEffect } from 'react';
const ChatAPI = null

function useFriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(null)

  function handleStatusChange(status) {
    setIsOnline(status.isOnline)
  }
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange)
    return (() => {
      ChatAPI.unsubscribeToFriendStatus(friendId, handleStatusChange)
    })
  })

  return isOnline
}
// useFriendStatus is custom hook


function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id)
  if (isOnline == null) {
    return 'Loadding ...'
  }
  return isOnline ? 'On' : 'Off';

}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id)

  return (
    <li style={{ color: isOnline ? 'green' : 'grey' }}>{props.friend.name}</li>
  )
}

