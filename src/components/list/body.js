import React, {PropTypes} from 'react'

import {Table} from 'semantic-ui-react'

const ListBody = (props) => {
  const {
    data,

    renderers
  } = props

  return (
    <Table.Body>
      {data.map((item, i) => {
        return (
          <Table.Row key={i}>
            {renderers.map((renderer, j) => {
              return (
                <Table.Cell key={j} {...renderer.body.props}>
                  {renderer.body.render(item, i, j)}
                </Table.Cell>
              )
            })}
          </Table.Row>
        )
      })}
    </Table.Body>
  )
}

ListBody.propTypes = {
  data: PropTypes.array,
  renderers: PropTypes.array
}

ListBody.displayName = 'ListBody'

export default ListBody
