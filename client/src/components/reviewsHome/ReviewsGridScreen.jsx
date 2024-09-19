import { useEffect, useState } from 'react'
import Review from './Review'
import Search from './Search'
import { API_URL } from '../../../config'
import useSeo from '../../hooks/useSeo'

const ReviewsGridScreen = () => {
  const [reviews, setReviews] = useState([])
  const [filteredReviews, setFilteredReviews] = useState(reviews)

  useEffect(() => {
    fetch(`${API_URL}/reviews`, {
      method: 'GET',
      headers: {
        'x-token': JSON.parse(localStorage.getItem('user'))?.accessToken
      }
    })
      .then(response => response.json())
      .then(data => setReviews(data.data))
    setFilteredReviews(reviews)
  }, [])

  const onFilteredReviews = (e) => {
    setFilteredReviews(reviews.filter(data => data.title.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  useSeo({
    title: 'Books Reviews'
  })

  return (
    <>
      <div className='filter-and-search-container' />
      <section className='review-container'>
        {
          reviews.length >= 0 && <Search onFilteredReviews={onFilteredReviews} />
        }
        {
        reviews?.length < 1 && <div className='addFirstReview'>Add your first Review...</div>
        }
        {
       filteredReviews?.map(review => <Review key={review.review_id} {...review} />)
        }

      </section>
    </>
  )
}

export default ReviewsGridScreen
