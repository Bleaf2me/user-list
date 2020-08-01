import React from "react";
import UserItem from '../user-item'
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
        <ul className="list-groupt">
           { el }
        </ul>
      )
}

export default UserList;
