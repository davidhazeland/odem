'use strict'

import React, {PropTypes} from 'react'

import {Select} from 'semantic-ui-react'

const SelectBox = (props) => {
  const {
    input: {
      onChange,
      ...input
    },
    ...custom
  } = props

  return (
    <Select onChange={(e, data)=>onChange(data.value)} {...input} {...custom}/>
  )
}

SelectBox.displayName = 'SelectBox'

SelectBox.propTypes = {
  input: PropTypes.object.isRequired
}

export default SelectBox
