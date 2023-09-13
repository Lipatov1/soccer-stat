export const API_URL = `${process.env.APP_URL}/v2`

export const getLeaguesUrl = (string: string) => `/leagues${string}`
export const getTeamsUrl = (string: string) => `/teams${string}`
