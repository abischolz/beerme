import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Login, Signup} from './AuthForm'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="nav">
    <h4>beerMe</h4>

    <nav>
      {isLoggedIn ? (
        <div className="navLinks">
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <Link
            to="/breweries"
            style={{padding: '15px', textDecoration: 'none'}}
          >
            Breweries
          </Link>
          <Link to="/beers" style={{padding: '15px', textDecoration: 'none'}}>
            Beers
          </Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          {/* <Link to="/login" style={{ padding: '15px', textDecoration: 'none' }}>Login</Link> */}
          <Login />
          <Link
            to="/breweries"
            style={{padding: '15px', textDecoration: 'none'}}
          >
            Breweries
          </Link>
          <Link to="/beers" style={{padding: '15px', textDecoration: 'none'}}>
            Beers
          </Link>
          <Link to="/signup" style={{padding: '15px', textDecoration: 'none'}}>
            Sign Up
          </Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  console.log('rendering app')
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

// AuthForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   displayName: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   error: PropTypes.object
// }
