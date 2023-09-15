import {FC} from 'react';
import {Breadcrumb, DatePicker} from "antd";
import {Link, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {LeagueService} from "../../../services/league/league.service";
import LeagueTable from "./LeagueTable";
import {ILeagueItem} from "../leagues/leagues.interface";

const League: FC = () => {
    const { id } = useParams()

    const {
        data,
        isSuccess,
        isLoading
    } = useQuery(
        ['get league', id],
        () => LeagueService.getById(`${id}`),
        {
            select: ({ data }) => data,
            onError(error) {
                // toastError(error, 'genre list')
                console.info(error)
            },
        }
    )

    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>
                    <Link to="/leagues">Лиги</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{data?.competition.name}</Breadcrumb.Item>
            </Breadcrumb>
            <DatePicker.RangePicker />
            {data?.matches && <LeagueTable matches={data.matches} />}
        </div>
    );
};

export default League;
