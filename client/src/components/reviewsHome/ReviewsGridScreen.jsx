import { useEffect, useState } from 'react'
import Review from './Review'
import Search from './Search'
import { API_URL } from '../../../config'
import useSeo from '../../hooks/useSeo'

const ReviewsGridScreen = () => {
  const [reviews, setReviews] = useState([])
  const [filteredReviews, setFilteredReviews] = useState(null)
  const [currentPageReviews, setCurrentPageReviews] = useState([])
  const [page, setPage]= useState(3)

  const desiredReviewsPerPage = 20

  const numberOfPages = filteredReviews ? filteredReviews.length / desiredReviewsPerPage : reviews.length / desiredReviewsPerPage



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

  useEffect(() => {

 
    setCurrentPageReviews(reviews?.slice(page * desiredReviewsPerPage, page * desiredReviewsPerPage + desiredReviewsPerPage  ))

  }, [reviews, page])

  const onFilteredReviews = (e) => {
    setFilteredReviews(reviews.filter(data => data.title.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  useSeo({
    title: 'Books Reviews'
  })

  return (
    <>
      <div className='filter-and-search-container'>
        {

          reviews.length >= 0 && <Search onFilteredReviews={onFilteredReviews} />
        }
      </div>
      <section className='review-container'>
        {
          filteredReviews
            ? filteredReviews?.map(review => <Review key={review.review_id} {...review} />)
            : currentPageReviews?.map(review => <Review key={review.review_id} {...review} />)
        }

        {
        reviews?.length < 1 && <div className='addFirstReview'>Add your first Review...</div>


}


      </section>
      <div className="pagination-container">
  {
    new Array(numberOfPages).fill(null).map((p, i) => {
      return <button onClick={(e) => setPage(i)} className="pagination-container__item">{i + 1}</button>
    })
  }
</div>
    </>
  )
}

export default ReviewsGridScreen
