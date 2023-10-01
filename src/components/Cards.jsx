import PropTypes from 'prop-types'
import icoWind from './../assets/images/wind.svg'
import icoHumidity from './../assets/images/humidity.svg'

function Cards({ current }) {
  return (
    <div className="data__cards">
      <div className="card">
        <div className="ico">
          <img src={icoWind} alt="Wind" />
        </div>
        <div className="title">Wind</div>
        <div className="cant">{current.wind_kph}km/h</div>
      </div>
      <div className="card">
        <div className="ico">
          <img src={icoHumidity} alt="Humidity" />
        </div>
        <div className="title">Humidity</div>
        <div className="cant">{current.humidity}%</div>
      </div>
    </div>
  )
}

export default Cards

Cards.propTypes = {
  current: PropTypes.shape({
    wind_kph: PropTypes.number,
    humidity: PropTypes.number
  })
}