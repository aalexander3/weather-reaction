import React from 'react'

const CityTile = (props) => {

  const info = props.details.currentObs

  return (
    <div className="city-tile">
      <p>{props.name}</p>
      <p>{info.feelslike_string}</p>
      <p>{info.icon}</p>
      <p>{info.local_time_rfc822.slice(0, -9)}</p>
    </div>
  )
}

export default CityTile
