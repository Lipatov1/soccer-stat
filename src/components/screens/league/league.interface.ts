export interface ILeagueItem {
    id: number
    name: string
    country: string
}

export interface IMatchesTable {
    id: number
    name: string
    country: string
}

export interface DataType {
    key: number;
    date: string;
    time: string;
    status: string;
    homeTeam: string;
    awayTeam: string;
    score: string;
}
