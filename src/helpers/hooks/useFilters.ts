import { useState } from "react";
import { IFilters } from "../../interfaces";

export const useFilters = (initialFilters: IFilters) => {
  const [filter, setFilter] = useState<IFilters>(initialFilters);

  const changeFilter = (key: string, value: string | null | number) => {
    setFilter((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filter, changeFilter };
};
