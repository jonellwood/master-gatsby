import { Link } from 'gatsby';
import React from 'react';

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prePage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;
  return (
    <div>
      <Link to={`${base}/${prePage}`}>&#8592; Prev</Link>
      <Link to={`${base}/${nextPage}`}>Next &#8594; </Link>
    </div>
  );
}
