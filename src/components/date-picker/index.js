import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment'

import DatePickerComponent from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const dateFormat = 'YYYY-MM-DD'

const DatePicker = (props) => {
  const {
    input: {
      value,
      onChange
    },
    defaultValue,
    ...custom
  } = props

  return (
    <DatePickerComponent
      className="form-control"
      dateFormat="MM/DD/YYYY"
      selected={value ? moment(value, dateFormat) : defaultValue}
      onChange={data => {
        const date = moment(data)

        onChange(date.isValid() ? date.format(dateFormat) : null)
      }}
      {...custom}/>
  );
};

DatePicker.propTypes = {
  input: PropTypes.object.isRequired
}

DatePicker.displayName = 'DatePicker'

export default DatePicker
