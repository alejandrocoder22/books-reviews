import { useState } from 'react'
import useForm from '../../hooks/useForm'
import InputAddReview from './InputAddReview'
import { BiErrorAlt } from 'react-icons/bi'
import { handleSubmit } from '../../helpers/addReviewSubmit'

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

  return (
    <div className='add-review'>
      <form onSubmit={(e) => handleSubmit({ ...values }, setErrorMsg, e)} className='add-review__form'>
        <InputAddReview
          handleInputChange={handleInputChange}
          name='date'
          type='date'
          labelText='Date'
        />
        <InputAddReview
          handleInputChange={handleInputChange}
          name='stars'
          type='number'
          labelText='Stars'
        />
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
