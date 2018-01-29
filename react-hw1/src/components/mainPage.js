import React, { Component } from 'react';
import Header from './common/header';
import PageContent from '../containers/pageContent/pageContent';
import List from './list/list';
import AddUser from './addUser/addUser';

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      id: 1
    };
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  addUser(user) {
    const { users } = this.state;
    this.setState({
      users: [...users, user],
      id: ++this.state.id
    });
  }

  deleteUser(user) {
    const users = this.state.users,
      indexOfUser = users.find(item => {
        return item.id === user.id;
      }).id;
    users.splice(indexOfUser - 1, 1);
    this.setState({
      users
    });
  }

  render() {
    const { users, id } = this.state;
    return (
      <div>
        <Header module={'Main Page'}/>
        <PageContent>
          <AddUser id={id} addItem={this.addUser}/>
          <List users={users} deleteItem={this.deleteUser}/>
        </PageContent>
      </div>
    )
  }
}

export default MainPage;