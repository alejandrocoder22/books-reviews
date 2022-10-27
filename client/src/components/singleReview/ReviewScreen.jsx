import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { filterBytitle } from '../../helpers/filterBytitle'
import { AiFillStar } from 'react-icons/ai'
import { BsTrash, BsArrowReturnLeft } from 'react-icons/bs'

import SingleReviewItem from './SingleReviewItem'

const ReviewScreen = ({ history }) => {
  const { id } = useParams()
  const [book, setBook] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    filterBytitle(id, setBook)
  }, [id])

  const { title, date, pages, author, summarY, stars } = book

  const deleteReview = () => {
    fetch(`http://localhost:3003/reviews/${id}`, {
      method: 'DELETE'
    })
  }
  return (
    <main className='review-page'>
      <section className='review-page__container'>
        <header className='review-page__header-container'>
          <BsArrowReturnLeft className='review-page__back-icon' onClick={() => navigate('/')} />
          <h1 className='review-page__h1'>{title}</h1>
          <div className='review-page__star'>
            {[...Array(stars)].map(i => <span key={i}><AiFillStar className='star-icon' /></span>)}
          </div>
          <BsTrash className='review-page__delete-icon' onClick={() => deleteReview()} />
        </header>
        <div className='reivew-page__item-container'>
          <SingleReviewItem info={date} spanText='Date' />
          <SingleReviewItem info={pages} spanText='Number Of pages' />
          <SingleReviewItem info={author} spanText='Author' />
          <SingleReviewItem info={summarY} spanText='Summary' />
        </div>
      </section>
    </main>
  )
}

export default ReviewScreen
