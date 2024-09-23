
import { ImSearch } from 'react-icons/im'
const Search = ({ page, desiredReviewsPerPage, reviews, setFilteredReviews, setSearchTitle, searchTitle }) => {
  const onFilteredReviews = (e) => {
    setSearchTitle(e.target.value)

    const filteredByTitleReviews = reviews?.filter(data => data.title.toLowerCase().includes(e.target.value.toLowerCase()))

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
