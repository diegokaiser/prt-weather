import PropTypes from 'prop-types'
import useSwitcher from '../hooks/useSwitcher'
import useGetDayName from '../hooks/useGetDayName'

function Week({ forecast }) {
  const arrDays = []
  const arrConditionText = []
  const week = [...forecast.forecastday]
  week.shift()
  for (let i = 0; i < week.length; i++) {
    arrDays.push(useGetDayName(new Date(week[i].date)))
  }
  let today = arrDays[0]
  arrDays.shift()
  arrDays.splice(arrDays.length, 1, today)
  arrDays[0] = "Tomorrow"

  for (let i = 0; i < week.length; i++) {
    const switcher = useSwitcher(week[i].day.condition.text)
    arrConditionText.push(switcher)
  }

  return (
    <div className="data__week">
      <div className="week">
        {week.map((item, index) => (
          <div key={index} className="week__item">
            <div className="item__day">
              {arrDays[index]}
            </div>
            <div className="item__temp">
              <p>
                {item.day.avgtemp_c}
              </p>
              <sup>&deg;</sup>
            </div>
            <div className="item__ico">
              <img src={arrConditionText[index]} alt={item.day.condition.text} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Week

Week.propTypes = {
  forecast: PropTypes.shape({
    forecastday: PropTypes.arrayOf(
      PropTypes.shape({
        Hour: PropTypes.arrayOf(
          PropTypes.shape({
            time: PropTypes.number,
            temp_c: PropTypes.number,
            condition: PropTypes.shape({
              text: PropTypes.string
            }),
          })
        ),
        day: PropTypes.shape({
          condition: PropTypes.shape({
            text: PropTypes.string
          }),
        }),
        date: PropTypes.string
      })
    )
  })
}