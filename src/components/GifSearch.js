import React from 'react'

export default class GifSearch extends React.Component {

  constructor(){
    super()
    this.state = {
      query: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render(){
    return (
      <form onSubmit={ (e) => this.props.handleSearch(e, this.state.query)}>
        <input type="text" onChange={this.handleChange}/>
      </form>
    )
  }

}

