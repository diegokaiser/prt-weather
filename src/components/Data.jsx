import PropTypes from 'prop-types'
import useSwitcher from './../hooks/useSwitcher'

function Data({ current }) {
  const switcher = useSwitcher(current.condition.text)
  return (
    <div className="data">
      <div className="data__ico">
        <img src={switcher} alt={current.condition.text} />
      </div>
      <div className="data__deg">
        <div className="data__temp">
          <h1>{current.temp_c}</h1>
          <sup>&deg; C</sup>
        </div>
        <div className="data__status">
          {current.condition.text}
        </div>
      </div>
    </div>
  )
}

export default Data

Data.propTypes = {
  current: PropTypes.shape({
    condition: PropTypes.shape({
      text: PropTypes.string
    }),
    temp_c: PropTypes.number
  })
}