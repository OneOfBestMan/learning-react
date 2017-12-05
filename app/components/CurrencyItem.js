import React from 'react';
import { Link } from 'react-router-dom'

export default class CurrencyItem extends React.Component {
  render() {
    return (
      <li>{this.props.display_name}</li>
    )
  }
}
