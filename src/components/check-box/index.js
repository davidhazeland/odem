import React, {PropTypes} from 'react'

import {Checkbox as CheckBoxComponent} from 'semantic-ui-react'

const CheckBox = (props) => {
  const {
    input: {
      value,
      onChange,
      onBlur,
      onFocus,
      ...input
    },

    ...custom
  } = props

  return (
    <CheckBoxComponent
      value={value.toString()}
      onChange={(e, data)=>{
        onChange(data.checked)
      }}
      {...input} {...custom}/>
  )
}

CheckBox.propTypes = {
  input: PropTypes.object.isRequired
}

CheckBox.displayName = 'CheckBox'

export default CheckBox
