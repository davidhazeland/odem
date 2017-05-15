import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import {CheckBoxes} from '../components';

storiesOf('CheckBoxes', module)
  .add('with text', () => {
    const props = {
      input: {
        value: null,
        onChange() {
          action('change');
        }
      },
      options: [{
        value: 1,
        text: 'One'
      }, {
        value: 2,
        text: 'Two'
      }]
    }

    return (
      <form className="ui form">
        <CheckBoxes {...props}/>
      </form>
    )
  });
