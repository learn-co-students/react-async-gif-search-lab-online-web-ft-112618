import React, { Component } from 'react'

export default class GifList extends Component {
  render() {
    return(
      <ul style={{ listStyleType: "none" }}>
        {this.props.gifs.slice(0, 3).map((url, index) => <li key={index}><img alt="result{index}" src={url} /></li>)}
      </ul>
    )
  }
}
