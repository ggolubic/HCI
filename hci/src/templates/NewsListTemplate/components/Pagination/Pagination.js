import React from "react"

import ChevronLeft from "@kiwicom/orbit-components/lib/icons/ChevronLeft"
import ChevronRight from "@kiwicom/orbit-components/lib/icons/ChevronRight"
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink"
import Stack from "@kiwicom/orbit-components/lib/Stack"

import { ItemLink, PaginationContainer } from "./Pagination.styled"

const Pagination = ({ pageContext }) => {
  const { currentPage, numPages, pagePath } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "" : `/${(currentPage - 1).toString()}`
  const nextPage = (currentPage + 1).toString()

  return (
    <PaginationContainer>
      <Stack direction="row" spacing="natural" align="center" justify="center">
        {!isFirst && (
          <ItemLink to={`/${pagePath}${prevPage}`}>
            <ButtonLink
              onClick={() => {}}
              iconLeft={<ChevronLeft />}
              type="secondary"
              title="Previous page"
            />
          </ItemLink>
        )}

        {Array.from({ length: numPages }, (_, i) => {
          const isCurrent = currentPage === i + 1
          return isCurrent ? (
            <ButtonLink
              disabled={true}
              type="secondary"
              title={`page ${i + 1}`}
              key={`pagination-number${i + 1}`}
            >
              {i + 1}
            </ButtonLink>
          ) : (
            <ItemLink
              key={`pagination-number${i + 1}`}
              to={`/${pagePath}${i === 0 ? "" : `/${i + 1}`}`}
              disabled={isCurrent}
            >
              <ButtonLink type="secondary">{i + 1}</ButtonLink>
            </ItemLink>
          )
        })}

        {!isLast && (
          <ItemLink to={`/${pagePath}/${nextPage}`}>
            <ButtonLink
              iconLeft={<ChevronRight />}
              type="secondary"
              title="Next page"
            />
          </ItemLink>
        )}
      </Stack>
    </PaginationContainer>
  )
}

export default Pagination
