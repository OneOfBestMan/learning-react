import React from 'react'
import {Link} from 'react-router-dom'

const CurrencyItem = props => <li><Link to={`/currencies/${props.id}`}>{props.display_name}</Link></li>

export default CurrencyItem
