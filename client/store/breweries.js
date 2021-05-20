import axios from 'axios'
// initial value
const defaultBreweries = []

//ACTION CONSTANTS

const GET_BREWERIES = 'GET_BREWERIES'

//ACTION CREATORS

const getBreweries = breweries => ({
  type: GET_BREWERIES,
  breweries
})

// thunk

export const fetchBreweries = () => {
  return async dispatch => {
    try {
      await fetch('https://api.openbrewerydb.org/breweries?per_page=50')
        .then(res => res.json())
        .then(result => {
          dispatch(getBreweries(result))
        })
    } catch (err) {
      console.log(err)
    }
  }
}

// reducer

export default function breweriesReducer(state = defaultBreweries, action) {
  switch (action.type) {
    case GET_BREWERIES:
      return action.breweries
    default:
      return state
  }
}
