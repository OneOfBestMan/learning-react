import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const CurrencyItem = ({id, display_name}) => <li><Link to={`/currencies/${id}`}>{display_name}</Link></li>

CurrencyItem.propTypes = {
  id: PropTypes.string.isRequired,
  display_name: PropTypes.string.isRequired
}

export default CurrencyItem
