import { LeftPaginateIcon, RightPaginateIcon } from '../icons/Icons'
import PaginationButton from './PaginationButton'

const Pagination = ({ numberOfPages, setPage, page }) => {
  const decreasePage = () => {
    setPage(page - 1)
    window.scrollTo(0, 0)
  }

  const increasePage = () => {
    setPage(page + 1)
    window.scrollTo(0, 0)
  }

  return (
    <div className='pagination-container'>
      {
         numberOfPages && (
           <>
             {page !== 0 &&
              (
                <button className='pagination-container__button' onClick={decreasePage}>
                  <LeftPaginateIcon />
                </button>
              )}
             <PaginationButton setPage={setPage} page={page} number={page + 1} />
             {page < numberOfPages - 2 && <PaginationButton setPage={setPage} page={page} number={page + 2} />}
             {page < numberOfPages - 3 && <PaginationButton setPage={setPage} page={page} number={page + 3} />}
             {
             page !== numberOfPages - 1 &&
             (
               <button className='pagination-container__button' onClick={increasePage}>
                 <RightPaginateIcon />
               </button>
             )
             }
           </>
         )

  }
    </div>
  )
}

export default Pagination
