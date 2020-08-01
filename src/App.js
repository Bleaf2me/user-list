import React, { useState, useEffect } from 'react';
import UserList from './components/user-list'
import MonthList from './components/month-list'
import styled from 'styled-components'

const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

function App() {
  const [userList, setUserList] = useState([])
  const [userForShow, setUserForShow] = useState([])
  const [numberOfUsers, setNumberOfUsers] = useState()
  const monthList = [{id: 0, name: 'January'},
                     {id: 1, name: 'Fabruary'},
                     {id: 2, name: 'March'},
                     {id: 3, name: 'April'},
                     {id: 4, name: 'May'},
                     {id: 5, name: 'June'},
                     {id: 6, name: 'July'},
                     {id: 7, name: 'August'},
                     {id: 8, name: 'September'},
                     {id: 9, name: 'October'},
                     {id: 10, name: 'November'},
                     {id: 11, name: 'December'}];

  const ShowUsers = (id) => {
    const results = userList.filter(item => item.monthOfBirth === id);
    setUserForShow(results);
    setNumberOfUsers(results.length);
  }

  useEffect(() => {

    const getUserList = () =>

      fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .then((response) => response.json())
      .then((data) => {
        data.forEach(function (item) {
          const monthOfBirth = new Date(item.dob);
          item.monthOfBirth = monthOfBirth.getMonth();
        });
        setUserList(data);
      });

      getUserList();
  }, [])
  

  return (<Container>
              <MonthList
                monthList = { monthList }
                ShowUsers = { ShowUsers }
                numberOfUsers={ numberOfUsers }
               />
            <UserList list={ userForShow } />
          </Container>)
}

export default App;
