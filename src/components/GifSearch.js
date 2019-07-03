import React, {Component} from 'react'

class GifSearch extends Component {
  state = {
    gifQuery: ""
  }

  handlegifQueryChange = event => {
    this.setState({
      gifQuery: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.gifQuery)
  }

  render(){
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" name="gifQuery" onChange={event => this.handlegifQueryChange(event)} value={this.state.gifQuery}/>
        <button type="submit">Submit</button>
      </form>
    )
  }

}




export default GifSearch
