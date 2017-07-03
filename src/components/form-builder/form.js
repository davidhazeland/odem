import React, {PropTypes} from 'react'

import { Form as FormComponent, Field, TextBox, TextArea } from '../index'
import { Button } from 'semantic-ui-react'

const getComponent = type => {
  switch (type) {
    case 'textbox':
      return TextBox
      break;
    case 'textarea':
      return TextArea
      break;
    default:
      return 'input'
  }
}

const Form = (props) => {
  const {
    action,
    definition,

    submitting,
    ...rest
  } = props

  const { fields } = definition

  return (
    <FormComponent {...rest}>
      {fields.map((field, key) => {
        return (
          <Field key={key}
            name={field.name}
            label={field.label}
            component={getComponent(field.type)}
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