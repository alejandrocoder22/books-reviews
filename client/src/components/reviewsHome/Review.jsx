import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import ReviewItem from './ReviewItem'

const Review = ({ review_id, stars, date, title, pages, author }) => {
  return (
    <div className='single-review'>
      <header className='single-review__header'>
        <div className='single-review__title'>{title}</div>
        <div>
          {[...Array(stars)].map((i) => <span className='single-review__stars' key={i}>  <AiFillStar className='star-icon' /></span>)}
        </div>
      </header>
      <ReviewItem label='Author' item={author} />
      <ReviewItem label='Pages' item={pages} />
      <ReviewItem label='Date' item={date} />
      <Link to={`/review/${review_id}`}>
        <button className='single-review__button'>Read More</button>
      </Link>
    </div>
  )
}

export default Review
