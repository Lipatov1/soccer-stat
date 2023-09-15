export const API_URL = `${process.env.REACT_APP_API_URL}/v2`

export const getLeaguesUrl = (string: string) => `/competitions${string}`
export const getLeagueUrl = (string: string) => `competitions/${string}/matches`
export const getTeamsUrl = (string: string) => `/teams${string}`
