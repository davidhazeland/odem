import React, {PropTypes} from 'react'

import {Checkbox, CheckboxGroup} from 'react-checkbox-group'

const CheckBoxes = (props) => {
  const {
    input: {
      value,
      onChange
    },

    options,
    checkboxClassName,
    ...rest
  } = props

  return (
    <CheckboxGroup value={value || []} onChange={onChange} {...rest}>
      {options.map((item, i) => {
        const id = item.key
        return (
          <div key={i} className={checkboxClassName}>
            <div className="ui checkbox">
              <Checkbox value={item.value} id={id} className="hidden"/>
              <label htmlFor={id}>{item.text}</label>
            </div>
          </div>
        )
      })}
    </CheckboxGroup>
  )
}

CheckBoxes.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object,

  options: PropTypes.array.isRequired,
  checkboxClassName: PropTypes.string
}

CheckBoxes.displayName = 'CheckBoxes'

export default CheckBoxes
