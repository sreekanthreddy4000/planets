import {Component} from 'react'
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

class PlanetSlider extends Component {
  state = {currentIndex: 0}

  handleNext = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
    }))
  }

  handlePrevious = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
    }))
  }

  render() {
    const {planetsList} = this.props
    const {currentIndex} = this.state
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: currentIndex,
      beforeChange: (current, next) => this.setState({currentIndex: next}),
    }
    return (
      <div data-testid="planets">
        <Slider {...settings}>
          {planetsList.map(planet => (
            <PlanetItem key={planet.id} planet={planet} />
          ))}
        </Slider>
        <button onClick={this.handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button
          onClick={this.handleNext}
          disabled={currentIndex === planetsList.length - 1}
        >
          Next
        </button>
      </div>
    )
  }
}
export default PlanetSlider
