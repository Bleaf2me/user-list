import React from 'react';

const UserItem = ({ lastName, id, firstName, dob }) => {
  return (
    <>
    <div>{firstName}</div>
    <div>{lastName}</div>
    <div>{dob}</div>
    </>)
}
export default UserItem;