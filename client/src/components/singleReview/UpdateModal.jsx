import { API_URL } from '../../../config'
import useForm from '../../hooks/useForm'
import { BsXLg } from 'react-icons/bs'
import { toast } from 'sonner'

const UpdateModal = ({ book, setUpdateModal }) => {
  const onUpdateReview = async (e) => {
    e.preventDefault()
    const response = await fetch(`${API_URL}/reviews`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'x-token': JSON.parse(localStorage.getItem('user')).accessToken
      },
      body: JSON.stringify(values)
    })

    if (response.status === 400) {
      const parsedBody = await response.json()
      toast(parsedBody.message)
    }

    setUpdateModal(false)
  }

  const [values, handleInpuTchange] = useForm({
    stars: book.stars,
    date: book.date,
    pages: book.pages,
    author: book.author,
    summary: book.summary,
    title: book.title,
    review_id: book.review_id
  })

  return (
    <>

      <form onSubmit={onUpdateReview} className='update-modal'>
        <BsXLg onClick={() => setUpdateModal(false)} className='update-modal__quit-icon' />
        <label className='update-modal__label'>Title</label>
        <input onChange={(e) => handleInpuTchange(e)} value={values.title} className='update-modal__input' type='text' name='title' />
        <label className='update-modal__label'>Rating</label>
        <input onChange={(e) => handleInpuTchange(e)} value={values.stars} className='update-modal__input' type='number' name='stars' />
        <label className='update-modal__label'>Readed date</label>
        <input onChange={(e) => handleInpuTchange(e)} value={values.date} className='update-modal__input' type='date' name='date' />
        <label className='update-modal__label'>Pages</label>
        <input onChange={(e) => handleInpuTchange(e)} value={values.pages} className='update-modal__input' type='number' name='pages' />
        <label className='update-modal__label'>Author</label>
        <input onChange={(e) => handleInpuTchange(e)} value={values.author} className='update-modal__input' type='text' name='author' />
        <label className='update-modal__label'>Summary</label>
        <textarea onChange={(e) => handleInpuTchange(e)} value={values.summary} className='update-modal__textarea' type='text' name='summary' />
        <button type='submit' className='update-modal__button'>Update</button>
      </form>
    </>
  )
}

export default UpdateModal
