import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

export default class TextInput extends Component {
  static propTypes = {
    defaultValue: PropTypes.string,
    formId: PropTypes.string,
    hidden: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    set: PropTypes.func,
    store: PropTypes.object,
  }

  componentDidMount() {
    this.setValue(this.props.defaultValue || '')
  }

  get isInput() { return true }

  getValue() {
    const { formId, store, id } = this.props
    if (store[formId] && store[formId].fields[id]) {
      return store[formId].fields[id]
    } else {
      return ''
    }
  }

  onChange = (event) => {
    const value = event.target.value
    this.setValue(value)
  }

  setValue(value) {
    const { formId, id } = this.props
    this.props.set(formId, id, value)
  }

  get inputProps() {
    return {
      hidden: this.props.hidden,
      placeholder: this.props.placeholder,
      required: this.props.required,
    }
  }

  render() {
    const { label } = this.props
    return (
      <div className={styles.container}>
        <label className={styles.label}>
          {label}
          <input
            className={styles.input}
            type='text'
            onChange={this.onChange}
            value={this.getValue()}
            {...this.inputProps}
          />
        </label>
      </div>
    )
  }
}
