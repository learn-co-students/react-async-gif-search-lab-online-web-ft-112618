import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

const URLFirst = 'http://api.giphy.com/v1/gifs/search?q='
const URLLast =  '&api_key=dc6zaTOxFJmzC&rating=g&limit=3'

export default class GifListContainer extends Component {
  state = {
    gifs: []
  }

  fetchGIFS = (e) => {
    fetch(URLFirst + e + URLLast)
    .then(response => response.json())
    .then(resp => this.setState({ gifs: resp.data }))
  }

  render() {
    return(
      <div>
        <GifSearch fetchGIFS={this.fetchGIFS}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}
