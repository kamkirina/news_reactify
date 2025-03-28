import { IPaginationProps } from "../../interfaces";
import { Pagination } from "../Pagination/Pagination";

interface IProps {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

export function PaginationWrapper({
  top,
  bottom,
  children,
  ...paginationProps
}: IProps & IPaginationProps) {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
}
