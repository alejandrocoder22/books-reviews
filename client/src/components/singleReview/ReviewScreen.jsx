import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { filterBytitle } from '../../helpers/filterBytitle'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

import SingleReviewItem from './SingleReviewItem'
import UpdateModal from './UpdateModal'
import deletePopup from './DeletePopup'
import DeletePopup from './DeletePopup'

const ReviewScreen = () => {
  const { id } = useParams()
  const [book, setBook] = useState([])
  const [updateModal, setUpdateModal] = useState(false)
  const [deletePopup, setDeletePopup] = useState(false)

  useEffect(() => {
    filterBytitle(id, setBook)
  }, [id])

  const { title, date, pages, author, stars, summary } = book

  const deleteReview = () => {
    fetch(`https://api.alejandrocoder.com/reviews/${id}`, {
      method: 'DELETE'
    })
  }

  const onUpdateModal = () => {
    setUpdateModal(!updateModal)
  }

  return (
    <main className='review-page'>
      {updateModal && <UpdateModal book={book} setUpdateModal={setUpdateModal} deleteReview={deleteReview} />}
      {deletePopup && <DeletePopup title={title} setDeletePopup={setDeletePopup} />}
      <section className='review-page__container'>
        <header className='review-page__header-container'>
          <h1 className='review-page__h1'>{title}</h1>
          <AiFillDelete className='review-page__delete-icon' onClick={() => setDeletePopup(!deletePopup)} />
          <AiFillEdit className='review-page__edit-icon' onClick={onUpdateModal} />
        </header>
        <div className='review-page__item-container'>
          <SingleReviewItem info={stars + '/5'} spanText='Rating' />
          <SingleReviewItem info={date} spanText='Readed' />
          <SingleReviewItem info={pages} spanText='Pages' />
          <SingleReviewItem info={author} spanText='Author' />
          <SingleReviewItem info={null} spanText='Summary' />
          <div className='review-page__summary-container'>
            <p>{summary}</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ReviewScreen
