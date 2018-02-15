import React from 'react';
import List from './List';
import Form from './Form';

const App = () => (
  <div>
    <Form/>
    <div>
      <h2>Users</h2>
      <List/>
    </div>
  </div>
);

export default App;