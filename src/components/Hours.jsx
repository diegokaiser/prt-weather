import PropTypes from 'prop-types'
import useSwitcher from '../hooks/useSwitcher'

function Hours({ forecast }) {
  const arrConditionText = []
  const arrHours = []
  const today = forecast.forecastday[0]
  for (let i = 0; i < today.hour.length; i++) {
    const switcher = useSwitcher(today.hour[i].condition.text)
    arrConditionText.push(switcher)
  }
  for (let i = 0; i < today.hour.length; i++) {
    let arr = today.hour[i].time.split(/(\s+)/)
    arr.shift()
    arr.shift()
    arrHours.push(arr)
  }
  return (
    <div className="data__hours">
      <div className="hours">
        {today.hour.map((item, index) => (
          <div key={item.time_epoch} className="hours__hour">
            <div className="hours__now">
              {arrHours[index]}
            </div>
            <div className="hours__ico">
              <img src={arrConditionText[index]} alt={item.condition.text} />
            </div>
            <div className="hours__temp">
              <p>
                {item.temp_c}
              </p>
              <sup>&deg;</sup>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hours

Hours.propTypes = {
  forecast: PropTypes.shape({
    forecastday: PropTypes.arrayOf(
      PropTypes.shape({
        hour: PropTypes.arrayOf(
          PropTypes.shape({
            time: PropTypes.string,
            time_epoch: PropTypes.number,
            temp_c: PropTypes.number,
            condition: PropTypes.shape({
              text: PropTypes.string
            }),
          })
        ),
      })
    )
  })
}