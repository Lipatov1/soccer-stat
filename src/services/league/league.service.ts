import { getLeaguesUrl, getMatchesLeagueUrl } from '../../configs/api.config'
import { ILeagues, IMatches } from '../../shared/types/league.types'
import { $axios } from '../../api'

export const LeagueService = {
  async getAll() {
    return $axios.get<ILeagues>(getLeaguesUrl())
  },

  async getMatchesById(id: string, dates?: string[]) {
    return $axios.get<IMatches>(getMatchesLeagueUrl(id), {
      params: dates
        ? {
            dateFrom: dates[0],
            dateTo: dates[1],
          }
        : {},
    })
  },
}
