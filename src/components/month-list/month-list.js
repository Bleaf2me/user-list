import React from 'react'
import MonthItem from '../month-item'
import styled from 'styled-components'
  
const MonthListWrapper = styled.div `
  justify-content: space-between;
  width: 20%;
  text-align: center;
  margin-top: 40px;
`
const MonthList = ({ monthList, ShowUsers, numberOfUsers }) => {
  
  const el = monthList.map(({id, name}) => {
    return <MonthItem
             id={id}
             key={id}
             month={name}
             ShowUsers={() => ShowUsers(id)}
             numberOfUsers={ numberOfUsers }
            />
  })

  return ( <MonthListWrapper>
           { el }
        </MonthListWrapper>)
}

export default MonthList;