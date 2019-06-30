import React from 'react'

class GifSearch extends React.Component {
  constructor() {
    super()

    this.state = {
      search: ""
    }
  }

  onChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state.search)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" name="search" onChange={this.onChange}/>
        <input type="submit" />
      </form>
    )
  }
}

export default GifSearch
