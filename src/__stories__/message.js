import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {Message} from '../components';

storiesOf('Message', module)
  .add('without text', () => (
    <Message text="" />
  ))
  .add('with text', () => (
    <Message text="message" />
  ))
  .add('with text and format', () => (
    <Message text="message" format="success"/>
  ))
  .add('Undismissable', () => (
    <Message text="message" format="success" dismissable={false}/>
  ))
