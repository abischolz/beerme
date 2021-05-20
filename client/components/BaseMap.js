import React from 'react'
import mapboxgl from 'mapbox-gl'

export default class Map extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      lng: -70.9,
      lat: 42.35,
      zoom: 9
    }
    this.mapContainer = React.createRef()
  }
  componentDidMount() {
    const {lng, lat, zoom} = this.state
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
      zoom: 12, // starting zoom
      style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
    })
    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    })
  }
  render() {
    console.log('rendering map')
    const {lng, lat, zoom} = this.state
    return (
      <div>
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={this.mapContainer} className="map-container" />
      </div>
    )
  }
}
