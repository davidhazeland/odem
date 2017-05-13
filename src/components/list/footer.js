import React, {PropTypes} from 'react'

import {Table} from 'semantic-ui-react'

import Paginator from './paginator'

const ListFooter = (props) => {
  const {
    pagination,
    actions,

    renderers,
    footer
  } = props

  return (
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan={renderers.length}>
          {footer}
          {pagination && <Paginator pagination={pagination} actions={actions}/>}
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  )
}

ListFooter.propTypes = {
  renderers: PropTypes.array
}

ListFooter.displayName = 'ListFooter'

export default ListFooter
