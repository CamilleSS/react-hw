import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterUsers } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    filterUsers: query => dispatch(filterUsers(query))
  };
};

class ConnectedFilterUsers extends Component {
  constructor() {
    super();
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter() {
    this.props.filterUsers(this.refs.query.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" ref="query" onChange={this.handleFilter}/>
          </label>
      </form>
    );
  }
}

const FilterUsers = connect(null, mapDispatchToProps)(ConnectedFilterUsers);

export default FilterUsers;