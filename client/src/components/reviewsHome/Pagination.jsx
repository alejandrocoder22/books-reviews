import PaginationButton from './PaginationButton'

const Pagination = ({ numberOfPages, setPage, page }) => {
  console.log(numberOfPages)
  return (
    <div className='pagination-container'>
      {
         numberOfPages && (
           <>
             {page !== 0 && <button className='pagination-container__button' onClick={() => setPage(page - 1)}>Previous</button>}
             <PaginationButton setPage={setPage} page={page} number={page + 1} />
             {page < numberOfPages - 2 && <PaginationButton setPage={setPage} page={page} number={page + 2} />}
             {page < numberOfPages - 3 && <PaginationButton setPage={setPage} page={page} number={page + 3} />}
             {page !== numberOfPages - 1 && <button className='pagination-container__button' onClick={() => setPage(page + 1)}>Next</button>}
           </>
         )

  }
    </div>
  )
}

export default Pagination
