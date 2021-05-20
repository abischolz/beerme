import React from 'react'
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Input,
  Box,
  Button,
  Grid,
  IconButton,
  TextField
} from '@material-ui/core'
import RoomTwoToneIcon from '@material-ui/icons/RoomTwoTone'
import {borders} from '@material-ui/system'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchBreweries} from '../store/breweries'
// import { withStyles } from '@material-ui/core/styles';

class Breweries extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breweries: []
    }
  }
  componentDidMount() {
    // this.props.loadBreweries();
    // console.log('mounting')
    fetch('https://api.openbrewerydb.org/breweries?per_page=50')
      .then(res => res.json())
      .then(result => {
        console.log('result: ', result)
        this.setState({
          breweries: result
        })
      })
  }

  // handleClick(event) {
  //   event.preventDefault();
  //   this.props.
  // }
  render() {
    const breweries = this.state.breweries
    console.log('breweries,', breweries)
    return (
      <div className="pageTitle">
        <h2>Breweries</h2>
        <h4>What are you looking for?</h4>
        <div className="breweriesFilters">
          <span style={{padding: '15px', margin: '10px'}}>Show me </span>
          <FormControl style={{padding: '15px'}}>
            <InputLabel>Type</InputLabel>
            <Select>
              <MenuItem value="state">by state</MenuItem>
              <MenuItem value="zip">by zip</MenuItem>
              <MenuItem value="type">by type</MenuItem>
              <MenuItem value="name">by name</MenuItem>
            </Select>
          </FormControl>
        </div>
        {/* this section should be dependent  */}

        {/* <FormControl>
          <Input 
          id = 'outlined-basic'
          defaultValue = 'State'
          variant = 'outlined'>

          </Input>

          
        </FormControl> */}

        <Grid className="breweryContainer" container spacing={1}>
          {breweries.map(brewery => {
            return (
              <Grid
                // container item xs={12} spacing={3}
                key={brewery.id}
              >
                <Box
                  id="indivBrewery"
                  borderColor="primary.main"
                  border={2}
                  borderRadius={16}
                  boxShadow={2}
                >
                  <p style={{fontWeight: 'bold'}}>{brewery.name}</p>
                  <p>{brewery.street}</p>
                  <p>
                    {brewery.city}, {brewery.state}{' '}
                  </p>
                  <p>{brewery.postal_code}</p>

                  <IconButton
                    id="mapButton"
                    variant="outlined"
                    color="secondary"
                    size="small"
                  >
                    Add to Map
                    <RoomTwoToneIcon />
                  </IconButton>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    breweries: state.breweries
  }
}

const mapDispatch = dispatch => {
  return {
    loadBreweries: () => dispatch(fetchBreweries())
  }
}

export default connect(mapState)(Breweries)

Breweries.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
