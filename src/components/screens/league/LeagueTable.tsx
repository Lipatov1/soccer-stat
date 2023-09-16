import React, {FC} from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {IMatch, IMatches} from "../../../shared/types/league.types";
import {ILeagueItem} from "../leagues/leagues.interface";
import {extractDateFromDateTime, extractTimeFromDateTime} from "../../../utils/date/convertDate";

interface DataType {
    key: number;
    date: string;
    time: string;
    status: string;
    homeTeam: string;
    awayTeam: string;
    score: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Дата',
        dataIndex: 'date',
        key: 'date',
        align: "center"
    },
    {
        title: 'Время',
        dataIndex: 'time',
        key: 'time',
        align: "center"
    },
    {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
        align: "center"
    },
    {
        title: 'Домашняя команда',
        dataIndex: 'homeTeam',
        key: 'homeTeam',
        align: "center"
    },
    {
        title: 'Гостевая команда',
        dataIndex: 'awayTeam',
        key: 'awayTeam',
        align: "center"
    },
    {
        title: 'Счёт',
        dataIndex: 'score',
        key: 'score',
        align: "center"
    },
];

// const data: DataType[] = [
//     {
//         key: 1,
//         date: "20.07.2021",
//         time: "22:42",
//         status: 'string',
//         homeTeam: 'string',
//         awayTeam: 'string',
//         score: 'string'
//     },
// ];

interface ILeagueTable {
    matches: IMatch[]
}

const LeagueTable: FC<ILeagueTable> = ({matches}) => {
    const data = matches.map(
        (match): DataType => ({
            key: match.id,
            date: extractDateFromDateTime(match.utcDate),
            time: extractTimeFromDateTime(match.utcDate),
            status: match.status,
            homeTeam: match.homeTeam.name,
            awayTeam: match.awayTeam.name,
            score: '0:0'
        })
    )

    return (
        <Table
            bordered={true}
            columns={columns}
            dataSource={data}
            pagination={{
                position: ['bottomCenter'],
                showSizeChanger: false
            }}
        />
    );
};

export default LeagueTable;
