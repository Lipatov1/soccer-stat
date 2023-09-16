import { getLeaguesUrl, getLeagueUrl } from '../../configs/api.config';
import { ILeagues, IMatches } from '../../shared/types/league.types';
import { $axios } from '../../api'

export const LeagueService = {
    async getAll() {
        return $axios.get<ILeagues>(getLeaguesUrl())
    },

    async getById(id: string) {
        return $axios.get<IMatches>(getLeagueUrl(id))
    }
}
