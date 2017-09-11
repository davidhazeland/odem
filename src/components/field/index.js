import React, {PropTypes, createElement} from 'react'

import { elementType } from 'react-prop-types'

import {Field as ReduxField} from 'redux-form'
import {Form, Label} from 'semantic-ui-react'

const renderField = field => {
  const {
    input,
    meta,

    name,
    label,

    fieldProps,
    component,
    componentProps
  } = field

  const hasError = !!(meta.touched && meta.error)

  return (
    <Form.Field {...fieldProps} error={hasError}>
      {label && <label htmlFor={name}>{label}</label>}
      {createElement(component, {
        input,
        id: name,
        ...componentProps
      })}
      {hasError &&
        <Label basic pointing color="red">
          {meta.error}
        </Label>
      }
    </Form.Field>
  )
}

const Field = (props) => {
  const {
    name,
    label,
    component,

    fieldProps,
    componentProps,

    ...rest
  } = props

  return (
    <ReduxField
      name={name}
      props={{name, label, fieldProps, component, componentProps}}
      component={renderField}
      {...rest}
      />
  )
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.node,
  component: elementType.isRequired,

  fieldProps: PropTypes.object,
  componentProps: PropTypes.object
}

Field.displayName = 'Field'

export default Field
