import {ChangeEvent, FC, useState} from 'react';
import {useDebounce} from '../../hooks/useDebounce';
import {useQuery} from 'react-query';

const Search: FC = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const debouncedSearch = useDebounce(searchTerm, 500)

    const { isSuccess, data: popularMovies } = useQuery(
        ['search movie list', debouncedSearch],
        // () => MovieService.getMovies(debouncedSearch),
        {
            select: ({ data }) => data,
            enabled: !!debouncedSearch,
        }
    )

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div>

        </div>
    );
};

export default Search;
