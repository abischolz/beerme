import axios from 'axios'
//ACTION CONSTANTS

const SET_FILTER = 'SET_FILTER'
//ACTION CREATORS

const setFilter = filter => ({type: SET_FILTER, filter})

//THUNKS?

export const filterAPI = () => async dispatch => {
  try {
    const res = await axios.get('https://api.openbrewerydb.org/breweries?')
  } catch (err) {
    console.error(err)
  }
}

//REDUCER
const initialState = ''

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state
  }
}
