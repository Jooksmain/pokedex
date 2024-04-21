import '../App.css'
import { PokeList, DetailView, Pokemon } from '../components'
import React, { Component } from 'react'


class Home extends Component {
    constructor() {
      super()
      this.state = {
        pokemon: {
          id: 1,
          name: "bulbasaur",
          height: 7,
          weight: 69,
          type: "grass",
          abilities: ["overgrow, ", "chlorophyll"],
          sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        }
      }
  
      this.handleOnClick = this.handleOnClick.bind(this)
    }
  
    handleOnClick(id) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data => {
          const pokemon = new Pokemon(data);
          this.setState({ pokemon });
        })
        .catch(err => console.log(err));
    }
  
    render() {
      return (
        <div className="App">
          <PokeList handleOnClick={this.handleOnClick} />
          <DetailView pokemon={this.state.pokemon}/>
        </div>
      );
    }
  };

export default Home;