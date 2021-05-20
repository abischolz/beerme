import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import BaseMap from './BaseMap'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWJpc2Nob2x6IiwiYSI6ImNrbWFzMTNyNTF1djYzMHBtZ3U1OWhqMGoifQ.by1h0frznon6es0CnFqP6A'

/**
 * COMPONENT
 */
export const Home = props => {
  const {email} = props

  return (
    <div>
      <div>
        <h3>Welcome, {email}</h3>
      </div>
      <div>
        <div>i'm home</div>
        <BaseMap />
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(Home)

/**
 * PROP TYPES
 */
Home.propTypes = {
  email: PropTypes.string
}
