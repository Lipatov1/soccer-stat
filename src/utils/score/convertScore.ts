import { IScore } from '../../shared/types/league.types'

export const convertScore = (score: IScore) => {
  let scoreFullTime = ''
  let scoreExtraTime, scorePenalties

  if (score.fullTime.homeTeam !== null && score.fullTime.awayTeam !== null) {
    scoreFullTime += `${score.fullTime.homeTeam}:${score.fullTime.awayTeam}`
  }

  if (score.extraTime.homeTeam !== null && score.extraTime.awayTeam !== null) {
    scoreExtraTime = ` (${score.extraTime.homeTeam}:${score.extraTime.awayTeam})`
    scoreFullTime += scoreExtraTime
  }

  if (score.penalties.homeTeam !== null && score.penalties.awayTeam !== null) {
    scorePenalties = ` (${score.penalties.homeTeam}:${score.penalties.awayTeam})`
    scoreFullTime += scorePenalties
  }

  return scoreFullTime
}
