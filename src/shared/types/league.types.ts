import { Status } from '../../const'
import { ITeam } from './team.types'

export interface IArea {
  id: number
  name: string
  countryCode: string | null
  ensignUrl: string | null
}

export interface IWinner {
  id: number
  name: string
  shortName: string | null
  tla: string | null
  crestUrl: string | null
}

export interface ISeason {
  id: number
  startDate: string
  endDate: string
  currentMatchday: number
  winner: IWinner | null
}

export interface ILeague {
  id: number
  area: IArea
  name: string
  code: string
  emblemUrl: string | null
  plan: string
  currentSeason: ISeason
  numberOfAvailableSeasons: number
  lastUpdated: string
}

export interface ILeagues {
  count: number
  competitions: ILeague[]
}

export interface IMatchResult {
  homeTeam: number | null
  awayTeam: number | null
}

export interface IScore {
  winner: string
  duration: string
  fullTime: IMatchResult
  halfTime: IMatchResult
  extraTime: IMatchResult
  penalties: IMatchResult
}

export interface IMatch {
  id: number
  season: Omit<ISeason, 'winner'>
  utcDate: string
  status: Status
  matchday: number
  stage: string
  group: null
  lastUpdated: string
  odds: {
    msg: string
  }
  score: IScore
  homeTeam: Pick<ITeam, 'id' | 'name'>
  awayTeam: Pick<ITeam, 'id' | 'name'>
  referees: []
}

export interface IMatches {
  count: number
  competition: ILeague
  matches: IMatch[]
}
