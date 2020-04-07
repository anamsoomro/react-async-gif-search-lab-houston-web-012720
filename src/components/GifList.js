import React from 'react'

export default class GifList extends React.Component {

  showImage = (image) => {
    return(
      <li>
        <img src={image.images.original.url} alt="whoops" />
      </li>
    )
  }

  render(){
    return (
      <ul>
        {this.props.gifs.map( gif => this.showImage(gif))}
      </ul>
    )
  }
  
}

