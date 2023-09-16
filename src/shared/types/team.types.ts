import {IArea} from "./league.types";

export interface ITeam {
    id: number,
    area: IArea,
    name: string
    shortName: string
    tla: string
    crestUrl: string
    address: string
    phone: string
    website: string
    email: string
    founded: number,
    clubColors: string
    venue: string
    lastUpdated: string
}

export interface ITeams {
    count: number
    filters: any
    teams: ITeam[]
}
