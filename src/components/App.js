import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import CityList from './CityList'
import Form from './Form.js'

const URL = "http://api.wunderground.com/api/7eeca4319ae4a26d/conditions/q/"
const ENDPOINT = ".json"

class App extends Component {

  state = {
    cities: {San_Francisco: {
      slug: "CA/San_Francisco",
      currentObs: {}
    }},
    searchTerm: ''
  }

  fetchData() {
    for (let currentCity in this.state.cities) {
      this.firstFetch(currentCity)
      console.log(currentCity);
    }
  }

  firstFetch = (currentCity) => {
    fetch(`${URL}${this.state.cities[currentCity].slug}${ENDPOINT}`)
    .then(res => res.json())
    .then(json => {
      let city = json.current_observation.display_location.city.replace(" ", "_")
      this.setState({
        cities: {
          ...this.state.cities,
          [city]: {...this.state.cities[city], currentObs: json.current_observation}
        }
      })
    })
  }

  componentDidMount(){
    this.fetchData()
    setInterval(() => {
      this.fetchData()
    }, 10000)
  }


  handleChange = (e) => {
    // console.log(e.target.value);
  }

  handleClick = (e) =>{
    let city = e.target.parentNode.firstChild.value.replace(" ", "_")
    let state = e.target.parentNode.children[1].value
    const slugged = `${state}/${city}`

    // setState
    this.setState({
      cities: {
        ...this.state.cities,
        [city]: {
          slug: slugged,
          currentObs: {}
        }
      }
    }, () => this.firstFetch(city))

    // fetch request
  }


  render() {
    return (
      <div className="App">
        <Form searchTerm={this.state.searchTerm} handleChange={this.handleChange} handleClick={this.handleClick}/>
        <CityList cities={this.state.cities} />
      </div>
    );
  }
}

export default App;
