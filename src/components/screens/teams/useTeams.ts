import { TeamService } from '../../../services/team/team.service'
import { useDebounce } from '../../../hooks/useDebounce'
import { ChangeEvent, useMemo, useState } from 'react'
import { ITeamItem } from './teams.types'
import { useQuery } from 'react-query'

export const useTeams = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)

  const queryData = useQuery(['teams list'], () => TeamService.getAll(), {
    select: ({ data }) =>
      data.teams.map(
        (team): ITeamItem => ({
          id: team.id,
          name: team.name,
          cover: team.crestUrl,
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
