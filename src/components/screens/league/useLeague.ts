import { getDatesFromDataPicker } from '../../../utils/date/convertDate'
import { LeagueService } from '../../../services/league/league.service'
import { useParams } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { Dayjs } from 'dayjs'

declare type EventValue<DateType> = DateType | null
declare type RangeValue<DateType> = [EventValue<DateType>, EventValue<DateType>] | null

export const useLeague = () => {
  const [dates, setDates] = useState<string[]>([])
  const { id } = useParams()

  const queryData = useQuery(
    ['get matches league', [id, dates]],
    () => LeagueService.getMatchesById(`${id}`, dates),
    {
      select: ({ data }) => data,
    }
  )

  const handleDatePicker = (value: RangeValue<Dayjs>) => {
    setDates(getDatesFromDataPicker(value))
  }

  return useMemo(
    () => ({
      handleDatePicker,
      ...queryData,
    }),
    [handleDatePicker, queryData]
  )
}
