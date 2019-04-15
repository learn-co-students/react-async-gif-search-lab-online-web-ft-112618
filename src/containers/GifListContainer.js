import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  state = { gifs: [], query: 'dogs' };

  componentDidMount() {
    let uri = 'http://api.giphy.com/v1/gifs/search?q=' + this.state.query + '&api_key=dc6zaTOxFJmzC&rating=g'
    fetch(uri).then(resp => resp.json()).then(json => {
        let array = json.data
        for (let gif of array) {
          this.setState({
            gifs: [...this.state.gifs, gif.images.original.url]
          })
        }
      }
    )
  }

  handleSubmit() {

  }

  render() {
    return(
      <div>
        <GifSearch handleSubmit={this.handleSubmit}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
