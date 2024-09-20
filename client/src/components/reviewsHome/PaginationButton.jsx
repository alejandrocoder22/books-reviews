
const PaginationButton = ({ setPage, page, number }) => {
  return (
    <button onClick={() => setPage(number - 1)} className={`pagination-container__item ${page === number - 1 && 'active'}`}>{number}</button>
  )
}

export default PaginationButton
