import { useState } from 'react'

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState)

  const reset = () => {
    setValues(initialState)
  }

  const handleInpuTchange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  }

  return [values, handleInpuTchange, reset]
}

export default useForm
