import { useEffect } from 'react'

const useSeo = ({ title }) => {
  return (
    useEffect(() => {
      document.title = title
    }, [])
  )
}

export default useSeo
