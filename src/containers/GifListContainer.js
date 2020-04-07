import React from "react"
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

export default class GifListContainer extends React.Component {

  constructor(){
    super() 
    this.state = {
      results: [],
    }
  }

  handleSearch = (e, query) => {
    e.preventDefault()
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(searchResults => {
      this.setState({
        results: searchResults.data.slice(0,3)
      })
    })
  }
  
  render(){
    return (
        <div> 
          <GifSearch handleSearch={this.handleSearch}/>
          <GifList gifs={this.state.results}/>
        </div>
    )
  }


}