export const handleSubmit = ({ ...values }, setErrorMsg, e) => {
  e.preventDefault()

  if (values.date.length < 1 || values.stars.length < 1 || values.title.length < 1 || values.pages.length < 1 || values.author.length < 1 || values.summary.length < 1) {
    return setErrorMsg('All fields are required')
  }

  if (values.stars > 5) {
    return setErrorMsg('Maximum 5 stars')
  }

  const token = JSON.parse(localStorage.getItem('user'))

  fetch('http://localhost:3003/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-token': token.accessToken
    },
    body: JSON.stringify(values)
  })
}
