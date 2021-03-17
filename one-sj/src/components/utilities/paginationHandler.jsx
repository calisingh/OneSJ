import React from "react";
import _ from "lodash";
import Pagination from "react-bootstrap/Pagination";

export function paginate(items, currentPage, pageSize) {
  const startIndex = (currentPage - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}

const PaginationHandler = ({
  itemCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const pageCount = Math.ceil(itemCount / pageSize);

  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <Pagination style={{ justifyContent: "center" }}>
      <Pagination.Prev
        onClick={() =>
          onPageChange(currentPage - 1 < 1 ? currentPage : currentPage - 1)
        }
      >
        Prev
      </Pagination.Prev>
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={page === currentPage ? true : false}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() =>
          onPageChange(
            currentPage + 1 > pageCount ? currentPage : currentPage + 1
          )
        }
      >
        Next
      </Pagination.Next>
    </Pagination>
  );
};

export default PaginationHandler;
