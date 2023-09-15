import { ChangeEvent, FC } from 'react'

interface ISearchField {
    searchTerm: string
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({ handleSearch, searchTerm }) => {
    return (
        <>
            <input placeholder="Search" value={searchTerm} onChange={handleSearch} />
        </>
    )
}

export default SearchField
