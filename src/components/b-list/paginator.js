import React from 'react'

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

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
        <Pagination>
          { !isFirstPage &&
            <PaginationItem onClick={handleChangePage.bind(null, 1)}>
              <PaginationLink previous href="#" />
            </PaginationItem>
          }
          {range.map((pageNumber, i) => {
            return (
              <PaginationItem key={i} active={pageNumber === current} onClick={handleChangePage.bind(null, pageNumber)}>
                <PaginationLink href="#">
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            )
          })}
          { !isLastPage &&
            <PaginationItem onClick={handleChangePage.bind(null, total)}>
              <PaginationLink next href="#" />
            </PaginationItem>
          }
        </Pagination>
      }
    </div>
  )
}

UserListPaginator.propTypes = {

}

UserListPaginator.displayName = 'UserListPaginator'

export default UserListPaginator
