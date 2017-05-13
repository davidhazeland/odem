import React from 'react'

import {Menu, Icon} from 'semantic-ui-react'

const UserListPaginator = (props) => {
  const {
    pagination: {
      current,
      total,
      range
    },
    actions: {
      fetchRequest
    }
  } = props

  const isFirstPage = current === 1
  const isLastPage = current === total
  const isOnePage = total < 2

  function handleChangePage (page) {
    fetchRequest({
      query: {page}
    })
  }

  return (
    <div className="Paginator" style={{clear: 'both'}}>
      { !isOnePage &&
        <Menu pagination>
          { !isFirstPage &&
            <Menu.Item as='a' icon onClick={handleChangePage.bind(null, 1)}>
              <Icon name='left chevron' />
            </Menu.Item>
          }
          {range.map((pageNumber, i) => {
            return (
              <Menu.Item as='a' key={i} onClick={handleChangePage.bind(null, pageNumber)}>{pageNumber}</Menu.Item>
            )
          })}
          { !isLastPage &&
            <Menu.Item as='a' icon onClick={handleChangePage.bind(null, total)}>
              <Icon name='right chevron' />
            </Menu.Item>
          }
        </Menu>
      }
    </div>
  )
}

UserListPaginator.propTypes = {

}

UserListPaginator.displayName = 'UserListPaginator'

export default UserListPaginator
