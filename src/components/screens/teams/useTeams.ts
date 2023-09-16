import { TeamService } from '../../../services/team/team.service';
import { useDebounce } from '../../../hooks/useDebounce';
import { ChangeEvent, useMemo, useState } from 'react'
import { ITeamItem } from './teams.interface';
import { useQuery } from 'react-query'
// import { toastError } from '@/utils/api/withToastrErrorRedux'
// import { toastr } from 'react-redux-toastr'

export const useTeams = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const debouncedSearch = useDebounce(searchTerm, 500)

    const queryData = useQuery(
        ['teams list'],
        () => TeamService.getAll(),
        {
            select: ({ data }) =>
                data.teams.map(
                    (team): ITeamItem => ({
                        id: team.id,
                        name: team.name,
                        cover: team.crestUrl,
                    })
                ),
            onError(error) {
                // toastError(error, 'league list')
            },
        }
    )

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const filteredData = queryData?.data?.filter(data => data.name.toLowerCase().includes(debouncedSearch))

    return useMemo(
        () => ({
            handleSearch,
            ...queryData,
            searchTerm,
            filteredData
        }),
        [queryData, searchTerm, filteredData]
    )
}
