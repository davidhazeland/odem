import React from 'react';
import {storiesOf} from '@kadira/storybook';
import { FormBuilder } from '../components';

import { reducer } from 'redux-form';
import { Provider } from 'react-redux';
import { createStore, combineReducers} from 'redux';
import {reduxForm} from 'redux-form';

const required = value => value ? undefined : 'Required';

const store = createStore(combineReducers({
  form: reducer
}));

const name = 'form'
const object = {
  definition: {
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "textbox"
      },
      {
        "name": "email",
        "label": "Email",
        "type": "textbox"
      }
    ]
  }
}

const Form = FormBuilder(name)

storiesOf('FormBuilder', module)
  .add('default', () => {
    return (
      <Provider store={store}>
        <Form action="Submit" object={object}/>
      </Provider>
    );
  })
