import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {TextField, Button} from '@material-ui/core'
import {spacing} from '@material-ui/system'
import {auth} from '../store'
// import Home from './Home'

/**
 * COMPONENT
 */
export const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props
  console.log('this.props', props)
  return (
    <div className="auth">
      <form onSubmit={handleSubmit} name={name}>
        <div className="authInput">
          <label htmlFor="email">
            <small style={{padding: '10px'}}>Email</small>
          </label>
          <TextField
            name="email"
            type="text"
            id="filled-secondary"
            variant="filled"
            color="secondary"
          />
        </div>
        <div className="authInput">
          <label htmlFor="password">
            <small style={{padding: '10px'}}>Password</small>
          </label>
          <TextField
            name="password"
            type="password"
            id="filled-secondary"
            variant="filled"
            color="secondary"
          />
        </div>
        <div className="authInput">
          <Button
            id="button"
            type="submit"
            variant="contained"
            color="secondary"
          >
            {displayName}
          </Button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      {/* <a href="/auth/google">{displayName} with Google</a> */}
      {/* <div><Home /></div> */}
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */

AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
// console.log('AuthForm.proptypes = ', AuthForm.propTypes);
