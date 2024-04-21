
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home.js"
import About from "./containers/About.js"
import Layout from "./containers/Layout.js"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokedex" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/*
class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemon: {
      id: 1,
      name: "bulbasaur",
      height: 7,
      weight: 69,
      type: "grass, poison",
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
}

export default App;
*/