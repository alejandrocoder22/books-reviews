
import { ImSearch } from 'react-icons/im'
const Search = ({ reviews, setFilteredReviews, setSearchTitle, setPage }) => {
  const onFilteredReviews = (e) => {
    setSearchTitle(e.target.value)

    const filteredByTitleReviews = reviews?.filter(data => data.title.toLowerCase().includes(e.target.value.toLowerCase()))

    setPage(0)
    setFilteredReviews(filteredByTitleReviews)
  }

  return (
    <div className='search-container'>
      <ImSearch className='search-container__icon' />
      <input onChange={(e) => onFilteredReviews(e)} placeholder='Search by title...' className='search-container__input' />
    </div>
  )
}

export default Search
