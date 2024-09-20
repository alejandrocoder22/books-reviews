import { useEffect, useState } from 'react'
import Review from './Review'
import Search from './Search'
import { API_URL } from '../../../config'
import useSeo from '../../hooks/useSeo'
import Pagination from './Pagination'

const ReviewsGridScreen = () => {
  const [reviews, setReviews] = useState([])
  const [filteredReviews, setFilteredReviews] = useState(null)
  const [page, setPage] = useState(0)
  const [searchtitle, setSearchTitle] = useState('')

  const desiredReviewsPerPage = 16

  const getNumberOfPages = () => {
    if (filteredReviews?.length > desiredReviewsPerPage) {
      return Math.ceil(filteredReviews?.length / desiredReviewsPerPage)
    }

    if (reviews.length > desiredReviewsPerPage && searchtitle.length < 1) {
      return Math.ceil(reviews?.length / desiredReviewsPerPage)
    }

    return reviews.length > 0 ? 1 : 0
  }
  const numberOfPages = getNumberOfPages()

  useEffect(() => {
    fetch(`${API_URL}/reviews`, {
      method: 'GET',
      headers: {
        'x-token': JSON.parse(localStorage.getItem('user'))?.accessToken
      }
    })
      .then(response => response.json())
      .then(data => {
        setReviews(data.data)
      }

      )
  }, [])

  const currentPageReviews = !filteredReviews
    ? reviews?.slice(page * desiredReviewsPerPage, page * desiredReviewsPerPage + desiredReviewsPerPage)
    : filteredReviews?.slice(page * desiredReviewsPerPage, page * desiredReviewsPerPage + desiredReviewsPerPage)

  useSeo({
    title: 'Books Reviews'
  })

  return (
    <>
      <div className='filter-and-search-container'>
        {

          reviews.length >= 0 && <Search page={page} desiredReviewsPerPage={desiredReviewsPerPage} getNumberOfPages={getNumberOfPages} reviews={reviews} searchTitle={searchtitle} setFilteredReviews={setFilteredReviews} setSearchTitle={setSearchTitle} />
        }
      </div>
      <section className='review-container'>
        {
             currentPageReviews?.map(review => <Review key={review.review_id} {...review} />)
}

        {
        reviews?.length < 1 && <div className='addFirstReview'>Add your first Review...</div>

}

      </section>
      <Pagination numberOfPages={numberOfPages} setPage={setPage} page={page} />
    </>
  )
}

export default ReviewsGridScreen
