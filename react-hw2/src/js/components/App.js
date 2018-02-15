import React from 'react';
import List from './List';
import AddUser from './AddUser';
import FilterUsers from './FilterUsers';

const App = () => (
  <div>
    <AddUser id="add-user"/>
    <FilterUsers className="filter-users"/>
    <div>
      <h2>Users</h2>
      <List/>
    </div>
  </div>
);

export default App;