import Breadcrumb from '../../ui/breadcrumb/Breadcrumb'
import Spinner from '../../ui/spinner/Spinner'
import Table from '../../ui/table/Table'
import Error from '../../ui/error/Error'
import { useTeam } from './useTeam'
import { DatePicker } from 'antd'
import { FC } from 'react'

const Team: FC = () => {
  const { handleDatePicker, teamName, isLoading, data, isError } = useTeam()

  if (isError) {
    return <Error text="Ошибка загрузки данных :(" />
  }

  return (
    <>
      <Breadcrumb backLink="/teams" backName="Команды" currentName={teamName} />
      <DatePicker.RangePicker
        onChange={handleDatePicker}
        style={{ marginBottom: 20 }}
        disabled={isLoading}
      />
      {isLoading ? <Spinner /> : <Table matches={data?.matches} />}
    </>
  )
}

export default Team
