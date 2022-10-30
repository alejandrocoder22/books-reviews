
export const filterBytitle = (id, setBook) => {
  return fetch('https://api.alejandrocoder.com/reviews', {
    method: 'GET',
    headers: {
      'x-token': JSON.parse(localStorage.getItem('user')).accessToken
    }
  })
    .then(response => response.json())
    .then(data => setBook(data.data.find(book => book.review_id === Number(id))))
}
