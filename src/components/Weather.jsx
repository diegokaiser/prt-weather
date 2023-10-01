import { useQuery } from '@tanstack/react-query'
import { getForecast } from './../hooks/useFetch'
import Location from './Location'
import ThisDate from './ThisDate'
import Data from './Data'
import Cards from './Cards'
import Week from './Week'
import Hours from './Hours'

function Weather() {
  const { isLoading, data, isError, error, isFetched } = useQuery({
    queryKey: ['weather'],
    queryFn: getForecast
  })
  let content
  if (isFetched) {
    const { location, current, forecast } = data
    content = (
      <>
        <Location location={location} />
        <ThisDate />
        <Data current={current} />
        <Cards current={current} />
        <Hours forecast={forecast} />
        <Week forecast={forecast} />
      </>
    )
  }
  if (isLoading) return <div>Loading...</div>
  else if (isError) return <div>Error: {error.message}</div>
  return (
    <div className="weather">
      <div className="weather__content">
        { content }
      </div>
    </div>
  )
}

export default Weather