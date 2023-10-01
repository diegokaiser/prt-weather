export default function useGetDayName(dateStr = new Date(), locale = 'en-US') {
  return dateStr.toLocaleDateString(locale, {weekday: 'long'})
}