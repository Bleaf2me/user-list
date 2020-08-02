import React from "react";
import UserItem from '../user-item'
import styled from 'styled-components'

const UserWrap = styled.div `
  width: 20%;
  margin-top: 40px;
  margin-left: 80px;
`

const UserList = ({list}) => {
  const el = list.map(({ id, firstName, lastName, dob }) => {
        return (
            <UserItem
            key={ id }
            id={ id }
            firstName={ firstName }
            lastName={ lastName }
            dob={ dob } />
        )
      })

      return (
        <UserWrap>
           { el }
        </UserWrap>
      )
}

export default UserList;
