import useGetDate from "../hooks/useGetDate"

function ThisDate() {
  const { date, days, months } = useGetDate()
  const todayIs = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`
  
  return (
    <div className="date">{todayIs}</div>
  )
}

export default ThisDate