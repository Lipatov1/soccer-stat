import { getDatesFromDataPicker } from '../../../utils/date/convertDate';
import { TeamService } from '../../../services/team/team.service';
import { useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { Dayjs } from 'dayjs';

declare type EventValue<DateType> = DateType | null;
declare type RangeValue<DateType> = [EventValue<DateType>, EventValue<DateType>] | null;

export const useTeam = () => {
    const [dates, setDates] = useState<string[]>([])
    const { id } = useParams()

    const queryData = useQuery(
        ['get matches team', [id, dates]],
        () => TeamService.getMatchesById(`${id}`, dates),
        {
            select: ({ data }) => data
        }
    )

    const {data: teamName} = useQuery(
        ['get team', id],
        () => TeamService.getById(`${id}`),
        {
            select: ({ data }) => data.name
        }
    )

    const handleDatePicker = (value: RangeValue<Dayjs>) => {
        setDates(getDatesFromDataPicker(value))
    }

    return useMemo(
        () => ({
            handleDatePicker,
            ...queryData,
            teamName
        }),
        [handleDatePicker, queryData, teamName]
    )
}
