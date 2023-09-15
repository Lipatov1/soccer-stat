import {getLeaguesUrl, getLeagueUrl} from '../../configs/api.config';
import { $axios } from '../../api'
import {ILeagues, IMatches} from "../../shared/types/league.types";

export const LeagueService = {
    async getAll(searchTerm?: string) {
        return $axios.get<ILeagues>(getLeaguesUrl(``), {
            params: searchTerm
                ? {
                    searchTerm,
                }
                : {},
        })
    },

    async getById(id: string) {
        return $axios.get<IMatches>(getLeagueUrl(id))
    },
}
