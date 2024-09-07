export type PaginationProps = {
  count: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  page: number;
};
