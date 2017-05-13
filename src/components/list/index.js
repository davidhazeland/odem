import React, {PropTypes} from 'react'

import {Table, Loader, Dimmer} from 'semantic-ui-react'

import Header from './header'
import Body from './body'
import Footer from './footer'

const List = (props) => {
  const {
    data,
    pagination,
    isFetching,

    actions,
    renderers,
    footer,

    tableProps,
    ...custom
  } = props

  return (
    <Dimmer.Dimmable {...custom}>
      <Dimmer active={isFetching} inverted>
        <Loader/>
      </Dimmer>

      <Table singleLine {...tableProps}>
        <Header renderers={renderers}/>

        <Body data={data} renderers={renderers}/>

        <Footer pagination={pagination} actions={actions} renderers={renderers} footer={footer}/>
      </Table>
    </Dimmer.Dimmable>
  )
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  pagination: PropTypes.shape({
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    range: PropTypes.arrayOf(PropTypes.number).isRequired
  }),
  isFetching: PropTypes.bool.isRequired,

  actions: PropTypes.shape({
    fetchRequest: PropTypes.func.isRequired
  }).isRequired,
  renderers: PropTypes.arrayOf(PropTypes.shape({
    header: PropTypes.shape({
      text: PropTypes.node
    }),
    body: PropTypes.shape({
      render: PropTypes.func.isRequired,
      props: PropTypes.func.object
    })
  })).isRequired,

  footer: PropTypes.node,
  className: PropTypes.string
}

List.displayName = 'List'

export default List
