
const InputAddReview = ({ handleInputChange, name, type = 'text', labelText = '' }) => {
  return (
    <>
      <label className='add-review__label'>{labelText}</label>
      <input onChange={handleInputChange} required autoComplete='off' className='add-review__input' name={name} type={type} />
    </>
  )
}

export default InputAddReview
