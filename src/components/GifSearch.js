import React, { Component } from 'react'

export default class GifSearch extends Component {
  state = { query: '' }

  handleChange = (e) => this.setState({ query: e.target.value })
  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" id="search" onChange={this.handleChange} value={this.state.query} placeholder="Type your search here..."></input>
      </form>
    )
  }
}
