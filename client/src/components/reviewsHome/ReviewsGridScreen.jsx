import { useEffect, useState } from 'react'
import Review from './Review'

const ReviewsGridScreen = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('http://localhost:3003/reviews', {
      method: 'GET',
      headers: {
        'x-token': JSON.parse(localStorage.getItem('user'))?.accessToken
      }
    })
      .then(response => response.json())
      .then(data => setReviews(data.data))
  }, [])

  return (
    <section className='review-container'>

      {

      reviews.length > 0
        ? reviews.map(review => {
          return (
            <div key={review.review_id}>
              <Review {...review} />
            </div>
          )
        }
        )
        : <div className='addFirstReview'>Add your first Review...</div>

    }

    </section>
  )
}

export default ReviewsGridScreen
