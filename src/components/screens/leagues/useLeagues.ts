import { ChangeEvent, useMemo, useState } from 'react'
import { useQuery } from 'react-query'
// import { toastr } from 'react-redux-toastr'
// import { toastError } from '@/utils/api/withToastrErrorRedux'
// import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'

import {getLeaguesUrl} from "../../../configs/api.config";
import {LeagueService} from "../../../services/league/league.service";
import {useDebounce} from "../../../hooks/useDebounce";
import {ILeague} from "../../../shared/types/league.types";
import { ILeagueItem } from "./leagues.interface";

export const useLeagues = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const debouncedSearch = useDebounce(searchTerm, 500)

    const queryData = useQuery(
        ['league list', debouncedSearch],
        () => LeagueService.getAll(debouncedSearch),
        {
            select: ({ data }) =>
                data.competitions.map(
                    (league): ILeagueItem => ({
                        id: league.id,
                        name: league.name,
                        country: league.area.name,
                    })
                ),
            onError(error) {
                // toastError(error, 'genre list')
                console.info(error)
            },
        }
    )

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    return useMemo(
        () => ({
            handleSearch,
            ...queryData,
            searchTerm,
        }),
        [queryData, searchTerm]
    )
}
