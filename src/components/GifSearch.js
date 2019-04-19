import React, { Component } from 'react'


export default class GifSearch extends Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchGIFS(this.state.search)
  }

  handleChange = (e) => {
    this.setState({search: e.target.value})
  }

  render() {

    return(
      <div style={{textAlign: 'right'}}>
        <form onSubmit={this.handleSubmit}>
        <p>Enter a Search Term:</p>
        <input type='text' onChange={this.handleChange} value={this.state.search} /><br/>
        <input type='submit' value='Find Gifs'/>
        </form>
      </div>

    )
  }
}
