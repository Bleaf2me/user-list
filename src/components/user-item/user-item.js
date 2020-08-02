import React from 'react';
import styled from 'styled-components'

const UserCard = styled.div `
  display: flex;
  justy
  width: 60%;
  border: 0px solid black;
  padding: 10px 15px;
  border-radius: 10px;
  margin-top: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
`

const UserItem = ({ lastName, firstName }) => {
  
  return (
    <UserCard>
      <div>{ firstName } { lastName }</div>
    </UserCard> )
}

export default UserItem;