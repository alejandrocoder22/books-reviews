
const SingleReviewItem = ({ info, spanText }) => {
  return (
    <div className='review-page__info-item'>
      <span>{spanText}: </span>
      <div className='review-page__review-info'>{info}</div>
    </div>
  )
}

export default SingleReviewItem
