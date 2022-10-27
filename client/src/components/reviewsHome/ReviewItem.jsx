import React from 'react'

const ReviewItem = ({ label, item }) => {
  return (
    <div className='single-review__item'>
      <div className='single-review__label'>{label}: </div>
      <div className='single-review__item'>{item}</div>
    </div>
  )
}

export default ReviewItem
