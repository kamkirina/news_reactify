import { Skeleton } from "../../components/Skeleton/Skeleton";

export function withSkeleton(Component, type, count) {
  return function WithSkeleton(props) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }

    return <Component {...restProps} />;
  };
}
