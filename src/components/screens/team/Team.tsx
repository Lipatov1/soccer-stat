import Breadcrumb from '../../ui/breadcrumb/Breadcrumb'
import Spinner from '../../ui/spinner/Spinner'
import Table from '../../ui/table/Table'
import Error from '../../ui/error/Error'
import { useTeam } from './useTeam'
import { DatePicker } from 'antd'
import { FC } from 'react'

const Team: FC = () => {
  const { handleDatePicker, teamName, isLoading, data, isError, dates } = useTeam()

  if (isError) {
    return <Error text="Ошибка загрузки данных :(" />
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Breadcrumb backLink="/teams" backName="Команды" currentName={teamName} />
      <DatePicker.RangePicker
        value={dates}
        onChange={handleDatePicker}
        style={{ marginBottom: 20 }}
        disabled={isLoading}
      />
      <Table matches={data?.matches} />
    </>
  )
}

export default Team
