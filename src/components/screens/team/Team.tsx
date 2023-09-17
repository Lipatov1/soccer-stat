import Breadcrumb from '../../ui/breadcrumb/Breadcrumb';
import Spinner from '../../ui/spinner/Spinner';
import Table from '../../ui/table/Table';
import { useTeam } from './useTeam';
import { DatePicker } from 'antd';
import { FC } from 'react';

const Team: FC = () => {
    const {
        handleDatePicker,
        teamName,
        isLoading,
        data
    } = useTeam()

    return (
        <>
            <Breadcrumb backLink='/teams' backName='Команды' currentName={teamName} />
            <DatePicker.RangePicker onChange={handleDatePicker} />
            {isLoading ? <Spinner /> : <Table matches={data?.matches} />}
        </>
    );
};

export default Team;
