import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import {List} from '../components';

import {Button} from 'semantic-ui-react';

const renderers = [
  {
    header: {
      text: 'ID'
    },
    body: {
      render: item => item.id
    }
  },
  {
    header: {
      text: 'Name'
    },
    body: {
      render: item => item.name
    }
  },
  {
    header: {},
    body: {
      render: () => {
        return (
          <div>
            <button className="ui button">Action</button>
          </div>
        )
      },
      props: {
         textAlign:'right'
      }
    }
  }
];
const actions = {
  changePage() {
    action('change page');
  }
}

storiesOf('List', module)
  .add('with data', () => {
    const data = [
      {id: 1, name: 'One'},
      {id: 2, name: 'Two'},
      {id: 3, name: 'Three'}
    ];
    const pagination = {
      current: 1,
      total: 10,
      range: [1, 2, 3, 4, 5]
    };

    return (
      <List
        data={data}
        pagination={pagination}
        isFetching={false}
        renderers={renderers}
        actions={actions}
        footer={
          <div>
            <Button floated="right">Action</Button>
          </div>
        }/>
    )
  })
  .add('loading', () => {
    return (
      <List
        data={[]}
        isFetching={true}
        renderers={renderers}
        actions={actions}
      />
    )
  });
