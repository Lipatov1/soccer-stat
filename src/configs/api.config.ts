export const API_URL = `${process.env.REACT_APP_API_URL}/v2`
export const TOKEN = process.env.REACT_APP_TOKEN

export const getLeaguesUrl = () => `/competitions`
export const getMatchesLeagueUrl = (string: string) => `competitions/${string}/matches`
export const getTeamsUrl = () => `/teams`
export const getMatchesTeamUrl = (string: string) => `teams/${string}/matches`
export const getTeamUrl = (string: string) => `teams/${string}`
