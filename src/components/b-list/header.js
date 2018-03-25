import React, {PropTypes} from 'react'

const ListHeader = (props) => {
  const {
    renderers
  } = props

  return (
    <thead>
      <tr>
        {renderers.map((renderer, i) => {
          return (
            <th key={i} {...renderer.header.props}>
              {renderer.header.text}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

ListHeader.propTypes = {
  renderers: PropTypes.array
}

ListHeader.displayName = 'ListHeader'

export default ListHeader
