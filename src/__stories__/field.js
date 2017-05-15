import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {Form as FormComponent, Field, TextBox, SelectBox, CheckBoxes, TextArea, CheckBox} from '../components';

import { reducer } from 'redux-form';
import { Provider } from 'react-redux';
import { createStore, combineReducers} from 'redux';
import {reduxForm} from 'redux-form';

const required = value => value ? undefined : 'Required';

const store = createStore(combineReducers({
  form: reducer
}));

const Form = ({children}) => {
  const form = props => (
    <FormComponent {...props}>
      {children}
    </FormComponent>
  )
  const Container = reduxForm({
    form: 'form'
  })(form);

  return (
    <Provider store={store}>
      <Container onSubmit={()=>{}}/>
    </Provider>
  )
}

storiesOf('Field', module)
  .add('with textbox', () => {
    return (
      <Form>
        <Field
          label="Name"
          name="name"
          component={TextBox}
          validate={[required]}/>
        <button className="ui button">Submit</button>
      </Form>
    );
  })
  .add('with select box', () => {
    return (
      <Form>
        <Field
          label="Name"
          name="name"
          component={SelectBox}
          componentProps={{
            options: [
              {value: '1', text: 'One'},
              {value: '2', text: 'Two'}
            ]
          }}/>
      </Form>
    );
  })
  .add('with checkboxes', () => {
    return (
      <Form>
        <Field
          label="Name"
          name="name"
          component={CheckBoxes}
          componentProps={{
            options: [
              {key: '1', value: '1', text: 'One'},
              {key: '2', value: '2', text: 'Two'},
              {key: '3', value: '3', text: 'Two'},
              {key: '4', value: '4', text: 'Two'},
              {key: '5', value: '5', text: 'Two'},
              {key: '6', value: '6', text: 'Two'}
            ],
            checkboxClassName: 'two wide column'
          }}/>
      </Form>
    );
  })
  .add('with text area', () => {
    return (
      <Form>
        <Field
          label="Name"
          name="name"
          component={TextArea}
          componentProps={{}}/>
      </Form>
    );
  })
  .add('with checkbox', () => {
    return (
      <Form>
        <Field
          name="name"
          component={CheckBox}
          componentProps={{
            label: 'Name'
          }}/>
      </Form>
    );
  });
