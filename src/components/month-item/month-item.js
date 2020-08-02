import React from 'react'
import styled, {css} from 'styled-components'

const ListItem = styled.div `
  list-style: none;
  border: 0px solid black;
  padding: 10px 15px;
  border-radius: 6px;
  margin-top: 5px;
  cursor: pointer;
  transition: all .5s;
  background-color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
  text-transform: uppercase;
  &:hover {${props => 
        ((props.numberOfUsers > 10) && css `background-color: #FF4B4B;`) ||
        ((props.numberOfUsers > 6) && css `background-color: #9FFFB7;`) ||
        ((props.numberOfUsers > 2) && css `background-color: #9AD2FF;`) ||
        (css `background-color: #CCCCCC;`)
   }}
`
const MonthItem = ({month, ShowUsers, numberOfUsers }) => {

  return <ListItem
            onMouseEnter={ ShowUsers }
            numberOfUsers={ numberOfUsers }
          >
            { month }
         </ListItem>
}

export default MonthItem;