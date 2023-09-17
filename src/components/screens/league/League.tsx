import Breadcrumb from '../../ui/breadcrumb/Breadcrumb'
import Spinner from '../../ui/spinner/Spinner'
import Error from '../../ui/error/Error'
import Table from '../../ui/table/Table'
import { useLeague } from './useLeague'
import { DatePicker } from 'antd'
import { FC } from 'react'

const League: FC = () => {
  const { handleDatePicker, isLoading, data, isError } = useLeague()

  if (isError) {
    return <Error text="Ошибка загрузки данных :(" />
  }

  return (
    <>
      <Breadcrumb backLink="/leagues" backName="Лиги" currentName={data?.competition.name} />
      <DatePicker.RangePicker
        onChange={handleDatePicker}
        style={{ marginBottom: 20 }}
        disabled={isLoading}
      />
      {isLoading ? <Spinner /> : <Table matches={data?.matches} />}
    </>
  )
}

export default League
