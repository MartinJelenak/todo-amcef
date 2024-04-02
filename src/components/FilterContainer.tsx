import Filter from "./Filter"
import { TodoFilter } from "../types"
import SearchBar from "./SearchBar"

interface FilterContainerProps {
    setFilter: React.Dispatch<React.SetStateAction<TodoFilter>>
    setSearchText: React.Dispatch<React.SetStateAction<string>>
}
export default function FilterContainer({ setFilter, setSearchText }: FilterContainerProps) {
    return (
        <>
            <SearchBar setSearchText={setSearchText} />
            <Filter setFilter={setFilter} />
        </>
    )
}
