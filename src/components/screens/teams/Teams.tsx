import SearchField from '../../ui/search-field/SearchField'
import Spinner from '../../ui/spinner/Spinner'
import Error from '../../ui/error/Error'
import List from '../../ui/list/List'
import { useTeams } from './useTeams'
import { FC } from 'react'

const Teams: FC = () => {
  const { isLoading, searchTerm, handleSearch, filteredData, isError } = useTeams()

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <Error text="Ошибка загрузки данных :(" />
  }

  return (
    <>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
      <List dataSource={filteredData} pageSize={9} link="teams" />
    </>
  )
}

export default Teams
