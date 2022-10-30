
import { ImSearch } from 'react-icons/im'
const Search = ({ onFilteredReviews }) => {
  return (
    <div className='search-container'>
      <ImSearch className='search-container__icon' />
      <input onChange={onFilteredReviews} className='search-container__input' />
    </div>
  )
}

export default Search
