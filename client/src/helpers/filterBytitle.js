import { API_URL } from '../../config'

export const filterBytitle = (id, setBook) => {
  return fetch(`${API_URL}/reviews`, {
    method: 'GET',
    headers: {
      'x-token': JSON.parse(localStorage.getItem('user')).accessToken
    }
  })
    .then(response => response.json())
    .then(data => setBook(data.data.find(book => book.review_id === Number(id))))
}
