import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi',
  }
  handleSubmit = event =>{
    event.preventDefault();
    console.log(this.input.value, ' submit');
  }
  handleInputChange = event =>{
    this.setState({
      value: event.target.value.replace(' ','-')
    });
  }
  setInputRef = element =>{
    this.input = element;
  }
  render(){
    return (
      <Search
        setRef={ this.setInputRef }
        handleSubmit = { this.handleSubmit }
        handleChange = { this.handleInputChange }
        value={ this.state.value }
      />
    )
  }
}

export default SearchContainer;
