import Pagination from "react-bootstrap/Pagination";
import _ from "lodash";

// Function used to determine what data to display corresponding to the current page.
// Sourced from Coding With Mosh
export function paginate(items, currentPage, pageSize) {
  const startIndex = (currentPage - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}

// SFC for rendering the pagination bar
const PaginationHandler = ({
  itemCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  // Don't render if there are no items being displayed
  if (itemCount === 0) return null;

  // Calculate the amount of pages
  const pageCount = Math.ceil(itemCount / pageSize);

  // Don't render if there is only one page
  if (pageCount === 1) return null;

  // Create an array from 1 - pageCount
  const pages = _.range(1, pageCount + 1);

  return (
    // Same thing as mentioned in the dataDisplay file. Refer to that for explanation on why I am putting styling in here.
    <Pagination
      style={{
        width: "80%",
        margin: "0 0 0 20%",
        justifyContent: "center",
      }}
    >
      <Pagination.Prev
        onClick={() =>
          onPageChange(currentPage - 1 < 1 ? currentPage : currentPage - 1)
        }
      >
        Prev
      </Pagination.Prev>
      {/* Create a button for each possible page */}
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
