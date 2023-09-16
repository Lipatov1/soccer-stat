import { ChangeEvent, FC } from 'react'
import { Input } from 'antd';

interface ISearchField {
    searchTerm: string
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({ handleSearch, searchTerm }) => (
    <Input.Search placeholder="Поиск..." value={searchTerm} onChange={handleSearch} style={{ maxWidth: 400 }} />
)

export default SearchField
