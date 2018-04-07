import React from 'react'
import CityTile from './CityTile'



const CityList = (props) => {

  const makeTiles = () => {
    const cityArray = []
    for (let elem in props.cities){
      props.cities[elem].currentObs.display_location ? cityArray.push(<CityTile name={props.cities[elem].currentObs.display_location.city} details={props.cities[elem]}/>) : null
    }
    return cityArray
    console.log(cityArray);
  }

  return(
    <div>
      {makeTiles()}
      {/* <div>{props.cities.San_Francisco.display_location ? props.cities.San_Francisco.display_location.city : null}</div> */}
    </div>
  )
}

export default CityList
