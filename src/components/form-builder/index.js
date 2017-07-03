import { reduxForm } from 'redux-form'

import Form from './form'

export default function(name) {
  return reduxForm({
    form: name,
    enableReinitialize: true
  })(Form)
}
