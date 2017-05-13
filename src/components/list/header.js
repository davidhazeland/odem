import React, {PropTypes} from 'react'

import {Table} from 'semantic-ui-react'

const ListHeader = (props) => {
  const {
    renderers
  } = props

  return (
    <Table.Header>
      <Table.Row>
        {renderers.map((renderer, i) => {
          return (
            <Table.HeaderCell key={i} {...renderer.header.props}>
              {renderer.header.text}
            </Table.HeaderCell>
          )
        })}
      </Table.Row>
    </Table.Header>
  )
}

ListHeader.propTypes = {
  renderers: PropTypes.array
}

ListHeader.displayName = 'ListHeader'

export default ListHeader
