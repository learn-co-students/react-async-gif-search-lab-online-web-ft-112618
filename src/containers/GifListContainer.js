import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  state = { gifs: [] };

  componentDidMount() {
    this.fetchGifs('kittens')
  }

  fetchGifs = (query) => {
    let uri = 'http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=dc6zaTOxFJmzC&rating=g'
    fetch(uri).then(resp => resp.json()).then(json => {
      let array = json.data
      this.setState({
        gifs: [array[0].images.original.url, array[1].images.original.url, array[2].images.original.url]
        })
      }
    )
  }

  render() {
    return(
      <div>
        <GifSearch fetchGifs={this.fetchGifs}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
