
const DeletePopup = ({ title, setDeletePopup }) => {
  return (
    <div className='delete-popup'>
      <span>Are you sure you want to delete "{title}"?</span>
      <div className='delete-popup__buttons-container'>
        <div className='delete-popup__button button-confirm'>Yes</div>
        <div onClick={() => setDeletePopup(false)} className='delete-popup__button'>No</div>
      </div>
    </div>
  )
}

export default DeletePopup
