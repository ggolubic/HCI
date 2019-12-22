import React from "react"

import {
  ItemLink,
  NumContainer,
  PageChange,
  PaginationContainer,
} from "./Pagination.styled"
import Flex from "../../../../components/common/Flex/Flex"

const Pagination = ({ pageContext }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  return (
    <PaginationContainer>
      <Flex direction="row">
        <ItemLink to={`/news/${prevPage}`} disabled={isFirst}>
          <PageChange>← Previous Page</PageChange>
        </ItemLink>

        {Array.from({ length: numPages }, (_, i) => (
          <ItemLink
            key={`pagination-number${i + 1}`}
            to={`news/${i === 0 ? "" : i + 1}`}
          >
            <NumContainer>{i + 1}</NumContainer>
          </ItemLink>
        ))}

        <ItemLink to={`news/${nextPage}`} disabled={isLast}>
          <PageChange>Next Page →</PageChange>
        </ItemLink>
      </Flex>
    </PaginationContainer>
  )
}

export default Pagination
