import { Link } from 'react-router-dom'
import { AiOutlineRead } from 'react-icons/ai'
const Review = ({ review_id, stars, date, title, pages, author }) => {
  return (
    <Link className='single-review' to={`/review/${review_id}`}>
      <div className='single-review__title'>{title},</div>
      <div className='single-review__author'>{author}</div>
      <AiOutlineRead className='single-review__read-more' />
    </Link>
  )
}

export default Review
