import React, {PropTypes} from 'react'

import { Form as FormComponent, Field, TextBox, TextArea, CheckBoxes } from '../index'
import { Button } from 'semantic-ui-react'

const getComponent = type => {
  switch (type) {
    case 'textbox':
      return TextBox
      break;
    case 'textarea':
      return TextArea
      break;
    case 'checkbox':
      return CheckBoxes
    default:
      return 'input'
  }
}

const Form = (props) => {
  const {
    action,
    object,

    submitting,
    ...rest
  } = props

  if (!object) return null

  const { definition: {fields} } = object

  return (
    <FormComponent {...rest}>
      {fields.map((field, key) => {
        return (
          <Field key={key}
            name={field.name}
            label={field.label}
            component={getComponent(field.type)}
            componentProps={field.meta}
          />
        )
      })}
      <Button primary loading={submitting}>{action}</Button>
    </FormComponent>
  )
}

Form.propTypes = {

}

Form.displayName = 'Form'

export default Form
