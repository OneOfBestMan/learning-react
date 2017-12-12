import React from 'react'
import {Route} from 'react-router-dom'
import CurrencyItem from '../components/CurrencyItem'
import CurrencyDetails from '../components/CurrencyDetails'
import {connect} from 'react-redux'
import fetchCurrencies from '../actions/fetchCurrencies'
import fetchCurrencyDetails from '../actions/fetchCurrencyDetails'

class Currencies extends React.Component {
  componentDidMount() {
    this.props.fetchCurrencies()
  }

  render() {
    const {currencies, details, fetchCurrencyDetails} = this.props

    return <div>
  <h2>~ Currency Page ~</h2>
  <div>
    <ul>
      {currencies.map(i => <CurrencyItem key={i.id} {...i} />)}
    </ul>
    <Route
      path={`${this.props.match.url}/:id`}
      render={props => <CurrencyDetails {...props} fetchDetails={fetchCurrencyDetails} details={details} />} />
  </div>
</div>
  }
}

const mapStateToProps = state => {
  return {
    currencies: state.currencies,
    details: state.details
  }
}

export default connect(mapStateToProps, {fetchCurrencies, fetchCurrencyDetails})(Currencies)
