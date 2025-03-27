import { Pagination } from "../Pagination/Pagination";

export function PaginationWrapper({
  top,
  bottom,
  children,
  ...paginationProps
}) {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
}
