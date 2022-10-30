
const SingleReviewItem = ({ info, spanText }) => {
  return (
    <div className='review-page__info-item'>
      <span className='review-page__info-item-title'>{spanText} </span>
      <div className='review-page__info-item-description'>{info}</div>
    </div>
  )
}

export default SingleReviewItem
