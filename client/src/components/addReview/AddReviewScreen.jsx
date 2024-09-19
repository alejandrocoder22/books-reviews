import { useState } from 'react'
import useForm from '../../hooks/useForm'
import InputAddReview from './InputAddReview'
import { BiErrorAlt } from 'react-icons/bi'
import { onSubmitReview } from '../../helpers/addReviewSubmit'
import { useNavigate } from 'react-router-dom'
import useSeo from '../../hooks/useSeo'

const AddReviewScreen = () => {
  const [errorMsg, setErrorMsg] = useState()
  const [values, handleInputChange] = useForm({
    date: '',
    stars: 0,
    title: '',
    pages: 0,
    author: '',
    summary: ''
  })

  const navigate = useNavigate()

  useSeo({
    title: 'Add Review'
  })

  return (
    <div className='add-review'>
      <form onSubmit={(e) => onSubmitReview({ ...values }, setErrorMsg, navigate, e)} className='add-review__form'>
        <InputAddReview
          handleInputChange={handleInputChange}
          name='date'
          type='date'
          labelText='Date'
        />
        <label className='add-review__label'>Stars (1-5)</label>
        <input onChange={handleInputChange} required autoComplete='off' className='add-review__input' name='stars' type='number' max='5' min='0' />
        <InputAddReview
          handleInputChange={handleInputChange}
          name='title'
          labelText='Title'
        />

        <InputAddReview
          handleInputChange={handleInputChange}
          name='pages'
          type='number' labelText='Pages'
        />
        <InputAddReview
          handleInputChange={handleInputChange}
          name='author'
          labelText='Author'
        />
        <label className='add-review__label'>Summary</label>
        <textarea onChange={handleInputChange} className='add-review__textarea' name='summary' />
        <button className='add-review__button'>Add Book</button>
      </form>
      {errorMsg && <div className='add-review__error-msg'>{errorMsg} <BiErrorAlt /></div>}
    </div>

  )
}

export default AddReviewScreen
