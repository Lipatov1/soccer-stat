import { getTeamsUrl, getMatchesTeamUrl, getTeamUrl } from '../../configs/api.config'
import { ITeam, ITeams } from '../../shared/types/team.types'
import { IMatches } from '../../shared/types/league.types'
import { $axios } from '../../api'

export const TeamService = {
  async getAll() {
    return $axios.get<ITeams>(getTeamsUrl())
  },

  async getById(id: string) {
    return $axios.get<ITeam>(getTeamUrl(id))
  },

  async getMatchesById(id: string, dates?: string[]) {
    return $axios.get<IMatches>(getMatchesTeamUrl(id), {
      params: dates
        ? {
            dateFrom: dates[0],
            dateTo: dates[1],
          }
        : {},
    })
  },
}
