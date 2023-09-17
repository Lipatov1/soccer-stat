import { ColumnsType } from 'antd/es/table';
import { DataType } from './table.types';

export const columns: ColumnsType<DataType> = [
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
