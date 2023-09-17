import SearchField from '../../ui/search-field/SearchField'
import Spinner from '../../ui/spinner/Spinner'
import { useLeagues } from './useLeagues'
import List from '../../ui/list/List'
import { FC } from 'react'

const Leagues: FC = () => {
  const { isLoading, searchTerm, handleSearch, filteredData } = useLeagues()

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
      <List dataSource={filteredData} link="leagues" />
    </>
  )
}

export default Leagues
