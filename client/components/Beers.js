import React from 'react'

export default class Beers extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(result => {
        console.log('result, ', result)
        this.setState({
          beers: result
        })
      })
  }

  render() {
    console.log('rendering beer')
    const beers = this.state.beers
    return (
      <div>
        {beers.map(beer => {
          return <div key={beer.id}>{beer.name}</div>
        })}
      </div>
    )
  }
}
