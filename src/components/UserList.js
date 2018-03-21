import React, { Component } from 'react';
import axios from 'axios';

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
        Users
      </div>
    )
  }
}

export default UserList;
