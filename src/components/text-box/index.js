'use strict'

import React, {PropTypes} from 'react'

import { Input } from 'semantic-ui-react'

const TextBox = (props) => {
  const {
    input: {
      onChange,
      ...input
    },
    ...custom
  } = props

  return (
    <Input onChange={(e, data)=>onChange(data.value)} {...input} {...custom}/>
  )
}

TextBox.displayName = 'TextBox'

TextBox.propTypes = {
  input: PropTypes.object.isRequired
}

export default TextBox
