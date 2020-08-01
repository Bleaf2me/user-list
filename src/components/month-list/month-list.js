import React from 'react'
import MonthItem from '../month-item'
import styled from 'styled-components'
  
const MonthListWrapper = styled.div `
  display: flex;
  justify-content: space-between;
  width: 80%;
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