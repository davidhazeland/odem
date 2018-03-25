import React, {PropTypes} from 'react'

import {Table} from 'semantic-ui-react'

const ListBody = (props) => {
  const {
    data,

    renderers
  } = props

  return (
    <tbody>
      {data.map((item, i) => {
        return (
          <tr key={i}>
            {renderers.map((renderer, j) => {
              return (
                <td key={j} {...renderer.body.props}>
                  {renderer.body.render(item, i, j)}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  )
}

ListBody.propTypes = {
  data: PropTypes.array,
  renderers: PropTypes.array
}

ListBody.displayName = 'ListBody'

export default ListBody
