'use strict'

import React, {PropTypes} from 'react'

import {TextArea as TextAreaComponent} from 'semantic-ui-react'

const TextArea = (props) => {
  const {
    input: {
      onChange,
      ...input
    },
    ...custom
  } = props

  return (
    <TextAreaComponent
      onChange={(e, data)=>onChange(data.value)}
      {...input} {...custom}/>
  )
}

TextArea.displayName = 'TextArea'

TextArea.propTypes = {
  input: PropTypes.object.isRequired
}

export default TextArea
