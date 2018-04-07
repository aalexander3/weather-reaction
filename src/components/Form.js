import React from 'react'

const Form = (props) => {

  const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]

  return(
    <div className="navbar">
      <div className="form">
        <input onChange={props.handleChange} type="text" placeholder="city"/>
        <select>
          {states.map(state => <option value={state}>{state}</option>)}
        </select>
        <button onClick={props.handleClick}>Submit</button>
      </div>
    </div>
  )
}

export default Form
