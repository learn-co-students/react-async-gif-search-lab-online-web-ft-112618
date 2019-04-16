import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      gifs: [],
      query: ""
    }
  }



  submitHandler = (search) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(json => this.setState({
        gifs: json.data.slice(0, 3).map(data => data.images.original.url)
      }))
  }


  render() {
    console.log(this.state.gifs)
    return (
      <div>
        < GifSearch submitHandler={this.submitHandler}/>
        < GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer
