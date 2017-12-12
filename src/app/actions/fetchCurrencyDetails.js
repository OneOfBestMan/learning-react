export default function fetchCurrencyDetails(id) {
  return dispatch => fetch(`https://api.gdax.com/products/${id}/ticker`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'FETCH_CURRENCY_DETAILS',
        payload: data
      })
    })
}
