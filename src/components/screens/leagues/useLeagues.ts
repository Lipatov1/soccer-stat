import { LeagueService } from '../../../services/league/league.service'
import { useDebounce } from '../../../hooks/useDebounce'
import { ChangeEvent, useMemo, useState } from 'react'
import { ILeagueItem } from './leagues.interface'
import { useQuery } from 'react-query'

export const useLeagues = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)

  const queryData = useQuery(['league list'], () => LeagueService.getAll(), {
    select: ({ data }) =>
      data.competitions.map(
        (league): ILeagueItem => ({
          id: league.id,
          name: league.name,
          description: league.area.name,
        })
      ),
  })

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const filteredData = queryData?.data?.filter((data) =>
    data.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  )

  return useMemo(
    () => ({
      handleSearch,
      ...queryData,
      searchTerm,
      filteredData,
    }),
    [queryData, searchTerm, filteredData]
  )
}
