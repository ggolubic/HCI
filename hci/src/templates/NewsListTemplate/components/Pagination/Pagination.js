import React from "react"

import {
  ItemLink,
  NumContainer,
  PageChange,
  PaginationContainer,
} from "./Pagination.styled"
import Flex from "components/common/Flex/Flex"

const Pagination = ({ pageContext }) => {
  const { currentPage, numPages, pagePath } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "" : `/${(currentPage - 1).toString()}`
  const nextPage = (currentPage + 1).toString()

  return (
    <PaginationContainer>
      <Flex direction="row" justify="center">
        <ItemLink to={`/${pagePath}${prevPage}`} disabled={isFirst}>
          <PageChange>
            ← <span>Previous Page</span>
          </PageChange>
        </ItemLink>

        {Array.from({ length: numPages }, (_, i) => {
          const isCurrent = currentPage === i + 1
          return (
            <ItemLink
              key={`pagination-number${i + 1}`}
              to={`/${pagePath}${i === 0 ? "" : `/${i + 1}`}`}
              disabled={isCurrent}
            >
              <NumContainer>{i + 1}</NumContainer>
            </ItemLink>
          )
        })}

        <ItemLink to={`/${pagePath}/${nextPage}`} disabled={isLast}>
          <PageChange>
            <span>Next Page</span> →
          </PageChange>
        </ItemLink>
      </Flex>
    </PaginationContainer>
  )
}

export default Pagination
