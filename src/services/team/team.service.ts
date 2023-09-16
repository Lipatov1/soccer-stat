import { getTeamsUrl } from '../../configs/api.config';
import { ITeams } from '../../shared/types/team.types';
import { $axios } from '../../api'

export const TeamService = {
    async getAll() {
        return $axios.get<ITeams>(getTeamsUrl())
    },

    // async getById(id: string) {
    //     return $axios.get<IMatches>(getLeagueUrl(id))
    // }
}
