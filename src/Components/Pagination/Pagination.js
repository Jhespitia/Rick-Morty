import React, { useState, useEffect } from "react";
import '../Pagination/pagination.css'
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, info, setPageNumber }) => {
  let pageChange = (data) => {
    setPageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const setDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", setDimensions);
    return () => window.removeEventListener("resize", setDimensions);
  }, []);

  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center my-2 p-5 gap-4"
        nextLabel=">>"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="<<"
        previousClassName="btn fs-5 prev"
        nextClassName="btn fs-5 next"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
      <p>create By - JHON ESPITIA</p>
    </>
  );
};

export default Pagination;