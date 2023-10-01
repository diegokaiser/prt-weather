import PropTypes from 'prop-types'

function Location({ location }) {
  return (
    <div className="location">
      <h3>{location.name},</h3>
      <h3>{location.country}</h3>
    </div>
  )
}

export default Location

Location.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string
  })
}