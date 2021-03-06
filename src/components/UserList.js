import React, { Component } from 'react';
import axios from 'axios';
import UserBlock from './UserBlock'

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
  axios.get('http://localhost:3001/users.json')
  .then(response => {
    console.log(response)
    this.setState({users: response.data})
  })
  .catch(error => console.log(error))
}

  render() {
    return (
      <div>
        {this.state.users.map((user) => {
          return(<UserBlock user={user} key={user.id} />)
        })}
      </div>
    );
  }
}

export default UserList;
