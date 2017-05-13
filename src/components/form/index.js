import React, {PropTypes} from 'react'

import {Form as FormComponent} from 'semantic-ui-react'

const Form = (props) => {
  const {
    handleSubmit,

    error,
    submitFailed,
    children,
    className,
    loading,

    formProps
  } = props

  const hasError = !!(submitFailed && error)

  return (
    <FormComponent
      onSubmit={handleSubmit}
      error={hasError}
      children={children}
      className={className}
      loading={loading}

      {...formProps}
      />
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,

  error: PropTypes.object,
  submitFailed: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  loading: PropTypes.bool,

  formProps: PropTypes.object
}

Form.displayName = 'Form'

export default Form
